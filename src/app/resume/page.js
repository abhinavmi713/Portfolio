import Link from "next/link";
import { experience, resumeProjects, resumeSkills, site } from "@/data/site";

export const metadata = {
  title: "Résumé",
  description: `Résumé of ${site.name}, ${site.role}.`,
  alternates: { canonical: "/resume" },
};

const external = { target: "_blank", rel: "noopener noreferrer" };

export default function Resume() {
  return (
    <div className="cs-hero" style={{ paddingBottom: 96 }}>
      <div className="kicker">Résumé</div>
      <h1 className="cs-title">{site.name}</h1>
      <p className="cs-lede">{site.role} · {site.tagline}</p>
      <div className="ctas">
        <a className="btn btn-solid" href={site.resumePdf} download>Download PDF <span className="arr" aria-hidden="true">↓</span></a>
        <a className="btn btn-ghost" href={site.certificate} {...external}>Innovaccer certificate <span className="arr" aria-hidden="true">↗</span></a>
      </div>

      <section className="cs-sec" aria-labelledby="r-exp">
        <h2 className="cs-sec-t" id="r-exp">Experience &amp; education</h2>
        <div style={{ borderTop: "1px solid var(--ink)" }}>
          {experience.map((e) => (
            <div className="r-block" key={e.company}>
              <div className="r-head"><span>{e.company}</span><span>{e.dates}</span></div>
              <div className="r-sub" style={{ margin: "4px 0 14px" }}>{e.role}</div>
              <ul className="exp-list">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="cs-sec" aria-labelledby="r-proj">
        <h2 className="cs-sec-t" id="r-proj">Projects</h2>
        <div style={{ borderTop: "1px solid var(--ink)" }}>
          {resumeProjects.map((p) => (
            <div className="r-block" key={p.name}>
              <div className="r-head"><Link href={p.href}>{p.name}</Link><span>{p.dates}</span></div>
              <ul className="exp-list" style={{ marginTop: 14 }}>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="cs-sec" aria-labelledby="r-skills">
        <h2 className="cs-sec-t" id="r-skills">Technical skills</h2>
        <div style={{ borderTop: "1px solid var(--ink)", paddingTop: 12 }}>
          {resumeSkills.map(([k, v]) => (
            <div className="r-skill" key={k}>
              <strong style={{ fontWeight: 600 }}>{k}</strong>
              <span>{v}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
