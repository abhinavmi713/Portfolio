import { caseStudies, site } from "@/data/site";

export default function sitemap() {
  const paths = ["", "/resume", ...Object.keys(caseStudies).map((s) => `/work/${s}`)];
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() }));
}
