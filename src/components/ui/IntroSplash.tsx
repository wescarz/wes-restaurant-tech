"use client";

import { useEffect, useState } from "react";

export function IntroSplash() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 5200);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0A0908",
        pointerEvents: "none",
      }}
    >
      {/* Logo grande — visible desde el primer frame */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/whet-logo.png"
        alt="whet studio"
        style={{
          width: "min(420px, 72vw)",
          height: "auto",
        }}
      />

      {/* Tagline */}
      <p
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: "clamp(10px, 1.2vw, 13px)",
          letterSpacing: ".28em",
          textTransform: "uppercase",
          color: "#6A605A",
          marginTop: 8,
          opacity: 0,
          animation: "introTaglineIn 1s cubic-bezier(.22,1,.36,1) 1.2s forwards",
        }}
      >
        Afilamos restaurantes
      </p>

      {/* Línea roja inferior */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          transformOrigin: "left",
          transform: "scaleX(0)",
          background: "linear-gradient(90deg, #C4150A, #D4571A 60%, transparent)",
          animation: "introLineGrow 1.8s cubic-bezier(.22,1,.36,1) 0.5s forwards",
        }}
      />

      {/* Telón que sube */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#0A0908",
          animation: "introCurtainUp 0.85s cubic-bezier(.76,0,.24,1) 4.4s forwards",
        }}
      />
    </div>
  );
}
