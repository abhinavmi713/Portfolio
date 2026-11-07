"use client";

import { useState } from "react";

const SCALE = 757;
const MODES = {
  none: {
    label: "no cache",
    bar: "k-db",
    rps: "141",
    avg: 352,
    p50: 299,
    p99: 757,
    gain: "1×",
    note: "Every request runs the full MongoDB query.",
  },
  redis: {
    label: "redis",
    bar: "k-cache",
    rps: "1,207",
    avg: 41,
    p50: 38,
    p99: 84,
    gain: "8.5×",
    note: "What shipped. One cache shared across instances, invalidated everywhere by a single INCR.",
  },
  local: {
    label: "in-process",
    bar: "k-app",
    rps: "1,495",
    avg: 33,
    p50: 29,
    p99: 94,
    gain: "10.6×",
    note: "About 24% faster, and rejected: each instance keeps its own copy and disagrees after a change.",
  },
};

export default function LatencyPanel() {
  const [mode, setMode] = useState("redis");
  const m = MODES[mode];
  const rows = [
    ["p50", m.p50],
    ["avg", m.avg],
    ["p99", m.p99],
  ];

  return (
    <div className="panel" role="group" aria-label="Measured latency of the Learnify course catalog">
      <div className="panel-h">
        <div className="ptitle">
          <span className="method">GET</span>
          <span>/course/getAllCourses</span>
        </div>
        <div className="seg" role="group" aria-label="Caching strategy">
          {Object.entries(MODES).map(([key, v]) => (
            <button key={key} type="button" aria-pressed={mode === key} onClick={() => setMode(key)}>
              {v.label}
            </button>
          ))}
        </div>
      </div>
      <div className="trace">
        <div className="axis" aria-hidden="true">
          <span />
          <div className="ticks">
            <span>0</span>
            <span>250</span>
            <span>500</span>
            <span>750 ms</span>
          </div>
          <span />
        </div>
        {rows.map(([name, value], i) => (
          <div className="lat-row" key={name}>
            <span className="muted">{name}</span>
            <div className="track">
              <div
                key={mode}
                className={`bar ${m.bar}`}
                style={{ width: `${(value / SCALE) * 100}%`, animationDelay: `${i * 0.1}s` }}
              />
            </div>
            <span className="lat-v">{value} ms</span>
          </div>
        ))}
      </div>
      <p key={mode} className="panel-note">{m.note}</p>
      <div className="panel-f">
        <div>
          <div className="pf-n">{m.avg} ms</div>
          <div className="pf-l">avg latency</div>
        </div>
        <div>
          <div className="pf-n">{m.rps}</div>
          <div className="pf-l">req / s</div>
        </div>
        <div>
          <div className={`pf-n ${mode === "none" ? "muted" : "sig"}`}>{m.gain}</div>
          <div className="pf-l">throughput</div>
        </div>
      </div>
      <div className="panel-foot">
        Real results: 50 connections, 10 s, one process on a dev laptop. Compare them, don&apos;t read them as absolutes.
      </div>
    </div>
  );
}
