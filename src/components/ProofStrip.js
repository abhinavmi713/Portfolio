"use client";

import { useEffect, useRef, useState } from "react";
import { proofStats } from "@/data/site";

function format(stat, t) {
  const v = stat.from + (stat.to - stat.from) * t;
  switch (stat.kind) {
    case "latency":
      return v >= 1000 ? { value: (v / 1000).toFixed(2), unit: "s p95" } : { value: String(Math.round(v)), unit: "ms p95" };
    case "ratio":
      return { value: `${Math.round(v)}/${stat.of}`, unit: stat.unit };
    case "plus":
      return { value: `${Math.round(v)}+`, unit: stat.unit };
    default:
      return { value: Math.round(v).toLocaleString("en-US"), unit: stat.unit };
  }
}

export default function ProofStrip() {
  // Starts at the final values so the server-rendered page already shows real numbers.
  const [t, setT] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - t0) / 1800);
          setT(1 - Math.pow(1 - p, 3));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="proof" ref={ref}>
      {proofStats.map((stat) => {
        const f = format(stat, t);
        return (
          <div key={stat.label}>
            <div className="proof-n">
              {f.value}
              <small>{f.unit}</small>
            </div>
            <div className="proof-l">{stat.label}</div>
            <div className="proof-s">{stat.sub}</div>
          </div>
        );
      })}
    </div>
  );
}
