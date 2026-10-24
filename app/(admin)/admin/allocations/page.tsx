// app/(admin)/admin/allocations/page.tsx
"use client";

import React, { useState } from "react";

interface AllocationRecord {
  id: string;
  student: string;
  branch: string;
  company: string;
  role: string;
  stipend: string;
  affinity: number;
  quotaTier: string;
  status: "Locked" | "Pending Acceptance";
}

const INITIAL_RECORDS: AllocationRecord[] = [
  {
    id: "ALLOC-8841",
    student: "Aarav Sharma",
    branch: "B.Tech CSE (Full Stack)",
    company: "Capgemini India",
    role: "Cloud & AI Platform Engineering Intern",
    stipend: "₹25,000",
    affinity: 94.2,
    quotaTier: "Merit Tier-1",
    status: "Locked",
  },
  {
    id: "ALLOC-8842",
    student: "Diya Nair",
    branch: "B.Tech AI & Data Science",
    company: "Tata Consultancy Services",
    role: "Autonomous Agent Evaluator",
    stipend: "₹30,000",
    affinity: 91.8,
    quotaTier: "Female STEM Priority",
    status: "Locked",
  },
  {
    id: "ALLOC-8843",
    student: "Rohan Verma",
    branch: "B.Tech CSE (Cloud)",
    company: "ISRO ISTRAC",
    role: "Orbital Telemetry Analytics",
    stipend: "₹22,000",
    affinity: 89.5,
    quotaTier: "Regional Tier-2 Quota",
    status: "Pending Acceptance",
  },
  {
    id: "ALLOC-8844",
    student: "Meera Krishnan",
    branch: "B.Tech IT",
    company: "Infosys Limited",
    role: "Fullstack FinTech Systems",
    stipend: "₹25,000",
    affinity: 87.9,
    quotaTier: "Merit Tier-1",
    status: "Pending Acceptance",
  },
];

export default function AdminAllocationsPage() {
  const [records, setRecords] = useState<AllocationRecord[]>(INITIAL_RECORDS);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const toggleLock = (id: string) => {
    setRecords((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              status: r.status === "Locked" ? "Pending Acceptance" : "Locked",
            }
          : r
      )
    );
  };

  const filtered = records.filter((r) => {
    const matchesSearch =
      r.student.toLowerCase().includes(search.toLowerCase()) ||
      r.company.toLowerCase().includes(search.toLowerCase()) ||
      r.id.toLowerCase().includes(search.toLowerCase());
    const matchesTab = filter === "All" || r.status === filter;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm">
            Master Allocation Registry
          </span>
          <h1 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface mt-2">
            Internship Allocations Ledger
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Audit, lock, or reallocate student-to-enterprise matches across all
            partner cohorts.
          </p>
        </div>

        <div className="flex items-center gap-1 p-1 bg-surface-container rounded-xl self-start">
          {["All", "Locked", "Pending Acceptance"].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilter(tab)}
              className={`px-3.5 py-1.5 rounded-lg font-label-sm whitespace-nowrap transition-all ${
                filter === tab
                  ? "bg-surface-container-lowest text-primary font-semibold shadow-xs"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-3 bg-surface-container-lowest p-3 rounded-2xl border border-outline-variant/30 shadow-xs">
        <span className="material-symbols-outlined text-outline pl-2">
          search
        </span>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by Allocation ID, Student Name, or Company..."
          className="w-full bg-transparent outline-none font-body-md"
        />
      </div>

      {/* Zero-Scroll Full-Width Table */}
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse table-auto">
          <thead>
            <tr className="bg-surface-container/60 border-b border-outline-variant/30 font-label-sm text-[11px] uppercase text-on-surface-variant">
              <th className="py-3.5 px-4">ID</th>
              <th className="py-3.5 px-4">Student Candidate</th>
              <th className="py-3.5 px-4">Enterprise &amp; Role</th>
              <th className="py-3.5 px-4">Stipend</th>
              <th className="py-3.5 px-4">Affinity</th>
              <th className="py-3.5 px-4">Quota Category</th>
              <th className="py-3.5 px-4">Status</th>
              <th className="py-3.5 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/20 font-body-sm">
            {filtered.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-surface-container/40 transition-colors"
              >
                <td className="py-3.5 px-4 font-label-md text-primary font-bold whitespace-nowrap">
                  {row.id}
                </td>
                <td className="py-3.5 px-4">
                  <div className="font-semibold text-on-surface">
                    {row.student}
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    {row.branch}
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="font-semibold text-on-surface">
                    {row.company}
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    {row.role}
                  </div>
                </td>
                <td className="py-3.5 px-4 font-semibold text-on-surface whitespace-nowrap">
                  {row.stipend}
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <span className="inline-flex px-2.5 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm font-bold">
                    {row.affinity}%
                  </span>
                </td>
                <td className="py-3.5 px-4 text-on-surface-variant text-xs">
                  {row.quotaTier}
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-label-sm text-[11px] font-semibold ${
                      row.status === "Locked"
                        ? "bg-secondary-fixed text-on-secondary-fixed-variant"
                        : "bg-surface-container text-on-surface-variant"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        row.status === "Locked"
                          ? "bg-secondary"
                          : "bg-outline"
                      }`}
                    />
                    {row.status}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-right whitespace-nowrap">
                  <button
                    type="button"
                    onClick={() => toggleLock(row.id)}
                    className={`px-3 py-1.5 rounded-xl font-label-sm text-xs transition-colors ${
                      row.status === "Locked"
                        ? "bg-surface-container hover:bg-surface-container-high text-on-surface"
                        : "bg-primary text-on-primary hover:bg-primary-container"
                    }`}
                  >
                    {row.status === "Locked" ? "Unlock" : "Lock Pass"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}