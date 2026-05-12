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

function Separator() {
  return (
    <span style={{ color: "#3A2A1A", fontSize: 10, padding: "0 20px", flexShrink: 0 }}>·</span>
  );
}

function WhetBadge() {
  return (
    <span style={{ display: "inline-flex", alignItems: "baseline", gap: 5, margin: "0 8px", flexShrink: 0 }}>
      <span style={{
        fontFamily: "var(--font-playfair)",
        fontSize: 16,
        fontWeight: 600,
        fontStyle: "italic",
        color: "#FAF8F4",
        letterSpacing: "-.01em",
      }}>
        whet
      </span>
      <span style={{
        fontFamily: "var(--font-dm-sans)",
        fontSize: 8,
        fontWeight: 400,
        letterSpacing: ".22em",
        textTransform: "uppercase",
        color: "#5A4A3A",
      }}>
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
          }}>
            {tag}
          </span>
          {i % 3 === 2 ? (
            <>
              <Separator />
              <WhetBadge />
              <Separator />
            </>
          ) : (
            <Separator />
          )}
        </span>
      ))}
    </span>
  );
}

export function MarqueeStrip() {
  return (
    <div style={{ background: "#0A0908", borderTop: "1px solid #1E1612", borderBottom: "1px solid #1E1612", overflow: "hidden", padding: "13px 0" }}>
      <div style={{ display: "inline-flex", alignItems: "center", animation: "marquee 32s linear infinite", willChange: "transform" }}>
        <Strip />
        <Strip />
      </div>
    </div>
  );
}
