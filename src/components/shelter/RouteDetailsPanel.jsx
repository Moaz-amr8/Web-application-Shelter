import React from "react";
import QualityBadge from "./QualityBadge";

const Stat = ({ label, value, icon }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 1,
      padding: "2px 12px",
      borderRadius: 10,
      background: "hsl(220 15% 16%)",
      border: "1px solid hsl(220 15% 22%)",
      flex: 1,
      minWidth: 80,
    }}
  >
    <span style={{ fontSize: 10, color: "hsl(215 15% 50%)", textTransform: "uppercase", letterSpacing: "0.07em", fontWeight: 600 }}>
      {icon} {label}
    </span>
    <span style={{ fontSize: 15, fontWeight: 700, color: "hsl(210 20% 92%)", whiteSpace: "nowrap" }}>
      {value}
    </span>
  </div>
);

const UtilityRow = ({ icon, label, children }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "3px 4px",
      borderRadius: 8,
      background: "hsl(220 15% 15%)",
    }}
  >
    <span style={{ fontSize: 13, color: "hsl(215 15% 65%)" }}>
      {icon} {label}
    </span>
    {children}
  </div>
);

const RouteDetailsPanel = ({ shelter, distance, duration, isLoading, onClear }) => {
  if (!shelter) return null;

  const available = shelter.capacity - shelter.current_occupancy;
  const isFull = available <= 0;
  const occupancyPct = Math.min(100, Math.round((shelter.current_occupancy / shelter.capacity) * 100));

  return (
    <div
      style={{
        position: "fixed",
        bottom: 10,
        right: 4,
        zIndex: 1000,
        width: 200,
        height:200,
        background: "hsl(220 22% 12%)",
        border: "1px solid hsl(220 15% 22%)",
        borderRadius: 16,
        boxShadow: "0 16px 48px rgba(0,0,0,0.6), 0 0 0 1px hsl(220 15% 18%)",
        overflowY: "auto",
        overflowX:"hidden",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: 3, background: "linear-gradient(90deg, hsl(200 90% 50%), hsl(160 70% 45%))" }} />

      {/* Header */}
      <div
        style={{
          padding: "14px 16px 12px",
          borderBottom: "1px solid hsl(220 15% 18%)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: 1, marginRight: 8 }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: "hsl(200 90% 50%)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
            📍 Active Route
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "hsl(210 20% 95%)", lineHeight: 1.3 }}>
            {shelter.name}
          </div>
        </div>
        <button
          onClick={onClear}
          style={{
            background: "hsl(220 15% 20%)",
            border: "none",
            color: "hsl(215 15% 55%)",
            cursor: "pointer",
            borderRadius: 6,
            width: 28,
            height: 28,
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
          title="Clear route"
        >
          ✕
        </button>
      </div>

      {/* Distance & Time */}
      <div style={{ padding: "12px 16px", borderBottom: "1px solid hsl(220 15% 18%)" }}>
        {isLoading ? (
          <div style={{ textAlign: "center", color: "hsl(215 15% 50%)", fontSize: 13, padding: "4px 0" }}>
            ⏳ Calculating route...
          </div>
        ) : (
          <div style={{ display: "flex", gap: 8 }}>
            <Stat icon="📏" label="Distance" value={distance ?? "—"} />
            <Stat icon="🕒" label="Est. Time" value={duration ?? "—"} />
          </div>
        )}
      </div>

      {/* Vital Status Section */}
      <div style={{ padding: "12px 16px" }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: "hsl(215 15% 50%)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
          ⚕️ Mas Shelter Status
        </div>

        {/* Available Spaces */}
        <div
          style={{
            padding: "10px 12px",
            borderRadius: 10,
            background: isFull ? "hsl(0 75% 55% / 0.1)" : "hsl(145 65% 42% / 0.1)",
            border: `1px solid ${isFull ? "hsl(0 75% 55% / 0.3)" : "hsl(145 65% 42% / 0.3)"}`,
            marginBottom: 10,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 12, color: "hsl(215 15% 65%)" }}>👥 Available Spaces</span>
            <span style={{ fontSize: 16, fontWeight: 800, color: isFull ? "hsl(0 75% 55%)" : "hsl(145 65% 42%)" }}>
              {isFull ? "FULL" : available.toLocaleString()}
            </span>
          </div>
          <div style={{ width: "100%", height: 5, borderRadius: 3, background: "hsl(220 15% 20%)", overflow: "hidden" }}>
            <div
              style={{
                width: `${occupancyPct}%`,
                height: "100%",
                borderRadius: 3,
                background: isFull ? "hsl(0 75% 55%)" : occupancyPct >= 80 ? "hsl(38 90% 55%)" : "hsl(145 65% 42%)",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 10, color: "hsl(215 15% 45%)" }}>
            <span>{shelter.current_occupancy} / {shelter.capacity} occupants</span>
            <span>{occupancyPct}%</span>
          </div>
        </div>

        {/* Utilities */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <UtilityRow icon="⚡" label="Electricity">
            <QualityBadge level={shelter.electricity_quality} />
          </UtilityRow>
          <UtilityRow icon="🔥" label="Gas Supply">
            <QualityBadge level={shelter.gas_quality} />
          </UtilityRow>
        </div>
      </div>
    </div>
  );
};

export default RouteDetailsPanel;
