"use client";

import { useEffect, useState } from "react";

export function IntroSplash() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 2900);
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
        gap: 0,
      }}
    >
      {/* Logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/whet-logo.png"
        alt="whet studio"
        style={{
          width: 240,
          height: 240,
          opacity: 0,
          animation: "introLogoIn 1s cubic-bezier(.22,1,.36,1) 0.15s forwards",
        }}
      />

      {/* Tagline */}
      <p
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: 11,
          letterSpacing: ".22em",
          textTransform: "uppercase",
          color: "#6A605A",
          marginTop: 4,
          opacity: 0,
          animation: "introTaglineIn 0.8s cubic-bezier(.22,1,.36,1) 0.85s forwards",
        }}
      >
        Afilamos restaurantes
      </p>

      {/* Red accent line */}
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
          animation: "introLineGrow 1.2s cubic-bezier(.22,1,.36,1) 0.4s forwards",
        }}
      />

      {/* Curtain slides up to reveal site */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#0A0908",
          animation: "introCurtainUp 0.75s cubic-bezier(.76,0,.24,1) 2.2s forwards",
        }}
      />
    </div>
  );
}
