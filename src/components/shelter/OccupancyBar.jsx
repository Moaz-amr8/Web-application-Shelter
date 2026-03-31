import React from "react";

const OccupancyBar = ({ capacity, current_occupancy }) => {
  const pct = Math.min(100, Math.round((current_occupancy / capacity) * 100));
  const available = capacity - current_occupancy;
  const isFull = available <= 0;

  let barColor;
  if (pct >= 100) barColor = "hsl(0 75% 55%)";
  else if (pct >= 80) barColor = "hsl(38 90% 55%)";
  else barColor = "hsl(145 65% 42%)";

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
        <span style={{ fontSize: 12, color: "hsl(215 15% 60%)" }}>
          {current_occupancy} / {capacity} occupants
        </span>
        <span style={{ fontSize: 12, fontWeight: 700, color: isFull ? "hsl(0 75% 55%)" : "hsl(145 65% 42%)" }}>
          {isFull ? "FULL" : `${available} spaces free`}
        </span>
      </div>
      <div style={{ width: "100%", height: 8, borderRadius: 4, background: "hsl(220 15% 20%)", overflow: "hidden" }}>
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            borderRadius: 4,
            background: barColor,
            transition: "width 0.4s ease",
            boxShadow: `0 0 8px ${barColor}80`,
          }}
        />
      </div>
      <div style={{ textAlign: "right", fontSize: 11, color: "hsl(215 15% 50%)", marginTop: 3 }}>
        {pct}% occupied
      </div>
    </div>
  );
};

export default OccupancyBar;
