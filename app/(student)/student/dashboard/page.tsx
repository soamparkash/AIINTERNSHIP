// app/(student)/student/dashboard/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

const INITIAL_OPPORTUNITIES = [
  {
    id: "role-1",
    code: "TCS",
    badge: "86.2% Match",
    badgeStyle: "bg-primary-fixed text-on-primary-fixed-variant",
    title: "Autonomous Agent Evaluator",
    company: "Tata Consultancy Services • R&D Hyderabad",
    skills: ["LLM Benchmark", "Python", "HuggingFace"],
    stipend: "₹30,000",
  },
  {
    id: "role-2",
    code: "ISRO",
    badge: "Priority Match",
    badgeStyle: "bg-secondary-fixed text-on-secondary-fixed-variant",
    title: "Orbital Telemetry Analytics",
    company: "ISRO ISTRAC • Bengaluru Space Lab",
    skills: ["C++", "Signal DSP", "Linux Ops"],
    stipend: "₹22,000",
  },
  {
    id: "role-3",
    code: "INFY",
    badge: "Fast-Track Hiring",
    badgeStyle: "bg-secondary-fixed text-on-secondary-fixed-variant",
    title: "Fullstack FinTech Systems",
    company: "Infosys Limited • Pune Development Center",
    skills: ["Next.js", "Node Microservices", "Kafka"],
    stipend: "₹25,000",
  },
];

