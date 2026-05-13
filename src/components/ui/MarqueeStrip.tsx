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

function WhetLogo() {
  return (
    <span style={{ display: "inline-block", width: 72, height: 29, overflow: "hidden", flexShrink: 0, margin: "0 4px", verticalAlign: "middle" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/whet-logo.png"
        alt="whet studio"
        style={{ width: 72, height: "auto", transform: "translate(0px, -21px)" }}
      />
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
              <WhetLogo />
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
