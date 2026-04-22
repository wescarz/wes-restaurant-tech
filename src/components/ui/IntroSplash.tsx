"use client";

import { useEffect, useState } from "react";

export function IntroSplash() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 2300);
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
        alignItems: "center",
        justifyContent: "center",
        background: "#FAF8F4",
        pointerEvents: "none",
      }}
    >
      {/* Logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ascualab-logo.png"
        alt="Ascua Lab"
        style={{
          width: 200,
          opacity: 0,
          transform: "translateY(10px)",
          animation: "introLogoIn 0.8s cubic-bezier(.22,1,.36,1) 0.3s forwards",
        }}
      />

      {/* Red line */}
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
          animation: "introLineGrow 1s cubic-bezier(.22,1,.36,1) 0.4s forwards",
        }}
      />

      {/* Curtain that slides up */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#FAF8F4",
          transformOrigin: "top",
          animation: "introCurtainUp 0.65s cubic-bezier(.76,0,.24,1) 1.7s forwards",
        }}
      />
    </div>
  );
}