export default function StudentDashboardPage() {
  const [allocationTab, setAllocationTab] = useState<"top" | "alternatives" | "history">("top");
  const [savedIds, setSavedIds] = useState<string[]>(["role-2"]);
  const [appliedIds, setAppliedIds] = useState<string[]>([]);
  const [passModalOpen, setPassModalOpen] = useState(false);

  const [selectedSkillBoost, setSelectedSkillBoost] = useState({
    name: "React 19",
    boost: 8.0,
    roles: 28,
    avgStipend: "₹42k",
  });

  const baseAffinity = 88.4;
  const potentialAffinity = (baseAffinity + selectedSkillBoost.boost).toFixed(1);

  const toggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleApply = (id: string) => {
    if (!appliedIds.includes(id)) {
      setAppliedIds((prev) => [...prev, id]);
    }
  };

  return (
    <div className="flex flex-col w-full pb-12">
      {/* 1. Profile Completion Banner */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 mt-6">
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[26px]">
                account_circle
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Complete Your Technical Profile
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm">
                  82% Completed
                </span>
                <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">
                    check_circle
                  </span>
                  Resume Parsed
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                Add your GitHub portfolio and complete the Cloud Architecture
                skill assessment to unlock Tier-1 AI allocation priority.
              </p>
              <div className="w-full max-w-md bg-surface-container rounded-full h-2 mt-2 overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-500"
                  style={{ width: "82%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
            <Link
              className="px-4 py-2.5 rounded-xl font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
              href="/student/resume"
            >
              Update Resume
            </Link>
            <Link
              className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg flex items-center gap-2 shadow-sm hover:bg-primary-container transition-all"
              href="/student/profile"
            >
              Complete Profile
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Hero Header & Telemetry Metrics */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/30">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                  AI Smart Allocation Engine • Round 1 Matching Active
                </span>
              </div>
              <h1 className="font-headline-xl text-4xl sm:text-headline-xl text-on-surface tracking-tight">
                Welcome back, <span className="text-primary">Aarav!</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Real-time multi-criteria skill matching, readiness telemetry,
                and automated internship allocation updates for your B.Tech CSE
                profile.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                className="px-5 py-3 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg flex items-center gap-2 shadow-sm hover:bg-primary-container transition-all"
                href="/student/internships"
              >
                <span className="material-symbols-outlined text-[20px]">
                  explore
                </span>
                Explore Internships
              </Link>
              <Link
                className="px-4 py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg flex items-center gap-2 transition-colors"
                href="/student/allocations"
              >
                <span className="material-symbols-outlined text-[20px] text-primary">
                  assignment_turned_in
                </span>
                View My Allocation
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
                    Stipend
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      payments
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="font-headline-sm text-[20px] font-bold text-on-surface">
                    ₹25,000
                  </div>
                  <div className="flex items-center gap-1 mt-0.5 text-secondary font-label-sm text-[11px]">
                    <span className="material-symbols-outlined text-[13px]">
                      verified
                    </span>
                    <span>Monthly Offer</span>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
                    Matched
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px] text-primary">
                      auto_awesome
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="font-headline-sm text-[20px] font-bold text-on-surface">
                    142 Roles
                  </div>
                  <div className="text-on-surface-variant font-label-sm text-[11px] mt-0.5">
                    Top Partner Cos
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
                    Affinity
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">
                      psychology
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="font-headline-sm text-[20px] font-bold text-primary">
                    88.4%
                  </div>
                  <div className="text-primary font-label-sm text-[11px] font-semibold mt-0.5">
                    Tier-1 Match
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
                    Status
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-surface-container text-on-surface-variant flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">
                      task_alt
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="font-headline-sm text-[20px] font-bold text-on-surface">
                    1 Allocated
                  </div>
                  <div className="flex items-center gap-1 mt-0.5 text-secondary font-label-sm text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    <span>Offer Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Illustration */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-2 bg-primary/20 rounded-3xl blur-2xl transform rotate-2 pointer-events-none"></div>
              <div className="relative bg-surface-container-lowest rounded-3xl p-3 border border-outline-variant/30 shadow-lg overflow-hidden group">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-surface-container">
                  <img
                    src="/hero-illustration.png"
                    alt="AI Smart Internship and Career Allocation"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    <span className="font-label-sm text-[11px] text-on-surface font-bold">
                      Round 1 Top Allocation
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-[11px] font-bold shadow-md">
                    <span className="material-symbols-outlined text-[14px]">
                      verified
                    </span>
                    AI Verified Match
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-surface-container-lowest/95 backdrop-blur-md rounded-xl p-3 border border-outline-variant/30 shadow-lg flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center font-bold text-label-md shrink-0">
                        AI
                      </div>
                      <div>
                        <div className="font-label-md text-label-md text-on-surface font-bold leading-tight">
                          Capgemini Platform Intern
                        </div>
                        <div className="text-secondary font-label-sm text-[11px] font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[13px]">
                            check_circle
                          </span>
                          88.4% Match Affinity
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-headline-sm text-headline-sm text-primary font-extrabold">
                        ₹25,000
                      </div>
                      <div className="font-label-sm text-[9px] uppercase tracking-wider text-on-surface-variant font-semibold">
                        Per Month
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Live AI Allocation Status Card */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 mt-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">
              Current AI Allocation Status
            </h2>
          </div>
          <div className="flex items-center gap-1 p-1 bg-surface-container rounded-xl">
            <button
              onClick={() => setAllocationTab("top")}
              className={`px-3 py-1 rounded-lg font-label-sm text-label-sm transition-all ${
                allocationTab === "top"
                  ? "bg-surface-container-lowest text-primary font-semibold shadow-xs"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Primary Match
            </button>
            <button
              onClick={() => setAllocationTab("alternatives")}
              className={`px-3 py-1 rounded-lg font-label-sm text-label-sm transition-all ${
                allocationTab === "alternatives"
                  ? "bg-surface-container-lowest text-primary font-semibold shadow-xs"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Backup Matches
            </button>
            <button
              onClick={() => setAllocationTab("history")}
              className={`px-3 py-1 rounded-lg font-label-sm text-label-sm transition-all ${
                allocationTab === "history"
                  ? "bg-surface-container-lowest text-primary font-semibold shadow-xs"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Allocation Log
            </button>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-3xl p-6 lg:p-8 border border-outline-variant/30 shadow-sm relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Allocated
                </span>
                <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                  Round 1 AI Engine Match
                </span>
                <span className="text-on-surface-variant font-label-sm text-label-sm">
                  Allocation ID: ALLOC-2026-884
                </span>
              </div>
              <div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  Cloud &amp; AI Platform Engineering Intern
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-on-surface-variant font-body-md text-body-md mt-1">
                  <span className="font-semibold text-on-surface">
                    Capgemini Technology Services India
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">
                      location_on
                    </span>{" "}
                    Bengaluru, Karnataka (Hybrid)
                  </span>
                </div>
              </div>
              <div>
                <div className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-2">
                  Matched Skill Breakdown:
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-surface-container text-primary font-label-sm text-label-sm flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[15px] text-secondary">
                      check
                    </span>{" "}
                    PyTorch 100%
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-surface-container text-primary font-label-sm text-label-sm flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[15px] text-secondary">
                      check
                    </span>{" "}
                    FastAPI 100%
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-surface-container text-primary font-label-sm text-label-sm flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[15px] text-secondary">
                      check
                    </span>{" "}
                    Docker 95%
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-surface-container text-primary font-label-sm text-label-sm flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[15px] text-secondary">
                      check
                    </span>{" "}
                    SQL &amp; Data Pipelines 92%
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-6 shrink-0 w-full lg:w-auto pt-4 lg:pt-0 border-t lg:border-t-0 border-outline-variant/30">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <path
                      className="text-surface-container"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                    ></path>
                    <path
                      className="text-primary-container"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray="88.4, 100"
                      strokeLinecap="round"
                      strokeWidth="3.5"
                    ></path>
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      88.4%
                    </span>
                    <span className="font-label-sm text-[9px] uppercase tracking-wider text-on-surface-variant font-bold">
                      Affinity
                    </span>
                  </div>
                </div>
                <div className="text-left lg:text-right">
                  <div className="font-headline-md text-headline-md text-on-surface font-extrabold">
                    ₹25,000{" "}
                    <span className="text-body-sm font-normal text-on-surface-variant">
                      /month
                    </span>
                  </div>
                  <div className="flex items-center lg:justify-end gap-1 text-secondary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px]">
                      check_circle
                    </span>
                    <span>Verified Partner Stipend</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                <Link
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-primary-container shadow-sm transition-all"
                  href="/student/allocations"
                >
                  <span>Manage Allocation</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setPassModalOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    qr_code_2
                  </span>
                  <span>View Offer Pass</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive What-If Simulator Preview Widget */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 mt-8">
        <div className="bg-primary text-on-primary rounded-3xl p-6 lg:p-8 shadow-md relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-primary-container/40 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-on-primary/10 backdrop-blur-sm text-on-primary font-label-sm text-label-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-[15px]">
                  auto_graph
                </span>
                What-If Career Simulator
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">
                Curious how adding a skill boosts your match score?
              </h2>
              <p className="font-body-md text-body-md text-on-primary/80">
                Simulate adding high-demand skills to see how your AI match
                affinity and eligible roles increase in real time.
              </p>
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                {[
                  { name: "React 19", boost: 8.0, roles: 28, avgStipend: "₹42k" },
                  { name: "AWS Serverless", boost: 5.0, roles: 19, avgStipend: "₹38k" },
                  { name: "Kubernetes", boost: 6.0, roles: 24, avgStipend: "₹40k" },
                ].map((skill) => (
                  <button
                    key={skill.name}
                    type="button"
                    onClick={() => setSelectedSkillBoost(skill)}
                    className={`px-3.5 py-1.5 rounded-full border font-label-md text-label-md transition-colors flex items-center gap-1.5 ${
                      selectedSkillBoost.name === skill.name
                        ? "bg-on-primary text-primary border-on-primary font-bold"
                        : "bg-on-primary/15 hover:bg-on-primary/25 border-on-primary/20 text-on-primary"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      add_circle
                    </span>
                    {skill.name} (+{skill.boost}% Match)
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-inverse-surface/40 backdrop-blur-md rounded-2xl p-6 border border-on-primary/15 shrink-0 w-full lg:w-96">
              <div className="flex items-center justify-between pb-3 border-b border-on-primary/15">
                <span className="font-label-sm text-label-sm uppercase text-on-primary/70">
                  Live Potential Forecast
                </span>
                <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">
                  +{selectedSkillBoost.name}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 py-4">
                <div>
                  <div className="font-label-sm text-label-sm text-on-primary/70">
                    Current Affinity
                  </div>
                  <div className="font-headline-md text-headline-md text-on-primary font-bold">
                    88.4%{" "}
                    <span className="text-body-sm font-normal text-on-primary/70">
                      (Tier-1)
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary-fixed text-[24px]">
                  arrow_forward
                </span>
                <div className="text-right">
                  <div className="font-label-sm text-label-sm text-on-primary/70">
                    Projected Affinity
                  </div>
                  <div className="font-headline-md text-headline-md text-secondary-fixed font-bold">
                    {potentialAffinity}%{" "}
                    <span className="text-body-sm text-secondary-fixed">
                      (+{selectedSkillBoost.boost.toFixed(1)}%)
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-on-primary/15 flex items-center justify-between">
                <div className="font-label-sm text-label-sm text-on-primary/80">
                  Estimated Unlock:{" "}
                  <span className="font-semibold text-on-primary">
                    +{selectedSkillBoost.roles} New Roles · Avg{" "}
                    {selectedSkillBoost.avgStipend}
                  </span>
                </div>
              </div>
              <Link
                className="mt-4 w-full py-2.5 rounded-xl bg-surface-container-lowest text-primary font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-surface-container transition-all"
                href="/student/what-if"
              >
                <span>Open Full What-If Simulator</span>
                <span className="material-symbols-outlined text-[16px]">
                  open_in_new
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Student Portal Modules */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Student Portal Modules
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Direct access to your AI matching tools, skill assessments, and
              career analytics.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Internships Hub */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">
                    work
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm">
                  1 Active Offer
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Internships Hub
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Browse partner openings, inspect AI suitability scores, track
                  submitted applications, and manage allocations.
                </p>
              </div>
              <div className="space-y-2 pt-2 border-t border-outline-variant/20">
                <Link
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container transition-colors group"
                  href="/student/recommendations"
                >
                  <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                    AI Recommendations
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    142 Matches
                  </span>
                </Link>
                <Link
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container transition-colors group"
                  href="/student/saved"
                >
                  <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                    Saved Opportunities
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {savedIds.length + 5} Saved
                  </span>
                </Link>
                <Link
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container transition-colors group"
                  href="/student/applications"
                >
                  <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                    Active Applications
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">
                    {4 + appliedIds.length} Submitted
                  </span>
                </Link>
                <Link
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container transition-colors group"
                  href="/student/allocations"
                >
                  <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                    My Allocation
                  </span>
                  <span className="font-label-sm text-label-sm text-primary font-semibold">
                    Allocated
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Analysis & Intelligence */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">
                    insights
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
                  5 AI Tools
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Analysis &amp; Intelligence
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Identify missing skills, simulate career outcomes, and measure
                  your placement readiness index.
                </p>
              </div>
              <div className="space-y-2 pt-2 border-t border-outline-variant/20">
                <Link
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container transition-colors group"
                  href="/student/skill-gap"
                >
                  <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                    Skill Gap Analysis
                  </span>
                  <span className="font-label-sm text-label-sm text-error font-semibold">
                    2 Gaps Found
                  </span>
                </Link>
                <Link
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container transition-colors group"
                  href="/student/suitability"
                >
                  <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                    Role Suitability Matrix
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Tier-1 Ready
                  </span>
                </Link>
                <Link
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container transition-colors group"
                  href="/student/readiness"
                >
                  <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                    Placement Readiness
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    88 / 100
                  </span>
                </Link>
                <Link
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container transition-colors group"
                  href="/student/career-roadmap"
                >
                  <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                    Career Roadmap
                  </span>
                  <span className="font-label-sm text-label-sm text-primary font-semibold">
                    3 Milestones
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Activities & Assessments */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">
                    checklist
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">
                  2 Pending Tasks
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Activities &amp; Assessments
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Take technical assessments, log weekly internship check-ins,
                  and review mentor evaluations.
                </p>
              </div>
              <div className="space-y-2 pt-2 border-t border-outline-variant/20">
                <Link
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container transition-colors group"
                  href="/student/assessments"
                >
                  <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                    Skill Assessments
                  </span>
                  <span className="font-label-sm text-label-sm text-error font-semibold">
                    1 Test Available
                  </span>
                </Link>
                <Link
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container transition-colors group"
                  href="/student/check-in"
                >
                  <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                    Weekly Check-In Log
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Due in 2 days
                  </span>
                </Link>
                <Link
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container transition-colors group"
                  href="/student/feedback"
                >
                  <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                    Mentor Feedback
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">
                    4.8 / 5.0 Rating
                  </span>
                </Link>
                <Link
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container transition-colors group"
                  href="/student/outcomes"
                >
                  <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                    Learning Outcomes
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Tracked
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Matched Opportunities Grid */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 mt-12 mb-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Top Recommended Opportunities
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Roles ranked by your verified technical skills and assessment
              scores.
            </p>
          </div>
          <Link
            className="font-label-lg text-label-lg text-primary hover:text-primary-container flex items-center gap-1 transition-colors"
            href="/student/recommendations"
          >
            <span>View all 142 matches</span>
            <span className="material-symbols-outlined text-[18px]">
              chevron_right
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INITIAL_OPPORTUNITIES.map((role) => {
            const isSaved = savedIds.includes(role.id);
            const isApplied = appliedIds.includes(role.id);

            return (
              <div
                key={role.id}
                className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-surface-container font-headline-sm font-bold text-on-surface flex items-center justify-center text-body-sm">
                      {role.code}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full font-label-sm text-label-sm font-semibold ${role.badgeStyle}`}
                    >
                      {role.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      {role.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {role.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {role.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-5 mt-4 border-t border-outline-variant/20 flex items-center justify-between">
                  <div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Monthly Stipend
                    </div>
                    <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      {role.stipend}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => toggleSave(role.id)}
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isSaved
                          ? "bg-error-container text-error"
                          : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {isSaved ? "bookmark_added" : "bookmark"}
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleApply(role.id)}
                      className={`px-4 py-2 rounded-xl font-label-md text-label-md transition-colors ${
                        isApplied
                          ? "bg-secondary-fixed text-on-secondary-fixed-variant font-semibold"
                          : "bg-inverse-surface text-inverse-on-surface hover:bg-on-surface"
                      }`}
                    >
                      {isApplied ? "Applied ✓" : "Quick Apply"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Digital Allocation Offer Pass Modal */}
      {passModalOpen && (
        <div className="fixed inset-0 z-50 bg-inverse-surface/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-3xl max-w-md w-full p-6 border border-outline-variant/30 shadow-2xl space-y-5">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">
                Verified Allocation Pass
              </span>
              <button
                type="button"
                onClick={() => setPassModalOpen(false)}
                className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant"
              >
                ✕
              </button>
            </div>
            <div className="space-y-1">
              <h3 className="font-headline-md text-on-surface">
                Cloud &amp; AI Platform Engineering Intern
              </h3>
              <p className="font-body-sm text-on-surface-variant">
                Capgemini Technology Services India • Bengaluru
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-surface-container flex items-center justify-between">
              <div className="space-y-1">
                <div className="font-label-sm text-on-surface-variant">
                  Candidate
                </div>
                <div className="font-label-lg text-on-surface font-bold">
                  Aarav Sharma
                </div>
                <div className="font-label-sm text-primary">
                  Match Score: 88.4% (Tier-1)
                </div>
              </div>
              <div className="w-16 h-16 rounded-xl bg-surface-container-lowest flex items-center justify-center border border-outline-variant/30">
                <span className="material-symbols-outlined text-[40px] text-on-surface">
                  qr_code_2
                </span>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setPassModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-surface-container font-label-md text-on-surface"
              >
                Close
              </button>
              <Link
                href="/student/allocations"
                className="px-5 py-2 rounded-xl bg-primary text-on-primary font-label-md"
              >
                Open Full Allocation Page
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}