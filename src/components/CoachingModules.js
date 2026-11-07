"use client";

import { useState } from "react";

const icon = (d) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

const MODULES = [
  { id: "site", name: "Public website", d: "M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" },
  { id: "login", name: "Student & parent logins", d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" },
  { id: "lectures", name: "Recorded lectures", d: "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM10 9l5 3-5 3z" },
  { id: "notes", name: "Notes", d: "M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6M8 13h8M8 17h6" },
  { id: "timetable", name: "Timetables", d: "M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM16 3v4M8 3v4M3 11h18" },
  { id: "fees", name: "Fee tracking", d: "M3 7h18v12H3zM3 11h18M7 15h3" },
  { id: "admin", name: "Self-run admin panel", d: "M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M2 14h4M10 8h4M18 16h4" },
];

const ROLES = {
  Public: ["site"],
  Student: ["login", "lectures", "notes", "timetable", "fees"],
  Parent: ["login", "timetable", "fees"],
  Admin: ["site", "login", "lectures", "notes", "timetable", "fees", "admin"],
};

export default function CoachingModules() {
  const [role, setRole] = useState("Student");
  const active = ROLES[role];

  return (
    <div className="demo" style={{ marginTop: 0 }} role="group" aria-label="Platform modules by user role">
      <div className="kicker" style={{ marginBottom: 12 }}>One platform, four kinds of user</div>
      <div className="role-tabs" role="group" aria-label="Choose a role">
        {Object.keys(ROLES).map((r) => (
          <button key={r} type="button" aria-pressed={role === r} onClick={() => setRole(r)}>{r}</button>
        ))}
      </div>
      <ul className="modules">
        {MODULES.map((m) => (
          <li className="module" key={m.id} data-on={active.includes(m.id)}>
            {icon(m.d)}
            <span>{m.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
