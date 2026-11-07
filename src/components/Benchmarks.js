import { benches } from "@/data/site";

export default function Benchmarks() {
  return (
    <div className="bench">
      {benches.map((b) => (
        <div key={b.label}>
          <div className="bench-h">
            <span>{b.label}</span>
            <span className="delta">{b.delta}</span>
          </div>
          <div className="bbar">
            <span>before</span>
            <div className="btrack"><div className="bfill before" style={{ width: `${b.bw}%` }} /></div>
            <span className="val">{b.before}</span>
          </div>
          <div className="bbar">
            <span>after</span>
            <div className="btrack"><div className="bfill after" style={{ width: `${b.aw}%` }} /></div>
            <span className="val">{b.after}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
