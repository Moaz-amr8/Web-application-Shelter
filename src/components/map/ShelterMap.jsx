import React, { useState, useCallback, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  Circle,
} from "react-leaflet";
import L from "leaflet";
import * as turf from "@turf/turf";
import Draggable from "react-draggable";

import { shelterData } from "@/data/shelters.js";
import ShelterPopup from "@/components/shelter/ShelterPopup";
import RouteDetailsPanel from "@/components/shelter/RouteDetailsPanel";
import RoutingMachine from "./RoutingMachine";

// ─── Custom Icons ─────────────────────────────────────────────────────────────
const shelterIcon = L.divIcon({
  className: "",
  html: `<div style="
    width:36px;height:36px;border-radius:50%;
    background:hsl(200,90%,50%);
    border:3px solid hsl(1,0%,100%);
    display:flex;align-items:center;justify-content:center;
    font-size:16px;
    box-shadow:0 4px 16px rgba(10,170,220,0.5);
    cursor:pointer;
  ">🏥</div>`,
  iconSize: [10, 10],
  iconAnchor: [14, 15],
  popupAnchor: [0, -22],
});

const userIcon = L.divIcon({
  className: "",
  html: `<div style="
    width:18px;height:18px;border-radius:50%;
    background:hsl(145,65%,42%);
    border:3px solid hsl(0,0%,100%);
    box-shadow:0 0 0 4px rgba(42,174,90,0.3);
  "></div>`,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

// ─── GPS Watcher ──────────────────────────────────────────────────────────────
const GPSWatcher = ({ onLocationFound }) => {
  const calledRef = useRef(false);
  const map = useMapEvents({
    locationfound(e) {
      onLocationFound(e.latlng);
    },
  });
  if (!calledRef.current) {
    calledRef.current = true;
    map.locate({ setView: false, watch: true, enableHighAccuracy: true });
  }
  return null;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function findNearestShelter(userLatLng) {
  if (!shelterData.features.length) return null;
  const userPoint = turf.point([userLatLng.lng, userLatLng.lat]);
  let nearest = null;
  let minDist = Infinity;
  for (const f of shelterData.features) {
    const sp = turf.point(f.geometry.coordinates);
    const d = turf.distance(userPoint, sp);
    if (d < minDist) {
      minDist = d;
      nearest = f;
    }
  }
  return nearest;
}

function turfDistanceLabel(from, to) {
  const a = turf.point([from.lng, from.lat]);
  const b = turf.point(to);
  const d = turf.distance(a, b);
  return d < 1 ? `${Math.round(d * 1000)} m` : `${d.toFixed(1)} km`;
}

// ─── Main Map Component ───────────────────────────────────────────────────────
const ShelterMap = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [targetShelter, setTargetShelter] = useState(null);
  const [routeFrom, setRouteFrom] = useState(null);
  const [routeTo, setRouteTo] = useState(null);
  const [routeDistance, setRouteDistance] = useState(null);
  const [routeDuration, setRouteDuration] = useState(null);
  const [routeLoading, setRouteLoading] = useState(false);
  const [nearestShelter, setNearestShelter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);

  const draggableRef = useRef(null);

  const handleLocationFound = useCallback((latlng) => {
    setUserLocation((prev) => {
      if (
        prev &&
        Math.abs(prev.lat - latlng.lat) < 0.0001 &&
        Math.abs(prev.lng - latlng.lng) < 0.0001
      ) {
        return prev;
      }
      const nearest = findNearestShelter(latlng);
      setNearestShelter(nearest);
      return latlng;
    });
  }, []);

  const handleNavigate = useCallback(
    (props) => {
      const feature = shelterData.features.find((f) => f.properties.id === props.id);
      if (!feature) return;
      const [lng, lat] = feature.geometry.coordinates;
      const dest = L.latLng(lat, lng);
      setTargetShelter(props);
      setRouteTo(dest);
      if (userLocation) {
        setRouteFrom(userLocation);
        const d = turfDistanceLabel(userLocation, feature.geometry.coordinates);
        setRouteDistance(d);
        setRouteDuration("Calculating...");
      } else {
        setRouteFrom(L.latLng(48.8566, 2.3522));
        setRouteDistance("—");
        setRouteDuration("—");
      }
    },
    [userLocation]
  );

  const handleRouteFound = useCallback((dist, dur) => {
    setRouteDistance(dist);
    setRouteDuration(dur);
    setRouteLoading(false);
  }, []);

  const handleRoutingStart = useCallback(() => {
    setRouteLoading(true);
  }, []);

  const handleClearRoute = useCallback(() => {
    setTargetShelter(null);
    setRouteFrom(null);
    setRouteTo(null);
    setRouteDistance(null);
    setRouteDuration(null);
    setRouteLoading(false);
  }, []);

  const filteredShelters = shelterData.features.filter(
    (f) =>
      f.properties.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.properties.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const defaultCenter = [30.062, 31.368];

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* ─── Map ─── */}
      <MapContainer
        center={defaultCenter}
        zoom={12}
        style={{ width: "100%", height: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          maxZoom={20}
        />

        <GPSWatcher onLocationFound={handleLocationFound} />

        <RoutingMachine
          from={routeFrom}
          to={routeTo}
          onRouteFound={handleRouteFound}
          onRoutingStart={handleRoutingStart}
        />

        {userLocation && (
          <>
            <Circle
              center={userLocation}
              radius={80}
              pathOptions={{
                color: "hsl(145,65%,42%)",
                fillColor: "hsl(145,65%,42%)",
                fillOpacity: 0.15,
                weight: 1.5,
              }}
            />
            <Marker position={userLocation} icon={userIcon}>
              <Popup>
                <div style={{ fontFamily: "system-ui, sans-serif", fontSize: 13, color: "hsl(210 20% 90%)" }}>
                  <strong>📍 Your Location</strong>
                  <br />
                  <span style={{ color: "hsl(215 15% 55%)", fontSize: 11 }}>
                    {userLocation.lat.toFixed(5)}, {userLocation.lng.toFixed(5)}
                  </span>
                </div>
              </Popup>
            </Marker>
          </>
        )}

        {shelterData.features.map((feature) => {
          const [lng, lat] = feature.geometry.coordinates;
          return (
            <Marker key={feature.properties.id} position={[lat, lng]} icon={shelterIcon}>
              <Popup minWidth={270} maxWidth={280} closeButton>
                <ShelterPopup
                  properties={feature.properties}
                  onNavigate={handleNavigate}
                />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* ───  Control Panel ─── */}
      {/* ===== TOP NAV BAR ===== */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        {/* Accent line */}
        <div style={{ height: 3, background: "linear-gradient(90deg, hsl(200 90% 50%), hsl(145 65% 42%))" }} />

        {/* Main bar */}
        <div
          style={{
            background: "hsl(220 22% 12%)",
            borderBottom: "1px solid hsl(220 15% 20%)",
            padding: "0 16px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            height: 56,
          }}
          
        >
          {/* Logo / Title */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <span style={{ fontSize: 20 }}>🚨</span>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "hsl(210 20% 95%)" }}>
                Emergency Shelter
              </div>
              {/* Hide subtitle on small screens */}
              <div
                style={{
                  fontSize: 10,
                  color: "hsl(215 15% 45%)",
                  letterSpacing: "0.06em",
                  display: window.innerWidth < 480 ? "none" : "block",
                }}
              >
                GUIDE & STATUS
              </div>
            </div>
          </div>

          {/* GPS pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "hsl(220 15% 18%)",
              border: "1px solid hsl(220 15% 26%)",
              borderRadius: 999,
              padding: "4px 10px",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                flexShrink: 0,
                background: userLocation ? "hsl(145 65% 42%)" : "hsl(38 90% 55%)",
              }}
            />
            {/* On mobile just show the dot, on wider show coords */}
            <span
              style={{
                fontSize: 11,
                color: "hsl(215 15% 60%)",
                display: window.innerWidth < 600 ? "none" : "inline",
                whiteSpace: "nowrap",
              }}
            >
              {userLocation
                ? `${userLocation.lat.toFixed(4)}°, ${userLocation.lng.toFixed(4)}°`
                : "Acquiring GPS..."}
            </span>
          </div>

          {/* Search — grows to fill space */}
          <div style={{ position: "relative", flex: 1, maxWidth: 320 }}>
            <span
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: 14,
                pointerEvents: "none",
              }}
            >
              🔍
            </span>
            <input
              type="text"
              placeholder="Search shelters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setPanelOpen(true)}
              style={{
                width: "100%",
                padding: "7px 10px 7px 32px",
                borderRadius: 8,
                background: "hsl(220 15% 16%)",
                border: "1px solid hsl(220 15% 24%)",
                color: "hsl(210 20% 90%)",
                fontSize: 13,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Toggle button */}
          <button
            onClick={() => setPanelOpen((v) => !v)}
            style={{
              background: panelOpen ? "hsl(200 90% 50% / 0.15)" : "hsl(220 15% 18%)",
              border: `1px solid ${panelOpen ? "hsl(200 90% 50% / 0.4)" : "hsl(220 15% 26%)"}`,
              borderRadius: 8,
              padding: "6px 12px",
              color: panelOpen ? "hsl(200 90% 60%)" : "hsl(215 15% 60%)",
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {panelOpen ? "▲ Close" : `▼ Shelters (${filteredShelters.length})`}
          </button>
          {nearestShelter && userLocation && (
            <button
              onClick={() => handleNavigate(nearestShelter.properties)}
              style={{
                display: window.innerWidth < 500 ? "none" : "flex",
                background: "hsl(200 90% 50%)",
                border: "none",
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 700,
                color: "hsl(220 20% 10%)",
                cursor: "pointer",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              🎯 Go →
            </button>
          )}
        </div>
  

        {/* ===== DROPDOWN PANEL ===== */}
        {panelOpen && (
          <div
            style={{
              background: "hsl(220 22% 12%)",
              borderBottom: "1px solid hsl(220 15% 20%)",
              boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
              // Responsive width: full on mobile, capped on desktop
              maxWidth: 480,
              width: "100%",
              margin: "0 auto 0 0", // align left; change to "0 auto" to center
            }}
          >
            {/* Shelter list */}
            <div style={{ maxHeight: "40vh", overflowY: "auto", padding: "8px 10px" }}>
              {filteredShelters.length === 0 && (
                <div style={{ padding: 16, color: "hsl(215 15% 45%)", fontSize: 13, textAlign: "center" }}>
                  No shelters found
                </div>
              )}

              {filteredShelters.map((feature) => {
                const p = feature.properties;
                const available = p.capacity - p.current_occupancy;
                const isFull = available <= 0;
                const pct = Math.min(100, Math.round((p.current_occupancy / p.capacity) * 100));
                const isTarget = targetShelter?.id === p.id;

                return (
                  <div
                    key={p.id}
                    onClick={() => { handleNavigate(p); setPanelOpen(false); }}
                    style={{
                      padding: "8px 8px",
                      cursor: "pointer",
                      borderBottom: "1px solid hsl(220 15% 18%)",
                      background: isTarget ? "hsl(200 90% 50% / 0.09)" : "transparent",
                      borderLeft: isTarget ? "3px solid hsl(200 90% 50%)" : "3px solid transparent",
                      transition: "background 0.2s",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "hsl(210 20% 90%)", flex: 1, marginRight: 8, lineHeight: 1.3 }}>
                        {p.name}
                      </div>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          padding: "2px 7px",
                          borderRadius: 999,
                          background: isFull ? "hsl(0 75% 55% / 0.15)" : "hsl(145 65% 42% / 0.15)",
                          color: isFull ? "hsl(0 75% 55%)" : "hsl(145 65% 42%)",
                          border: `1px solid ${isFull ? "hsl(0 75% 55% / 0.3)" : "hsl(145 65% 42% / 0.3)"}`,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {isFull ? "FULL" : `${available} free`}
                      </span>
                    </div>

                    {/* Occupancy bar */}
                    <div style={{ width: "100%", height: 3, borderRadius: 2, background: "hsl(220 15% 20%)", overflow: "hidden", marginBottom: 4 }}>
                      <div
                        style={{
                          width: `${pct}%`,
                          height: "100%",
                          borderRadius: 2,
                          background: isFull ? "hsl(0 75% 55%)" : pct >= 80 ? "hsl(40 90% 55%)" : "hsl(145 65% 42%)",
                        }}
                      />
                    </div>

                    <div style={{ display: "flex", gap: 12, fontSize: 11, color: "hsl(215 15% 50%)" }}>
                      <span>⚡ {p.electricity_quality}</span>
                      <span>🔥 {p.gas_quality}</span>
                      {userLocation && (
                        <span style={{ marginLeft: "auto" }}>
                          📏 {turfDistanceLabel(userLocation, feature.geometry.coordinates)}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Nearest shelter strip */}
            {nearestShelter && userLocation && (
              <div
                style={{
                  padding: "8px 12px",
                  borderTop: "1px solid hsl(220 15% 18%)",
                  background: "hsl(200 90% 50% / 0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <div style={{ fontSize: 10, fontWeight: 700, color: "hsl(200 90% 50%)", letterSpacing: "0.07em", flexShrink: 0 }}>
                  🎯 NEAREST
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "hsl(210 20% 90%)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {nearestShelter.properties.name}
                  </div>
                  <div style={{ fontSize: 11, color: "hsl(215 15% 50%)" }}>
                    {turfDistanceLabel(userLocation, nearestShelter.geometry.coordinates)} away
                  </div>
                </div>
                <button
                  onClick={() => { handleNavigate(nearestShelter.properties); setPanelOpen(false); }}
                  style={{
                    background: "hsl(200 90% 50%)",
                    border: "none",
                    borderRadius: 20,
                    padding: "5px 20px",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "hsl(220 20% 10%)",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                >
                  Go →
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Push map content down so it's not hidden under the navbar */}
      <div style={{ paddingTop: 59 }} />

      {/* ─── Route Details Panel ─── */}
      <RouteDetailsPanel
        shelter={targetShelter}
        distance={routeDistance}
        duration={routeDuration}
        isLoading={routeLoading}
        onClear={handleClearRoute}
      />
    </div>
  );
};

export default ShelterMap;
