import Image from "next/image";
import Link from "next/link";
import Benchmarks from "@/components/Benchmarks";
import CoachingModules from "@/components/CoachingModules";
import CopyEmail from "@/components/CopyEmail";
import DuplicateDemo from "@/components/DuplicateDemo";
import FlowWalkthrough from "@/components/FlowWalkthrough";
import LatencyPanel from "@/components/LatencyPanel";
import ProofStrip from "@/components/ProofStrip";
import { capabilities, experience, site } from "@/data/site";

const STACK = ["Node.js", "FastAPI", "RabbitMQ", "Redis", "Elasticsearch", "MongoDB", "PostgreSQL", "pgvector", "Qdrant", "Gemini", "OpenTelemetry", "Prometheus", "Grafana", "k6", "Docker", "React"];

const external = { target: "_blank", rel: "noopener noreferrer" };

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-top fade-in" style={{ animationDelay: "0s" }}>
          <Image className="avatar" src="/images/abhinav-avatar.webp" alt="" width={96} height={96} priority />
          <div className="status">
            <span className="pulse" aria-hidden="true" />
            <span>Open to SDE &amp; backend roles · 2026 graduate</span>
          </div>
        </div>
        <h1 className="display" id="hero-title">
          <span className="line"><span>I build backends</span></span>
          <span className="line"><span style={{ animationDelay: ".12s" }}>that hold up,</span></span>
          <span className="line"><span style={{ animationDelay: ".24s" }}><em className="underline-draw">then prove it.</em></span></span>
        </h1>

        <div className="hero-row">
          <div className="fade-in">
            <p className="lede">
              I&apos;m <b>Abhinav Kumar</b>, a full-stack and backend engineer. I build event-driven systems with queues, caches and search, then load-test them until I have numbers I can stand behind. Most recently at <b>Innovaccer</b>, on a healthcare data platform.
            </p>
            <div className="ctas">
              <Link className="btn btn-solid" href="/#work">See the work <span className="arr" aria-hidden="true">→</span></Link>
              <a className="btn btn-ghost" href={site.resumePdf} {...external}>Résumé (PDF) <span className="arr" aria-hidden="true">↓</span></a>
            </div>
            <ul className="meta">
              <li><span className="k">Based in</span><span>{site.location}</span></li>
              <li><span className="k">Previously</span><span>Innovaccer · Xebia</span></li>
              <li><span className="k">Focus</span><span>Distributed systems · Applied AI (RAG)</span></li>
            </ul>
          </div>
          <div className="fade-in" style={{ animationDelay: ".7s" }}>
            <p className="note">
              <svg width="34" height="20" viewBox="0 0 34 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                <path d="M2 4c8 0 18 2 26 12" />
                <path d="M22 15l6 1 1-6" />
              </svg>
              flip the cache. These are the real numbers.
            </p>
            <LatencyPanel />
          </div>
        </div>
        <ProofStrip />
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="mq-track">
          {[...STACK, ...STACK].map((s, i) => <span key={i}>{s}</span>)}
        </div>
      </div>

      <section className="sec" id="work" aria-labelledby="work-title">
        <div className="sec-h">
          <div>
            <div className="kicker">Selected work</div>
            <h2 className="sec-t" id="work-title">Systems, with <em>receipts.</em></h2>
          </div>
          <p className="sec-side">Where a number appears on this page, the load test, eval set or repo behind it is one click away.</p>
        </div>

        <article className="case reveal" aria-labelledby="learnify-t">
          <div className="case-top">
            <div>
              <div className="idx"><b>01</b><span>Flagship · 2025 to now</span></div>
              <h3 className="case-t" id="learnify-t">Learnify</h3>
              <p>A production-grade e-learning platform. It started as my internship MVP at Xebia, then I rebuilt it as an event-driven system: an API, a worker and an AI microservice, coordinated through RabbitMQ.</p>
              <ul className="bullets">
                <li>Transactional outbox + RabbitMQ with retries, dead-letter queues, idempotent consumers and a refund saga</li>
                <li>RAG study assistant on Gemini embeddings + Qdrant, tuned to 12/12 hit@6 with all off-topic queries rejected</li>
                <li>Rotating refresh tokens, TOTP 2FA, RBAC, HMAC-signed webhooks and an append-only audit log</li>
              </ul>
              <div className="tags">
                {["MERN", "Redis", "RabbitMQ", "Elasticsearch", "Qdrant", "OpenTelemetry", "Docker"].map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
              <div className="links-row">
                <Link className="link-arrow" href="/work/learnify">Read the case study <span aria-hidden="true">→</span></Link>
                <a className="link-arrow" href={site.links.learnify} {...external}>GitHub <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div>
              <div className="kicker" style={{ marginBottom: 20 }}>Load tests · before → after</div>
              <Benchmarks />
            </div>
          </div>
          <FlowWalkthrough />
        </article>

        <article className="case reveal" aria-labelledby="coach-t">
          <div className="case-coach">
            <div>
              <div className="idx"><b>02</b><span>Real client · Purnea</span><span className="live">in progress</span></div>
              <h3 className="case-t" id="coach-t">Coaching Institute Platform</h3>
              <p>A complete digital platform for my teacher&apos;s coaching institute, built from scratch. It replaces a broken site and will support up to 500 students, with an admin panel he runs himself.</p>
              <ul className="bullets">
                <li>Public website, plus student and parent logins</li>
                <li>Recorded lectures, notes and timetables in one place</li>
                <li>Fee tracking the institute manages without a developer</li>
              </ul>
            </div>
            <CoachingModules />
          </div>
        </article>

        <div className="two">
          <article className="case lift reveal" aria-labelledby="sc-t">
            <div className="idx"><b>03</b><span>Applied AI · Jan 2025 to now</span></div>
            <h3 className="case-t" id="sc-t">Sense-Cluster</h3>
            <p>A semantic Q&amp;A platform that catches duplicate questions before they&apos;re posted. Questions are embedded with all-mpnet-base-v2 and matched with pgvector cosine search over an IVFFlat index.</p>
            <DuplicateDemo />
            <div className="tags">
              {["FastAPI", "PostgreSQL", "pgvector", "Sentence-Transformers", "React"].map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
            <div className="links-row">
              <Link className="link-arrow" href="/work/sense-cluster">Read the case study <span aria-hidden="true">→</span></Link>
              <a className="link-arrow" href={site.links.senseCluster} {...external}>GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </article>

          <article className="case lift reveal" aria-labelledby="inv-t">
            <div className="idx"><b>04</b><span>Industry · Jan to Aug 2026</span></div>
            <h3 className="case-t" id="inv-t">Innovaccer</h3>
            <p>Application Engineering Intern on a healthcare data platform. I resolved ~30 production bugs across FastAPI services and the React frontend, and shipped features in Rule Engine, Consent Management, Patient Search and Clinical Cards.</p>
            <div className="demo" role="img" aria-label="Illustration: a stale search record is brought back in line with the MongoDB source">
              <div className="kicker" style={{ marginBottom: 14 }}>ProfileSyncJob · fixing drift</div>
              <div className="sync">
                <div className="store">
                  <div className="store-h">MongoDB · source</div>
                  <div className="rec"><span>record A</span><span>v12</span></div>
                  <div className="rec"><span>record B</span><span>v7</span></div>
                  <div className="rec"><span>record C</span><span>v3</span></div>
                </div>
                <div className="pipe" />
                <div className="store">
                  <div className="store-h">Elasticsearch · search</div>
                  <div className="rec"><span>record A</span><span className="ver"><span className="old">v11</span><span className="new">v12</span></span></div>
                  <div className="rec"><span>record B</span><span>v7</span></div>
                  <div className="rec"><span>record C</span><span>v3</span></div>
                </div>
              </div>
              <div className="sync-cap">Illustration only, no real data. Search stays consistent with the source of truth.</div>
            </div>
            <div className="tags">
              {["FastAPI", "React", "MongoDB", "Elasticsearch", "Agile / Scrum"].map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
            <div className="links-row">
              <a className="link-arrow" href={site.certificate} {...external}>View certificate <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        </div>
      </section>

      <section className="sec" id="experience" aria-labelledby="exp-title">
        <div className="sec-h">
          <div>
            <div className="kicker">Experience</div>
            <h2 className="sec-t" id="exp-title">Where I&apos;ve <em>shipped.</em></h2>
          </div>
        </div>
        <div className="exp">
          {experience.map((e) => (
            <div className="exp-row reveal" key={e.company}>
              <div className="exp-d">{e.dates}</div>
              <div>
                <h3 className="exp-co">{e.company}</h3>
                <div className="exp-role">{e.role}</div>
                {e.certificate && (
                  <a className="link-arrow" style={{ fontSize: 14 }} href={site.certificate} {...external}>Certificate <span aria-hidden="true">↗</span></a>
                )}
              </div>
              <ul className="exp-list">
                {e.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="sec" id="stack" aria-labelledby="stack-title">
        <div className="sec-h">
          <div>
            <div className="kicker">Capabilities</div>
            <h2 className="sec-t" id="stack-title">Tools, with <em>evidence.</em></h2>
          </div>
          <p className="sec-side">No skill bars. Each row points to the work that uses it.</p>
        </div>
        <div>
          {capabilities.map((c) => (
            <div className="cap-row reveal" key={c.name}>
              <h3 className="cap-name">{c.name}</h3>
              <div className="cap-tools">{c.tools.map((t) => <span key={t}>{t}</span>)}</div>
              <div className="cap-ev">used in <Link href={c.href}>{c.evidence}</Link></div>
            </div>
          ))}
        </div>
      </section>

      <section className="sec" id="about" aria-labelledby="about-title">
        <div className="sec-h">
          <div>
            <div className="kicker">About</div>
            <h2 className="sec-t" id="about-title">The person behind <em>the p95.</em></h2>
          </div>
        </div>
        <div className="about">
          <figure className="photo reveal">
            <Image
              src="/images/abhinav-portrait.webp"
              alt="Abhinav Kumar in a black shirt and glasses, standing with hands in pockets against a dark grey wall"
              fill
              sizes="(max-width: 1000px) 420px, 400px"
              style={{ objectFit: "cover" }}
            />
            <figcaption>{site.location}</figcaption>
          </figure>
          <div className="reveal">
            <p className="about-t">With a handful of demo courses, nobody noticed the bug. At nine thousand, it <em>took 8 seconds.</em></p>
            <p className="about-p">That&apos;s the kind of problem I go looking for. A k6 run showed Learnify&apos;s catalog returning a 3.5 MB response, and paginating it took the journey p95 from 8.27 s to 25 ms. At Innovaccer it meant tracing production bugs to their root cause, and fixing the drift between MongoDB and the search index.</p>
            <p className="about-p">I studied Computer Science at UPES Dehradun on a full merit scholarship. Right now I&apos;m building the digital platform for my teacher&apos;s coaching institute in Purnea, which replaces a broken site and will support up to 500 students.</p>
          </div>
          <div className="facts reveal">
            <div className="fact"><div className="fact-k">Education</div><div className="fact-v"><b>B.Tech CS</b>Full Stack AI · UPES · CGPA 8.29</div></div>
            <div className="fact"><div className="fact-k">Scholarship</div><div className="fact-v"><b>100% merit</b>top 50 students</div></div>
            <div className="fact"><div className="fact-k">Problem solving</div><div className="fact-v"><b>1000+</b>problems · Codeforces 1200+</div></div>
          </div>
        </div>
      </section>

      <section className="contact reveal" id="contact" aria-labelledby="contact-title">
        <div className="kicker">Contact</div>
        <h2 className="contact-t" id="contact-title">Let&apos;s build something<br />that <em>holds up.</em></h2>
        <div className="c-row">
          <CopyEmail />
          <div className="c-links">
            <a href={site.links.linkedin} {...external}>LinkedIn ↗</a>
            <a href={site.links.github} {...external}>GitHub ↗</a>
            <a href={site.links.codeforces} {...external}>Codeforces ↗</a>
            <a href={site.links.leetcode} {...external}>LeetCode ↗</a>
          </div>
        </div>
      </section>
    </>
  );
}
