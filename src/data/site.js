export const site = {
  name: "Abhinav Kumar",
  role: "Full Stack & Backend Engineer",
  tagline: "Distributed Systems · Applied AI (RAG, Embeddings)",
  description:
    "Abhinav Kumar is a full-stack and backend engineer who builds event-driven systems with queues, caches and search, then load-tests them until the numbers hold.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  location: "Noida, India",
  email: "abhinavmi713@gmail.com",
  resumePdf: "/Abhinav-Kumar-Resume.pdf",
  certificate:
    "https://drive.google.com/file/d/1DwjDriJrGrBQM8IJzHUzfWzS4t2CZnaS/view?usp=sharing",
  links: {
    linkedin: "https://www.linkedin.com/in/abhinavkumar0207/",
    github: "https://github.com/abhinavmi713",
    codeforces: "https://codeforces.com/profile/abhinav90",
    leetcode: "https://leetcode.com/u/abhinavmi713/",
    learnify: "https://github.com/abhinavmi713/Learnify",
    senseCluster: "https://github.com/abhinavmi713/Sense-Cluster",
  },
};

export const proofStats = [
  { kind: "count", from: 141, to: 1207, unit: "req/s", label: "Learnify catalog throughput with a shared Redis cache", sub: "141 → 1,207 · 8.5×" },
  { kind: "latency", from: 4330, to: 76, label: "Search p95 after moving to Elasticsearch", sub: "4.33 s → 76 ms · 30 virtual users" },
  { kind: "ratio", from: 0, to: 12, of: 12, unit: "hit@6", label: "RAG retrieval on the eval set", sub: "all off-topic queries rejected" },
  { kind: "plus", from: 0, to: 150, unit: "tests", label: "API tests running in CI", sub: "GitHub Actions → Docker images" },
];

export const benches = [
  { label: "Visitor journey p95", delta: "−99.7%", before: "8.27 s", after: "25 ms", bw: 100, aw: 1.2 },
  { label: "Search p95", delta: "−98.2%", before: "4.33 s", after: "76 ms", bw: 100, aw: 1.8 },
  { label: "Catalog avg latency", delta: "−88%", before: "352 ms", after: "41 ms", bw: 100, aw: 11.6 },
  { label: "Catalog throughput", delta: "8.5×", before: "141 /s", after: "1,207 /s", bw: 11.7, aw: 100 },
];

export const experience = [
  {
    company: "Innovaccer",
    role: "Application Engineering Intern · Healthcare Data Platform",
    dates: "Jan 2026 – Aug 2026",
    certificate: true,
    points: [
      "Resolved ~30 production bugs across FastAPI backend services and the React frontend, tracing each to root cause and shipping tested fixes",
      "Enhanced ProfileSyncJob to fix sync drift between MongoDB and Elasticsearch, improving consistency of patient data served by search",
      "Delivered features for Rule Engine, Consent Management, Patient Search and Clinical Cards",
      "Worked in an Agile/Scrum pod alongside QA and product",
    ],
  },
  {
    company: "Xebia",
    role: "Full Stack Development Intern · Project: Learnify",
    dates: "Jun 2025 – Jul 2025",
    points: [
      "Built the first version of Learnify, a MERN ed-tech platform with student and instructor workflows, JWT authentication and role-based access control",
      "Integrated Razorpay checkout, Cloudinary media management and a Gemini-powered chatbot for learner questions",
    ],
  },
  {
    company: "UPES Dehradun",
    role: "B.Tech Computer Science · Specialization in Full Stack AI",
    dates: "2022 – 2026",
    points: [
      "CGPA 8.29 on a 100% merit scholarship, awarded for ranking among the top 50 students",
      "1000+ coding problems solved across platforms; 1200+ Codeforces rating (Pupil)",
    ],
  },
];

