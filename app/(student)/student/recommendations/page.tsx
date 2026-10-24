// app/(student)/student/recommendations/page.tsx
"use client";

import React, { useState } from "react";

const RECOMMENDATIONS = [
  {
    id: "rec-1",
    code: "CAPG",
    title: "Cloud & AI Platform Engineering Intern",
    company: "Capgemini Technology Services India",
    location: "Bengaluru (Hybrid)",
    domain: "AI & Cloud",
    stipend: "₹25,000",
    affinity: 94.2,
    skills: ["PyTorch", "FastAPI", "Docker", "SQL"],
  },
  {
    id: "rec-2",
    code: "TCS",
    title: "Autonomous Agent Evaluator",
    company: "Tata Consultancy Services • R&D",
    location: "Hyderabad (Hybrid)",
    domain: "AI & Cloud",
    stipend: "₹30,000",
    affinity: 88.4,
    skills: ["Python", "LLM Benchmark", "HuggingFace"],
  },
  {
    id: "rec-3",
    code: "INFY",
    title: "Fullstack FinTech Systems Intern",
    company: "Infosys Limited",
    location: "Pune (On-site)",
    domain: "Full Stack",
    stipend: "₹25,000",
    affinity: 86.1,
    skills: ["Next.js", "Node.js", "Kafka"],
  },
  {
    id: "rec-4",
    code: "ISRO",
    title: "Orbital Telemetry Analytics Intern",
    company: "ISRO ISTRAC Space Lab",
    location: "Bengaluru (On-site)",
    domain: "Systems & Data",
    stipend: "₹22,000",
    affinity: 84.5,
    skills: ["C++", "Signal DSP", "Linux Ops"],
  },
];

export default function StudentRecommendationsPage() {
  const [search, setSearch] = useState("");
  const [domain, setDomain] = useState("All");
  const [applied, setApplied] = useState<string[]>(["rec-1"]);
  const [saved, setSaved] = useState<string[]>(["rec-2"]);

  const filtered = RECOMMENDATIONS.filter((item) => {
    const matchText =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.company.toLowerCase().includes(search.toLowerCase()) ||
      item.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchDomain = domain === "All" || item.domain === domain;
    return matchText && matchDomain;
  });

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm">
            AI Vector Skill Matching
          </span>
          <h1 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface mt-2">
            Top AI Recommendations
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Opportunities dynamically ranked by your verified skill baseline and
            proctored assessment score.
          </p>
        </div>

        <div className="flex items-center gap-1 p-1 bg-surface-container rounded-xl self-start">
          {["All", "AI & Cloud", "Full Stack", "Systems & Data"].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setDomain(tab)}
              className={`px-3 py-1.5 rounded-lg font-label-sm whitespace-nowrap transition-all ${
                domain === tab
                  ? "bg-surface-container-lowest text-primary font-semibold shadow-xs"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 bg-surface-container-lowest p-3 rounded-2xl border border-outline-variant/30">
        <span className="material-symbols-outlined text-outline pl-2">
          search
        </span>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filter matches by role, company, or skill..."
          className="w-full bg-transparent outline-none font-body-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((role) => {
          const isApplied = applied.includes(role.id);
          const isSaved = saved.includes(role.id);
          return (
            <div
              key={role.id}
              className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg bg-surface-container font-headline-sm font-bold text-xs text-on-surface">
                    {role.code}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm font-bold">
                    {role.affinity}% AI Match
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-on-surface">
                    {role.title}
                  </h3>
                  <p className="font-body-sm text-on-surface-variant">
                    {role.company} • {role.location}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {role.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-0.5 rounded bg-surface-container text-on-surface font-label-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <div>
                  <div className="font-label-sm text-on-surface-variant">
                    Monthly Stipend
                  </div>
                  <div className="font-headline-sm text-on-surface font-bold">
                    {role.stipend}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setSaved((prev) =>
                        prev.includes(role.id)
                          ? prev.filter((i) => i !== role.id)
                          : [...prev, role.id]
                      )
                    }
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isSaved
                        ? "bg-error-container text-error"
                        : "bg-surface-container text-on-surface-variant"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {isSaved ? "bookmark_added" : "bookmark"}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      !isApplied && setApplied([...applied, role.id])
                    }
                    className={`px-4 py-2 rounded-xl font-label-md transition-colors ${
                      isApplied
                        ? "bg-secondary-fixed text-on-secondary-fixed-variant font-bold"
                        : "bg-primary text-on-primary hover:bg-primary-container"
                    }`}
                  >
                    {isApplied ? "Applied ✓" : "Apply Now"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}