"use client";

import { useState } from "react";

const NEIGHBORS = [
  ["What is the fastest way to learn Python?", 0.91],
  ["How can I learn Python quickly as a beginner?", 0.87],
  ["Which Python book is best for beginners?", 0.76],
  ["How long does it take to learn Python?", 0.71],
  ["How do I learn Java fast?", 0.64],
];

export default function DuplicateDemo() {
  const [thr, setThr] = useState(0.8);
  const count = NEIGHBORS.filter(([, s]) => s >= thr).length;

  return (
    <div className="demo" role="group" aria-label="Duplicate detection demo">
      <div className="q">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
        <span>How do I learn Python fast?</span>
        <span className="caret" aria-hidden="true" />
      </div>
      <div className="thr">
        <label htmlFor="thr-in">threshold</label>
        <input
          id="thr-in"
          type="range"
          min="0.6"
          max="0.95"
          step="0.01"
          value={thr}
          onChange={(e) => setThr(parseFloat(e.target.value))}
        />
        <span className="sig" style={{ fontWeight: 600 }}>{thr.toFixed(2)}</span>
      </div>
      {NEIGHBORS.map(([text, score]) => {
        const dup = score >= thr;
        return (
          <div className="nb" data-dup={dup} key={text}>
            <div className="nt">
              {dup && <span className="badge">dup</span>}
              <span>{text}</span>
            </div>
            <div className="nbar" aria-hidden="true"><i style={{ width: `${score * 100}%` }} /></div>
            <div className="nscore">{score.toFixed(2)}</div>
          </div>
        );
      })}
      <div className="sync-cap" aria-live="polite">{count} of 5 flagged as duplicates · example query, scores illustrative</div>
    </div>
  );
}