export const capabilities = [
  { name: "Messaging & events", tools: ["RabbitMQ", "Transactional outbox", "Dead-letter queues", "Sagas", "Idempotency keys", "Socket.IO"], evidence: "Learnify", href: "/work/learnify" },
  { name: "Data & search", tools: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "pgvector", "Qdrant"], evidence: "Learnify · Innovaccer", href: "/work/learnify" },
  { name: "Applied AI", tools: ["RAG", "Embeddings", "Sentence-Transformers", "BERT", "Google Gemini", "Semantic search"], evidence: "Sense-Cluster · Learnify", href: "/work/sense-cluster" },
  { name: "Reliability", tools: ["k6", "OpenTelemetry", "Prometheus", "Grafana", "Jest", "pytest", "GitHub Actions", "Docker"], evidence: "Learnify", href: "/work/learnify" },
  { name: "Product surface", tools: ["Node.js", "Express", "FastAPI", "React", "Redux Toolkit", "Tailwind CSS"], evidence: "Everything here", href: "/#work" },
];

export const resumeSkills = [
  ["Languages", "JavaScript, TypeScript, Python, C++, SQL"],
  ["Backend & APIs", "Node.js, Express.js, FastAPI, REST, Socket.IO, OpenAPI, SQLAlchemy, Mongoose"],
  ["Frontend", "React.js, Redux Toolkit, Tailwind CSS, HTML, CSS, Vite"],
  ["Data & Messaging", "MongoDB, PostgreSQL, Redis, Elasticsearch, RabbitMQ, Qdrant, pgvector"],
  ["AI / ML", "RAG, Embeddings, Sentence-Transformers, BERT, Google Gemini, Semantic Search"],
  ["DevOps & Testing", "Docker, Kubernetes, GitHub Actions (CI/CD), Prometheus, Grafana, OpenTelemetry, Jest, pytest, k6, Git, Postman"],
];

export const resumeProjects = [
  {
    name: "Learnify: Production-Grade E-Learning Platform",
    dates: "2025 – Present",
    href: "/work/learnify",
    points: [
      "Event-driven system (API, worker, AI microservice) using a transactional outbox + RabbitMQ with retry/dead-letter queues, idempotent consumers and a refund saga",
      "Redis cache with versioned invalidation and stampede protection: 8.5x throughput (141 → 1,207 req/s), avg latency 352 → 41 ms",
      "Elasticsearch search cut p95 from 4.33 s to 76 ms at 4x throughput",
      "RAG study assistant tuned on an eval set to 12/12 hit@6 with all off-topic queries rejected",
      "Rotating refresh tokens, TOTP 2FA, RBAC, append-only audit log, idempotency keys, HMAC-signed webhooks",
      "k6 load tests drove fixes that cut journey p95 from 8.3 s to 25 ms; 150+ Jest tests and CI publishing Docker images",
    ],
  },
  {
    name: "Sense-Cluster: Semantic Q&A Platform",
    dates: "Jan 2025 – Present",
    href: "/work/sense-cluster",
    points: [
      "Prototyped duplicate-question detection with BERT embeddings on Quora Question Pairs (300K+ pairs), reaching 80% accuracy and beating a TF-IDF baseline",
      "Rebuilt as a full-stack Q&A app using all-mpnet-base-v2 and pgvector cosine search over an IVFFlat index",
      "RBAC with an approval workflow, JWT + Argon2 auth and rate limiting; 24 pytest tests, Alembic migrations and GitHub Actions CI",
    ],
  },
  {
    name: "Coaching Institute Platform, Purnea",
    dates: "In progress",
    href: "/#work",
    points: [
      "Public website, student and parent logins, recorded lectures, notes, timetables, fee tracking and a self-run admin panel, replacing a broken site and supporting up to 500 students",
    ],
  },
];

