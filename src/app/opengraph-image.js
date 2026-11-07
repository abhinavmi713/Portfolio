import { ImageResponse } from "next/og";

export const alt = "Abhinav Kumar: I build backends that hold up, then prove it.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#13233a", color: "#f4f1ea" }}>
        <div style={{ display: "flex", fontSize: 28, opacity: 0.75 }}>Abhinav Kumar · Backend &amp; Full Stack Engineer</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 92, lineHeight: 1.05 }}>
          <span>I build backends that</span>
          <span>hold up, <span style={{ color: "#ff6a4d", marginLeft: 22 }}>then prove it.</span></span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#ff6a4d" }}>8.5× throughput · p95 4.33 s → 76 ms · 12/12 hit@6</div>
      </div>
    ),
    size
  );
}
