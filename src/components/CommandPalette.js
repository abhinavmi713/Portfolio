"use client";

import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { site } from "@/data/site";
import { toggleTheme } from "@/lib/theme";

export default function CommandPalette({ open, onClose }) {
  const ref = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      // The input mounts before the dialog opens, so it has to be focused here.
      dialog.querySelector("input")?.focus();
    }
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const run = (fn) => () => {
    onClose();
    fn();
  };
  const go = (href) => run(() => router.push(href));
  const ext = (href) => run(() => window.open(href, "_blank", "noopener"));

  return (
    <dialog
      ref={ref}
      className="palette"
      aria-label="Command menu"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      {open && (
        <Command label="Command menu" loop>
          <Command.Input placeholder="Jump to a page or run an action…" />
          <Command.List>
            <Command.Empty>Nothing matches that.</Command.Empty>
            <Command.Group heading="Go to">
              <Command.Item onSelect={go("/#work")}>Selected work</Command.Item>
              <Command.Item onSelect={go("/work/learnify")}>Learnify case study</Command.Item>
              <Command.Item onSelect={go("/work/sense-cluster")}>Sense-Cluster case study</Command.Item>
              <Command.Item onSelect={go("/#experience")}>Experience</Command.Item>
              <Command.Item onSelect={go("/#about")}>About</Command.Item>
              <Command.Item onSelect={go("/resume")}>Résumé</Command.Item>
            </Command.Group>
            <Command.Group heading="Actions">
              <Command.Item onSelect={run(() => navigator.clipboard?.writeText(site.email))}>Copy email address</Command.Item>
              <Command.Item onSelect={run(toggleTheme)}>Toggle light or dark theme</Command.Item>
              <Command.Item onSelect={ext(site.resumePdf)}>Open résumé PDF</Command.Item>
            </Command.Group>
            <Command.Group heading="Elsewhere">
              <Command.Item onSelect={ext(site.links.github)}>GitHub</Command.Item>
              <Command.Item onSelect={ext(site.links.linkedin)}>LinkedIn</Command.Item>
              <Command.Item onSelect={ext(site.links.codeforces)}>Codeforces</Command.Item>
              <Command.Item onSelect={ext(site.links.leetcode)}>LeetCode</Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      )}
    </dialog>
  );
}
