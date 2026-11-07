import Link from "next/link";
import { notFound } from "next/navigation";
import Benchmarks from "@/components/Benchmarks";
import DuplicateDemo from "@/components/DuplicateDemo";
import FlowWalkthrough from "@/components/FlowWalkthrough";
import LatencyPanel from "@/components/LatencyPanel";
import { caseStudies, site } from "@/data/site";

const external = { target: "_blank", rel: "noopener noreferrer" };

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cs = caseStudies[slug];
  if (!cs) return {};
  return {
    title: `${cs.title} case study`,
    description: cs.headline,
    alternates: { canonical: `/work/${slug}` },
    openGraph: { title: `${cs.title} · ${site.name}`, description: cs.headline, url: `/work/${slug}` },
  };
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const cs = caseStudies[slug];
  if (!cs) notFound();
  const isLearnify = slug === "learnify";

  return (
    <article>
      <header className="cs-hero">
        <Link className="link-arrow muted" style={{ fontSize: 14 }} href="/#work"><span aria-hidden="true">←</span> All work</Link>
        <div className="kicker" style={{ marginTop: 24 }}>{cs.kicker} · {cs.title}</div>
        <h1 className="cs-title">{cs.headline}</h1>
        <p className="cs-lede">{cs.summary}</p>
        <div className="ctas">
          <a className="btn btn-solid" href={cs.repo} {...external}>View on GitHub <span className="arr" aria-hidden="true">↗</span></a>
        </div>
        <div className="cs-facts">
          {cs.facts.map(([k, v]) => (
            <div key={k}>
              <div className="fact-k">{k}</div>
              <div className="fact-v">{v}</div>
            </div>
          ))}
        </div>
      </header>

      {isLearnify ? (
        <>
          <section className="cs-sec" aria-labelledby="arch">
            <div className="kicker">Architecture</div>
            <h2 className="cs-sec-t" id="arch">Slow, failure-prone work leaves the request.</h2>
            <div className="case" style={{ paddingTop: 8 }}>
              <FlowWalkthrough />
            </div>
          </section>
          <section className="cs-sec" aria-labelledby="results">
            <div className="kicker">Results</div>
            <h2 className="cs-sec-t" id="results">The numbers.</h2>
            <div className="case-top">
              <LatencyPanel />
              <div><Benchmarks /></div>
            </div>
            <p className="sync-cap" style={{ marginTop: 24, fontSize: 13 }}>{cs.caveat}</p>
          </section>
        </>
      ) : (
        <section className="cs-sec" aria-labelledby="try">
          <div className="kicker">Try the idea</div>
          <h2 className="cs-sec-t" id="try">Move the threshold.</h2>
          <div style={{ maxWidth: 720 }}><DuplicateDemo /></div>
        </section>
      )}

      {cs.findings.length > 0 && (
        <section className="cs-sec" aria-labelledby="learned">
          <div className="kicker">What the load tests found</div>
          <h2 className="cs-sec-t" id="learned">What broke, and why.</h2>
          <div>
            {cs.findings.map((f) => (
              <div className="find reveal" key={f.t}>
                <div className="find-n">{f.n}</div>
                <div>
                  <h3>{f.t}</h3>
                  <p>{f.b}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="cs-sec" aria-labelledby="decisions">
        <div className="kicker">Decisions</div>
        <h2 className="cs-sec-t" id="decisions">What I chose, and what it cost.</h2>
        <div className="dec-grid">
          {cs.decisions.map((d) => (
            <div className="dec reveal" key={d.t}>
              <h3>{d.t}</h3>
              <p>{d.b}</p>
            </div>
          ))}
        </div>
      </section>

      {cs.docs.length > 0 && (
        <section className="cs-sec" aria-labelledby="docs">
          <div className="kicker">Go deeper</div>
          <h2 className="cs-sec-t" id="docs">Read the source docs.</h2>
          <div className="links-row">
            {cs.docs.map(([label, path]) => (
              <a className="link-arrow" key={path} href={`${cs.repo}/blob/main/${path}`} {...external}>{label} <span aria-hidden="true">↗</span></a>
            ))}
          </div>
        </section>
      )}
      <div style={{ height: 96 }} />
    </article>
  );
}
