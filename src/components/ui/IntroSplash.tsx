"use client";

import { useEffect, useState } from "react";

export function IntroSplash() {
  const [hiding, setHiding] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadyShown = sessionStorage.getItem("whet-splash") === "1";

    if (reduced || alreadyShown) {
      const id = setTimeout(() => setDone(true), 0);
      return () => clearTimeout(id);
    }

    sessionStorage.setItem("whet-splash", "1");
    document.body.style.overflow = "hidden";

    const hideTimer = setTimeout(() => setHiding(true), 900);
    const doneTimer = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 1400);

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
        transition: hiding ? "opacity 0.4s ease" : undefined,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/whet-logo.png"
        alt="whet studio"
        style={{ width: "min(420px, 72vw)", height: "auto" }}
      />

      <p
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: "clamp(11px, 2vw, 13px)",
          letterSpacing: ".28em",
          textTransform: "uppercase",
          color: "#6A605A",
          marginTop: 8,
          opacity: 0,
          animation: "introTaglineIn 0.6s cubic-bezier(.22,1,.36,1) 0.3s forwards",
        }}
      >
        Afilamos restaurantes
      </p>

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
          animation: "introLineGrow 1s cubic-bezier(.22,1,.36,1) 0.1s forwards",
        }}
      />
    </div>
  );
}
