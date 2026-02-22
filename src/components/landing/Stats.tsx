"use client";

import { useEffect, useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const stats = [
  { value: 500, suffix: "+", label: "recetas gestionadas" },
  { value: 35, suffix: "%", label: "reducción food cost medio" },
  { value: 6, suffix: "", label: "idiomas soportados" },
  { value: 50, suffix: "+", label: "funcionalidades" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="font-heading text-4xl font-bold text-[var(--accent)] sm:text-5xl">
                  <AnimatedNumber value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-[var(--text-secondary)]">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
