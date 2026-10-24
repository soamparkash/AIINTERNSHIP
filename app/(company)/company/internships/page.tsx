// app/(company)/company/internships/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

const INITIAL_ROLES = [
  {
    id: "int-101",
    title: "Cloud & AI Platform Engineering Intern",
    location: "Bengaluru (Hybrid)",
    stipend: "₹25,000",
    seatsFilled: 8,
    totalSeats: 10,
    applicants: 64,
    topMatch: "94.2%",
    status: "Active",
    skills: ["PyTorch", "FastAPI", "Docker", "SQL"],
  },
  {
    id: "int-102",
    title: "Autonomous Agent Evaluator",
    location: "Hyderabad (On-site)",
    stipend: "₹30,000",
    seatsFilled: 6,
    totalSeats: 8,
    applicants: 48,
    topMatch: "91.8%",
    status: "Active",
    skills: ["Python", "LLM Benchmark", "HuggingFace"],
  },
  {
    id: "int-103",
    title: "Fullstack FinTech Microservices Intern",
    location: "Pune (Hybrid)",
    stipend: "₹25,000",
    seatsFilled: 4,
    totalSeats: 6,
    applicants: 30,
    topMatch: "89.5%",
    status: "Active",
    skills: ["Next.js", "Node.js", "Kafka"],
  },
];

export default function CompanyInternshipsPage() {
  const [roles, setRoles] = useState(INITIAL_ROLES);
  const [search, setSearch] = useState("");

  const toggleRoleStatus = (id: string) => {
    setRoles((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, status: r.status === "Active" ? "Paused" : "Active" }
          : r
      )
    );
  };

  const filtered = roles.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-8 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface">
            Manage Internship Openings
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Monitor seat fill rates, AI match pipelines, and active role
            requisitions.
          </p>
        </div>
        <Link
          href="/company/internships/create"
          className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-lg flex items-center gap-2 self-start"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Post New Internship
        </Link>
      </div>

      <div className="flex items-center gap-3 bg-surface-container-lowest p-3 rounded-2xl border border-outline-variant/30">
        <span className="material-symbols-outlined text-outline pl-2">
          search
        </span>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filter roles by title or skill..."
          className="w-full bg-transparent outline-none font-body-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((role) => (
          <div
            key={role.id}
            className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span
                  className={`px-2.5 py-0.5 rounded-full font-label-sm text-label-sm font-semibold ${
                    role.status === "Active"
                      ? "bg-secondary-fixed text-on-secondary-fixed-variant"
                      : "bg-surface-container text-on-surface-variant"
                  }`}
                >
                  {role.status}
                </span>
                <span className="font-label-sm text-primary font-bold">
                  Top Match: {role.topMatch}
                </span>
              </div>

              <div>
                <h3 className="font-headline-sm text-on-surface">
                  {role.title}
                </h3>
                <p className="font-body-sm text-on-surface-variant mt-1">
                  {role.location} • {role.stipend}/mo
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

              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between font-label-sm">
                  <span className="text-on-surface-variant">
                    Seat Allocation Progress
                  </span>
                  <span className="text-on-surface font-bold">
                    {role.seatsFilled} / {role.totalSeats} Seats
                  </span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full"
                    style={{
                      width: `${(role.seatsFilled / role.totalSeats) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => toggleRoleStatus(role.id)}
                className="px-3 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high font-label-sm text-on-surface"
              >
                {role.status === "Active" ? "Pause Role" : "Resume Role"}
              </button>
              <Link
                href="/company/applications"
                className="px-4 py-2 rounded-xl bg-inverse-surface text-inverse-on-surface hover:bg-on-surface font-label-md transition-colors"
              >
                View {role.applicants} Applicants →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}