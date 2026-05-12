const items = [
  { type: "brand", text: "whet studio" },
  { type: "sep", text: "·" },
  { type: "text", text: "Afilamos restaurantes" },
  { type: "sep", text: "·" },
  { type: "text", text: "Consultoría gastronómica" },
  { type: "sep", text: "·" },
  { type: "text", text: "Rentabilidad y márgenes" },
  { type: "sep", text: "·" },
  { type: "text", text: "Aperturas" },
  { type: "sep", text: "·" },
  { type: "text", text: "Procesos y equipo" },
  { type: "sep", text: "·" },
  { type: "text", text: "GastroManager" },
  { type: "sep", text: "·" },
  { type: "text", text: "MESA" },
  { type: "sep", text: "·" },
];

function Strip() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 0, whiteSpace: "nowrap" }}>
      {items.map((item, i) => (
        <span
          key={i}
          style={{
            fontFamily: item.type === "brand" ? "var(--font-cormorant)" : "var(--font-dm-sans)",
            fontSize: item.type === "brand" ? 17 : item.type === "sep" ? 12 : 12,
            fontWeight: item.type === "brand" ? 600 : item.type === "sep" ? 400 : 400,
            fontStyle: item.type === "brand" ? "italic" : "normal",
            color: item.type === "brand" ? "#FAF8F4" : item.type === "sep" ? "#6B5B4E" : "#A09080",
            letterSpacing: item.type === "brand" ? ".02em" : ".12em",
            textTransform: item.type === "text" ? "uppercase" : "none",
            padding: item.type === "sep" ? "0 20px" : "0 0",
            marginRight: item.type === "brand" ? 20 : 0,
          }}
        >
          {item.text}
        </span>
      ))}
    </span>
  );
}

export function MarqueeStrip() {
  return (
    <div
      style={{
        background: "#0A0908",
        borderTop: "1px solid #2E2420",
        borderBottom: "1px solid #2E2420",
        overflow: "hidden",
        padding: "14px 0",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          animation: "marquee 28s linear infinite",
          willChange: "transform",
        }}
      >
        <Strip />
        <Strip />
      </div>
    </div>
  );
}
