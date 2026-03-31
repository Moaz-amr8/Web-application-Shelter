import React from "react";

const CONFIG = {
  Excellent: {
    color: "hsl(145 65% 42%)",
    bg: "hsl(145 65% 42% / 0.15)",
    dot: "hsl(145 65% 42%)",
  },
  Good: {
    color: "hsl(155 60% 48%)",
    bg: "hsl(155 60% 48% / 0.12)",
    dot: "hsl(155 60% 48%)",
  },
  Acceptable: {
    color: "hsl(38 90% 55%)",
    bg: "hsl(38 90% 55% / 0.14)",
    dot: "hsl(38 90% 55%)",
  },
  Poor: {
    color: "hsl(0 75% 55%)",
    bg: "hsl(0 75% 55% / 0.14)",
    dot: "hsl(0 75% 55%)",
  },
};

const QualityBadge = ({ level, compact = false }) => {
  const cfg = CONFIG[level] || CONFIG.Poor;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        padding: compact ? "2px 8px" : "3px 10px",
        borderRadius: "999px",
        background: cfg.bg,
        border: `1px solid ${cfg.color}40`,
        color: cfg.color,
        fontSize: compact ? "11px" : "12px",
        fontWeight: 600,
        letterSpacing: "0.02em",
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          width: compact ? 6 : 7,
          height: compact ? 6 : 7,
          borderRadius: "50%",
          background: cfg.dot,
          flexShrink: 0,
          boxShadow: `0 0 6px ${cfg.dot}`,
        }}
      />
      {level}
    </span>
  );
};

export default QualityBadge;
