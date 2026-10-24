// app/(company)/company/dashboard/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

const INITIAL_MATCHED_CANDIDATES = [
  {
    id: "cand-1",
    name: "Aarav Sharma",
    college: "B.Tech CSE • Full Stack Specialization",
    affinity: 94.2,
    role: "Cloud & AI Platform Engineering Intern",
    skills: ["PyTorch 100%", "FastAPI 100%", "Docker 95%"],
    status: "Pending Review",
  },
  {
    id: "cand-2",
    name: "Diya Nair",
    college: "B.Tech AI & Data Science",
    affinity: 91.8,
    role: "Autonomous Agent Evaluator",
    skills: ["Python 98%", "LangChain 94%", "Vector DB 90%"],
    status: "Pending Review",
  },
  {
    id: "cand-3",
    name: "Rohan Verma",
    college: "B.Tech CSE • Cloud Computing",
    affinity: 89.5,
    role: "DevSecOps & Kubernetes Intern",
    skills: ["Kubernetes 96%", "Terraform 92%", "Go 88%"],
    status: "Shortlisted",
  },
];

export default function CompanyDashboardPage() {
  const [candidates, setCandidates] = useState(INITIAL_MATCHED_CANDIDATES);
  const [roleFilter, setRoleFilter] = useState<"all" | "pending" | "shortlisted">("all");

  const updateCandidateStatus = (id: string, newStatus: string) => {
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
    );
  };

  const filteredCandidates = candidates.filter((c) => {
    if (roleFilter === "pending") return c.status === "Pending Review";
    if (roleFilter === "shortlisted") return c.status === "Shortlisted" || c.status === "Allocated";
    return true;
  });

  return (
    <div className="flex flex-col w-full pb-12">
      {/* 1. Top Allocation Round Action Banner */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 mt-6">
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary"></div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[26px]">
                auto_awesome
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Round 1 AI Candidate Slate Ready for Approval
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm">
                  18 Seats Filled / 24 Total Capacity
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                The AI Smart Allocation Engine has ranked 142 pre-assessed
                candidates across your 6 active internship openings. Confirm
                your final shortlist to issue instant onboarding passes.
              </p>
              <div className="w-full max-w-md bg-surface-container rounded-full h-2 mt-2 overflow-hidden">
                <div
                  className="bg-secondary h-full rounded-full transition-all"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
            <Link
              href="/company/allocations"
              className="px-4 py-2.5 rounded-xl font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
            >
              View Allocated Roster
            </Link>
            <Link
              href="/company/internships/create"
              className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg flex items-center gap-2 shadow-sm hover:bg-primary-container transition-all"
            >
              <span>Post New Internship</span>
              <span className="material-symbols-outlined text-[18px]">
                add_circle
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Enterprise Hero Section + 4 KPI Cards */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/30">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                  Enterprise Recruitment Engine • Partner ID: CAPG-IN-2026
                </span>
              </div>
              <h1 className="font-headline-xl text-4xl sm:text-headline-xl text-on-surface tracking-tight">
                Capgemini <span className="text-primary">Talent Hub</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Automate technical screening with multi-criteria AI matching,
                verified coding assessments, and instant candidate allocation.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/company/candidates"
                className="px-5 py-3 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg flex items-center gap-2 shadow-sm hover:bg-primary-container transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">
                  person_search
                </span>
                Explore AI Talent Pool
              </Link>
              <Link
                href="/company/applications"
                className="px-4 py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg flex items-center gap-2 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px] text-primary">
                  fact_check
                </span>
                Review Applications (142)
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
                    Active Roles
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-primary-fixed text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">
                      work
                    </span>
                  </div>
                </div>
                <div className="mt-2 font-headline-sm text-[20px] font-bold text-on-surface">
                  6 Roles
                </div>
                <div className="text-secondary font-label-sm text-[11px] mt-0.5">
                  24 Total Seats
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
                    Applicants
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-tertiary-fixed text-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">
                      groups
                    </span>
                  </div>
                </div>
                <div className="mt-2 font-headline-sm text-[20px] font-bold text-on-surface">
                  142
                </div>
                <div className="text-on-surface-variant font-label-sm text-[11px] mt-0.5">
                  38 Tier-1 (&gt;85%)
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
                    Avg Affinity
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-primary-fixed text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">
                      psychology
                    </span>
                  </div>
                </div>
                <div className="mt-2 font-headline-sm text-[20px] font-bold text-primary">
                  91.4%
                </div>
                <div className="text-primary font-label-sm text-[11px] font-semibold mt-0.5">
                  Skill Verified
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
                    Allocated
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">
                      verified
                    </span>
                  </div>
                </div>
                <div className="mt-2 font-headline-sm text-[20px] font-bold text-on-surface">
                  18 / 24
                </div>
                <div className="text-secondary font-label-sm text-[11px] font-semibold mt-0.5">
                  75% Filled
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Attached 3D Illustration */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-2 bg-primary/20 rounded-3xl blur-2xl transform rotate-2 pointer-events-none"></div>
              <div className="relative bg-surface-container-lowest rounded-3xl p-3 border border-outline-variant/30 shadow-lg overflow-hidden group">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-surface-container">
                  <img
                    src="/hero-illustration.png"
                    alt="Enterprise AI Recruitment Engine"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    <span className="font-label-sm text-[11px] text-on-surface font-bold">
                      AI Auto-Shortlist Active
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-surface-container-lowest/95 backdrop-blur-md rounded-xl p-3 border border-outline-variant/30 shadow-lg flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center font-bold text-label-md shrink-0">
                        AI
                      </div>
                      <div>
                        <div className="font-label-md text-label-md text-on-surface font-bold leading-tight">
                          Cloud &amp; AI Platform Cohort
                        </div>
                        <div className="text-secondary font-label-sm text-[11px] font-semibold">
                          18 Candidates Matched • 91.4% Avg Score
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive AI Matched Candidate Slate */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 mt-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Top AI-Matched Candidates Ready for Decision
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Instant one-click shortlist or allocation approval based on
              proctored skill assessments.
            </p>
          </div>
          <div className="flex items-center gap-1 p-1 bg-surface-container rounded-xl">
            {(["all", "pending", "shortlisted"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setRoleFilter(tab)}
                className={`px-3 py-1.5 rounded-lg font-label-sm text-label-sm capitalize transition-all ${
                  roleFilter === tab
                    ? "bg-surface-container-lowest text-primary font-semibold shadow-xs"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredCandidates.map((cand) => (
            <div
              key={cand.id}
              className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover:shadow-md transition-shadow"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {cand.name}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold">
                    {cand.affinity}% AI Match
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full font-label-sm text-label-sm font-semibold ${
                      cand.status === "Allocated"
                        ? "bg-secondary-fixed text-on-secondary-fixed-variant"
                        : cand.status === "Shortlisted"
                        ? "bg-tertiary-fixed text-on-tertiary-fixed-variant"
                        : "bg-surface-container text-on-surface-variant"
                    }`}
                  >
                    {cand.status}
                  </span>
                </div>
                <p className="font-body-sm text-on-surface-variant">
                  {cand.college} • Applied for{" "}
                  <strong className="text-on-surface">{cand.role}</strong>
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {cand.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-surface-container text-primary font-label-sm text-label-sm flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[14px] text-secondary">
                        check_circle
                      </span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full lg:w-auto justify-end">
                <Link
                  href="/company/candidates"
                  className="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high font-label-md text-on-surface transition-colors"
                >
                  Inspect Profile
                </Link>
                <button
                  type="button"
                  onClick={() => updateCandidateStatus(cand.id, "Shortlisted")}
                  className="px-4 py-2 rounded-xl border border-primary text-primary hover:bg-primary-fixed/40 font-label-md transition-colors"
                >
                  Shortlist
                </button>
                <button
                  type="button"
                  onClick={() => updateCandidateStatus(cand.id, "Allocated")}
                  className="px-5 py-2 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-label-md shadow-xs transition-all flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    verified
                  </span>
                  {cand.status === "Allocated" ? "Allocated ✓" : "Approve Allocation"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Enterprise Portal Quick Modules */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">
                work_history
              </span>
            </div>
            <div>
              <h3 className="font-headline-sm text-on-surface">
                Requisition &amp; Role Management
              </h3>
              <p className="font-body-sm text-on-surface-variant mt-1">
                Configure required skill weights, stipend tiers, and seat
                capacities for the AI matching engine.
              </p>
            </div>
            <div className="space-y-2 pt-2 border-t border-outline-variant/20">
              <Link
                href="/company/internships"
                className="flex justify-between p-2 rounded-lg hover:bg-surface-container font-label-md text-on-surface"
              >
                <span>Active Internship Postings</span>
                <span className="text-primary">6 Active →</span>
              </Link>
              <Link
                href="/company/internships/create"
                className="flex justify-between p-2 rounded-lg hover:bg-surface-container font-label-md text-on-surface"
              >
                <span>Create New Role Requisition</span>
                <span className="text-secondary font-semibold">+ New</span>
              </Link>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">
                person_check
              </span>
            </div>
            <div>
              <h3 className="font-headline-sm text-on-surface">
                AI Talent &amp; Allocations
              </h3>
              <p className="font-body-sm text-on-surface-variant mt-1">
                Compare pre-assessed candidates side-by-side and track
                onboarding pass check-ins.
              </p>
            </div>
            <div className="space-y-2 pt-2 border-t border-outline-variant/20">
              <Link
                href="/company/candidates"
                className="flex justify-between p-2 rounded-lg hover:bg-surface-container font-label-md text-on-surface"
              >
                <span>AI Candidate Discovery</span>
                <span className="text-primary">38 Tier-1 →</span>
              </Link>
              <Link
                href="/company/allocations"
                className="flex justify-between p-2 rounded-lg hover:bg-surface-container font-label-md text-on-surface"
              >
                <span>Confirmed Allocations</span>
                <span className="text-secondary font-semibold">18 Joined</span>
              </Link>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">
                rate_review
              </span>
            </div>
            <div>
              <h3 className="font-headline-sm text-on-surface">
                Evaluations &amp; PPO Conversion
              </h3>
              <p className="font-body-sm text-on-surface-variant mt-1">
                Submit structured mentor evaluations and issue Pre-Placement
                Offers to top-performing interns.
              </p>
            </div>
            <div className="space-y-2 pt-2 border-t border-outline-variant/20">
              <Link
                href="/company/evaluations"
                className="flex justify-between p-2 rounded-lg hover:bg-surface-container font-label-md text-on-surface"
              >
                <span>Intern Performance Rubrics</span>
                <span className="text-error font-semibold">3 Due</span>
              </Link>
              <Link
                href="/company/analytics"
                className="flex justify-between p-2 rounded-lg hover:bg-surface-container font-label-md text-on-surface"
              >
                <span>Recruitment Analytics</span>
                <span className="text-primary">View ROI →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}