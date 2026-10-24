// app/(admin)/admin/students/page.tsx
"use client";

import React, { useState } from "react";

const STUDENTS = [
  {
    id: "STU-2026-01",
    name: "Aarav Sharma",
    college: "B.Tech CSE (Full Stack)",
    cgpa: "9.1",
    assessments: "96th Percentile",
    status: "Verified",
  },
  {
    id: "STU-2026-02",
    name: "Diya Nair",
    college: "B.Tech AI & Data Science",
    cgpa: "9.4",
    assessments: "94th Percentile",
    status: "Verified",
  },
  {
    id: "STU-2026-03",
    name: "Rohan Verma",
    college: "B.Tech CSE (Cloud)",
    cgpa: "8.8",
    assessments: "91st Percentile",
    status: "Pending Audit",
  },
];

export default function AdminStudentsPage() {
  const [list, setList] = useState(STUDENTS);

  const verifyStudent = (id: string) => {
    setList((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: "Verified" } : s))
    );
  };

  return (
    <div className="py-8 space-y-6">
      <div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface">
          Student Candidate Directory
        </h1>
        <p className="font-body-md text-on-surface-variant">
          Verify academic credentials and proctored skill assessment records.
        </p>
      </div>

      <div className="space-y-4">
        {list.map((stu) => (
          <div
            key={stu.id}
            className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="font-headline-sm text-on-surface">{stu.name}</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm">
                  {stu.status}
                </span>
              </div>
              <p className="font-body-sm text-on-surface-variant mt-1">
                {stu.id} • {stu.college} • CGPA {stu.cgpa} • Assessment:{" "}
                <strong className="text-primary">{stu.assessments}</strong>
              </p>
            </div>
            {stu.status !== "Verified" && (
              <button
                type="button"
                onClick={() => verifyStudent(stu.id)}
                className="px-4 py-2 rounded-xl bg-primary text-on-primary font-label-md"
              >
                Approve Verification
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}