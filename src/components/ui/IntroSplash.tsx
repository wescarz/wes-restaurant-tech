"use client";

import { useEffect, useState } from "react";

export function IntroSplash() {
  const [hiding, setHiding] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const hideTimer = setTimeout(() => setHiding(true), 4000);
    const doneTimer = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 5000);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(doneTimer);
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
        opacity: hiding ? 0 : 1,
        transition: hiding ? "opacity 0.9s ease" : undefined,
      }}
    >
      {/* Logo — visible desde el primer frame */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/whet-logo.png"
        alt="whet studio"
        style={{ width: "min(420px, 72vw)", height: "auto" }}
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
          animation: "introTaglineIn 1s cubic-bezier(.22,1,.36,1) 1s forwards",
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
          animation: "introLineGrow 2s cubic-bezier(.22,1,.36,1) 0.3s forwards",
        }}
      />
    </div>
  );
}
