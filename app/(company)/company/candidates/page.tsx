// app/(company)/company/candidates/page.tsx
"use client";

import React, { useState } from "react";

const CANDIDATES = [
  {
    id: "c1",
    name: "Aarav Sharma",
    branch: "B.Tech CSE (Full Stack)",
    cgpa: "9.1",
    affinity: 94.2,
    assessment: "96th Percentile",
    projects: 4,
    skills: ["PyTorch", "FastAPI", "React 19", "Docker"],
  },
  {
    id: "c2",
    name: "Diya Nair",
    branch: "B.Tech AI & Data Science",
    cgpa: "9.4",
    affinity: 91.8,
    assessment: "94th Percentile",
    projects: 5,
    skills: ["Python", "LangChain", "Kubernetes", "SQL"],
  },
  {
    id: "c3",
    name: "Rohan Verma",
    branch: "B.Tech CSE (Cloud)",
    cgpa: "8.8",
    affinity: 89.5,
    assessment: "91st Percentile",
    projects: 3,
    skills: ["AWS", "Terraform", "Docker", "Go"],
  },
  {
    id: "c4",
    name: "Meera Krishnan",
    branch: "B.Tech IT",
    cgpa: "9.0",
    affinity: 87.9,
    assessment: "89th Percentile",
    projects: 4,
    skills: ["Next.js", "TypeScript", "Node.js", "Kafka"],
  },
];

export default function CompanyCandidatesPage() {
  const [compareIds, setCompareIds] = useState<string[]>(["c1", "c2"]);
  const [invitedIds, setInvitedIds] = useState<string[]>([]);

  const toggleCompare = (id: string) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((i) => i !== id);
      if (prev.length >= 2) return [prev[1], id];
      return [...prev, id];
    });
  };

  const comparedCandidates = CANDIDATES.filter((c) =>
    compareIds.includes(c.id)
  );

  return (
    <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-8 space-y-8">
      <div>
        <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm">
          AI Talent Discovery
        </span>
        <h1 className="font-headline-lg text-headline-lg text-on-surface mt-2">
          Pre-Assessed Candidate Pool
        </h1>
        <p className="font-body-md text-on-surface-variant">
          Select any 2 candidates below to compare their verified assessment
          percentiles and skill matrices side-by-side.
        </p>
      </div>

      {/* Side-by-Side Comparison Matrix */}
      {comparedCandidates.length === 2 && (
        <div className="bg-primary text-on-primary rounded-3xl p-6 lg:p-8 shadow-md space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-sm text-on-primary">
              Side-by-Side AI Candidate Comparison
            </h2>
            <button
              type="button"
              onClick={() => setCompareIds([])}
              className="font-label-sm text-on-primary/80 hover:underline"
            >
              Clear Comparison
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparedCandidates.map((c) => (
              <div
                key={c.id}
                className="bg-inverse-surface/40 backdrop-blur-md rounded-2xl p-5 border border-on-primary/15 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-headline-sm text-on-primary">
                    {c.name}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm font-bold">
                    {c.affinity}% Match
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center py-2 border-y border-on-primary/15">
                  <div>
                    <div className="font-label-sm text-on-primary/70">CGPA</div>
                    <div className="font-label-lg font-bold">{c.cgpa}</div>
                  </div>
                  <div>
                    <div className="font-label-sm text-on-primary/70">
                      Assessment
                    </div>
                    <div className="font-label-lg font-bold text-secondary-fixed">
                      {c.assessment}
                    </div>
                  </div>
                  <div>
                    <div className="font-label-sm text-on-primary/70">
                      Projects
                    </div>
                    <div className="font-label-lg font-bold">
                      {c.projects} Verified
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {c.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded bg-on-primary/15 text-on-primary font-label-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Candidate Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CANDIDATES.map((cand) => {
          const isCompared = compareIds.includes(cand.id);
          const isInvited = invitedIds.includes(cand.id);

          return (
            <div
              key={cand.id}
              className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-headline-sm text-on-surface">
                      {cand.name}
                    </h3>
                    <p className="font-body-sm text-on-surface-variant">
                      {cand.branch} • CGPA {cand.cgpa}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm font-bold">
                    {cand.affinity}% Affinity
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cand.skills.map((s) => (
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
                <button
                  type="button"
                  onClick={() => toggleCompare(cand.id)}
                  className={`px-3.5 py-2 rounded-xl font-label-sm transition-colors ${
                    isCompared
                      ? "bg-primary-fixed text-primary font-bold"
                      : "bg-surface-container text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {isCompared ? "Comparing ✓" : "+ Compare Candidate"}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setInvitedIds((prev) =>
                      prev.includes(cand.id) ? prev : [...prev, cand.id]
                    )
                  }
                  className={`px-4 py-2 rounded-xl font-label-md transition-colors ${
                    isInvited
                      ? "bg-secondary-fixed text-on-secondary-fixed-variant font-bold"
                      : "bg-primary text-on-primary hover:bg-primary-container"
                  }`}
                >
                  {isInvited ? "Fast-Track Invited ✓" : "Invite to Apply"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}