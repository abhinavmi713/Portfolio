import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="foot">
      <span>© {new Date().getFullYear()} {site.name} · {site.location}</span>
      <span>Built with React, Next.js and Tailwind CSS</span>
      <Link href="/#main">Back to top ↑</Link>
    </footer>
  );
}
