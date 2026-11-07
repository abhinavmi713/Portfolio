# Abhinav Kumar · Portfolio

Personal portfolio built with React, Next.js (JavaScript) and Tailwind CSS.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000. Check a production build with `npm run build` and `npm start`.

## Edit the content

| What | Where |
|---|---|
| Links, stats, experience, skills, case studies | `src/data/site.js` |
| Home page copy and sections | `src/app/page.js` |
| Colours and styling | `src/app/globals.css` |
| Photos | `public/images/` |
| Résumé PDF | `public/Abhinav-Kumar-Resume.pdf` |

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository. It detects Next.js, so the defaults work.
3. Deploy. Every push to `main` then deploys automatically.
4. Optional: add a custom domain, then set `NEXT_PUBLIC_SITE_URL` to it in the project's environment variables and redeploy (see `.env.example`).
