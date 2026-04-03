import React from "react";
import QualityBadge from "./QualityBadge";
import OccupancyBar from "./OccupancyBar";

const ShelterPopup = ({ properties, onNavigate }) => {
  const available = properties.capacity - properties.current_occupancy;
  const isFull = available <= 0;

  return (
    <div style={{ width: 260, fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 5 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 1 }}>
          <span style={{ fontSize: 18 }}>🏥</span>
          <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "hsl(210 20% 95%)", lineHeight: 1.3 }}>
            {properties.name}
          </h3>
        </div>
        <p style={{ margin: 0, fontSize: 11, color: "hsl(215 15% 55%)", paddingLeft: 20 }}>
          {properties.address}
        </p>
      </div>

      <div style={{ height: 1, background: "hsl(220 15% 22%)", marginBottom: 1 }} />

      {/* Occupancy */}
      <div style={{ marginBottom: 5 }}>
        <p style={{ margin: "0 0 2px", fontSize: 11, fontWeight: 600, color: "hsl(215 15% 55%)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Occupancy
        </p>
        <OccupancyBar capacity={properties.capacity} current_occupancy={properties.current_occupancy} />
      </div>

      <div style={{ height: 1, background: "hsl(220 15% 22%)", marginBottom: 10 }} />

      {/* Utilities */}
      <div style={{ marginBottom: 5 }}>
        <p style={{ margin: "0 0 1px", fontSize: 11, fontWeight: 600, color: "hsl(215 15% 55%)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Utilities
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "hsl(215 15% 70%)" }}>⚡ Electricity</span>
            <QualityBadge level={properties.electricity_quality} compact />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "hsl(215 15% 70%)" }}>🔥 Gas</span>
            <QualityBadge level={properties.gas_quality} compact />
          </div>
        </div>
      </div>

      {/* Navigate Button */}
      <button
        onClick={() => onNavigate(properties)}
        disabled={isFull}
        style={{
          width: "100%",
          padding: "9px 0",
          borderRadius: 8,
          border: "solid black 1px",
          cursor: isFull ? "not-allowed" : "pointer",
          background: isFull
            ? "hsl(220 15% 22%)"
            : "linear-gradient(135deg, hsl(200 90% 50%), hsl(200 80% 40%))",
          color: isFull ? "hsl(215 15% 45%)" : "hsl(0 0% 100%)",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.04em",
          boxShadow: isFull ? "none" : "0 2px 5px hsl(200 90% 50% / 0.35)",
        }}
      >
        {isFull ? "⛔ Shelter Full" : "🧭 Navigate Here"}
      </button>
    </div>
  );
};

export default ShelterPopup;