export const caseStudies = {
  learnify: {
    slug: "learnify",
    title: "Learnify",
    kicker: "Case study · 2025 – present",
    headline: "An e-learning platform with the backend most tutorials skip.",
    summary:
      "Instructors publish video courses, students buy them, learn, take quizzes and earn verifiable certificates, and an AI assistant answers from the course's own lectures. It began as my internship MVP at Xebia. I rebuilt it as a modular monolith plus a worker and an AI service, coordinated through RabbitMQ.",
    repo: "https://github.com/abhinavmi713/Learnify",
    facts: [
      ["Stack", "MERN, Redis, RabbitMQ, Elasticsearch, Qdrant, Docker"],
      ["Scope", "Students, instructors, admins"],
      ["Tests", "150+ API tests in CI"],
      ["Observability", "Prometheus, Grafana, OpenTelemetry, Jaeger"],
    ],
    decisions: [
      { t: "Modular monolith, not a service per domain", b: "Paying enrolls you in a course and creates progress records, so those domains share transactions. Splitting them would turn local transactions into distributed ones, for a team of one. Only work with a different runtime profile moved out: the worker and the AI service." },
      { t: "RabbitMQ, not BullMQ or Kafka", b: "One order.paid event has several independent consumers, each needing its own retries and failure isolation. Topic routing gives each its own queue. BullMQ would make Redis critical, and Kafka's weight wasn't needed because the outbox already gives replay." },
      { t: "Transactional outbox, not publish-after-save", b: "Saving an order and then publishing is a dual write, and a crash between the two loses the event. The event goes in the same MongoDB transaction as the change. The cost is at-least-once delivery with a small delay, so consumers record processed event ids." },
      { t: "Redis over a faster in-process cache", b: "In-process was about 24% faster per hit, but each instance keeps its own copy and disagrees after a change. Redis costs a network hop for one shared cache, invalidated by a single INCR of a version key." },
      { t: "Every infrastructure dependency is optional", b: "Redis, RabbitMQ, Elasticsearch and Qdrant each degrade to a simpler equivalent when down, so a dependency failure means a degraded feature, not an outage. The cost is two code paths for some features, both covered by tests." },
      { t: "Rotating refresh tokens with reuse detection", b: "15-minute access tokens, plus single-use refresh tokens stored only as a hash. Presenting a used one revokes the whole login family, which detects theft." },
    ],
    findings: [
      { n: "3.5 MB → 8 KB", t: "The endpoint nobody suspected", b: "The catalog endpoint returned every course. With a few demo courses nobody noticed. At 9,000 courses it saturated the server even when cached. Keyset pagination took journey p95 from 8.27 s to 25 ms." },
      { n: "1.75 s → 76 ms", t: "Elasticsearch wasn't enough", b: "The first Elasticsearch version was barely faster than MongoDB. Removing features one at a time pointed at highlighting, which expanded every fuzzy term against the index. Plain title-only highlighting fixed it." },
      { n: "200K → 12 docs", t: "An index prefix matters", b: "Profile stats queried by userId, but the existing unique index started with courseID, so every request scanned all 200,000 rows." },
      { n: "0 docs read", t: "A low-selectivity index was slower than a scan", b: "An index on payment status took 49–79 ms against 24 ms for the scan, because it fetched 30K documents one by one. A covering index reads no documents at all." },
    ],
    caveat: "Numbers come from a developer laptop with a single API process, so read them as relative, not absolute. The k6 scripts are in the repo.",
    docs: [
      ["Architecture", "docs/ARCHITECTURE.md"],
      ["Design decisions", "docs/DECISIONS.md"],
      ["Performance", "docs/PERFORMANCE.md"],
      ["Messaging", "docs/MESSAGING.md"],
    ],
  },
  "sense-cluster": {
    slug: "sense-cluster",
    title: "Sense-Cluster",
    kicker: "Case study · Jan 2025 – present",
    headline: "Catching duplicate questions before they get posted.",
    summary:
      "An authenticated semantic Q&A application. It started as a research prototype on Quora Question Pairs and became a full-stack app: every question is embedded, compared against existing ones with vector search, and flagged if it's already been asked.",
    repo: "https://github.com/abhinavmi713/Sense-Cluster",
    facts: [
      ["Stack", "FastAPI, PostgreSQL, pgvector, React"],
      ["Model", "all-mpnet-base-v2"],
      ["Index", "IVFFlat, cosine search"],
      ["Tests", "24 pytest tests, CI"],
    ],
    decisions: [
      { t: "Prototype first, against a baseline", b: "BERT embeddings with cosine similarity on Quora Question Pairs (300K+ pairs) reached 80% accuracy and beat a TF-IDF baseline, before any product work started." },
      { t: "pgvector inside PostgreSQL", b: "Questions are matched by cosine search over an IVFFlat index, in the same database as the rest of the application data." },
      { t: "A tunable threshold", b: "The duplicate cut-off is a setting rather than a constant, so it can trade missed duplicates against false flags." },
      { t: "Access control with an approval workflow", b: "RBAC with an approval workflow, JWT + Argon2 authentication and rate limiting, with schema changes managed through Alembic migrations." },
    ],
    findings: [],
    docs: [],
  },
};
