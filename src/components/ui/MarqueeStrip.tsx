"use client";

const tags = [
  "Consultoría gastronómica",
  "Rentabilidad y márgenes",
  "Aperturas",
  "Procesos y equipo",
  "GastroManager",
  "MESA",
  "Concepto gastronómico",
  "Ingeniería de menú",
];

function WhetLogo() {
  return (
    <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1, margin: "0 32px" }}>
      <span style={{ fontFamily: "var(--font-fraunces)", fontSize: 22, fontWeight: 300, fontStyle: "italic", color: "#FAF8F4", letterSpacing: "-.01em" }}>
        whet
      </span>
      <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 7, letterSpacing: ".22em", textTransform: "uppercase", color: "#5A4A3A", marginTop: 1 }}>
        studio
      </span>
    </span>
  );
}

function Strip() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" }}>
      {tags.map((tag, i) => (
        <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
          <span style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: 10,
            fontWeight: 400,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "#7A6A5A",
            padding: "0 28px",
          }}>
            {tag}
          </span>
          {i % 3 === 2 && <WhetLogo />}
          {i % 3 !== 2 && (
            <span style={{ color: "#3A2A1A", fontSize: 8 }}>·</span>
          )}
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
        borderTop: "1px solid #1E1612",
        borderBottom: "1px solid #1E1612",
        overflow: "hidden",
        padding: "10px 0",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          animation: "marquee 32s linear infinite",
          willChange: "transform",
        }}
      >
        <Strip />
        <Strip />
      </div>
    </div>
  );
}
