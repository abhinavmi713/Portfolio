import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="cs-hero" style={{ paddingBottom: 120 }}>
      <div className="kicker">404 · p100 latency: ∞</div>
      <h1 className="cs-title">This request never <em className="sig">arrived.</em></h1>
      <p className="cs-lede">The page you asked for doesn&apos;t exist. Nothing was retried, and nothing landed in a dead-letter queue.</p>
      <div className="ctas">
        <Link className="btn btn-solid" href="/">Back to home <span className="arr" aria-hidden="true">→</span></Link>
      </div>
    </div>
  );
}
