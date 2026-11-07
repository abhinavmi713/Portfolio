"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { toggleTheme } from "@/lib/theme";
import CommandPalette from "./CommandPalette";

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="topbar" data-stuck={stuck}>
      <div className="wrap nav">
        <Link className="logo" href="/" aria-label="Abhinav Kumar, home">
          <span className="logo-mark" aria-hidden="true">ak</span>
          <span>abhinav.kumar</span>
        </Link>
        <nav className="navlinks" aria-label="Primary">
          <Link href="/#work">Work</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#stack">Stack</Link>
          <Link href="/#about">About</Link>
          <Link href="/resume">Résumé</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <div className="navtools">
          <button className="chip-k" type="button" onClick={() => setPaletteOpen(true)} aria-label="Open command menu">
            Search <kbd>⌘K</kbd>
          </button>
          <button className="iconbtn" type="button" onClick={toggleTheme} aria-label="Toggle light or dark theme">
            <svg className="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
            <svg className="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          </button>
        </div>
      </div>
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </header>
  );
}
