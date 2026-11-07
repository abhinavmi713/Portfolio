"use client";

import { useRef, useState } from "react";
import { site } from "@/data/site";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      window.location.href = `mailto:${site.email}`;
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button className="mailbtn" type="button" onClick={copy} aria-label={`Copy email address ${site.email}`}>
      {site.email}
      <span className="cp" aria-live="polite">{copied ? "copied ✓" : "copy"}</span>
    </button>
  );
}
