// app/(student)/student/profile/page.tsx
"use client";

import React, { useState } from "react";

export default function StudentProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [skillInput, setSkillInput] = useState("");
  const [profile, setProfile] = useState({
    name: "Aarav Sharma",
    headline: "B.Tech Computer Science & Engineering (Full Stack Application Development)",
    university: "Lovely Professional University / Tier-1 Campus",
    graduationYear: "2027",
    cgpa: "9.14 / 10.0",
    location: "Bengaluru / Hyderabad / Remote",
    email: "aarav.sharma@student.edu",
    phone: "+91 98765 43210",
    github: "https://github.com/aarav-sharma-dev",
    bio: "Full-stack & AI systems undergraduate specializing in distributed Node.js microservices, Next.js App Router architectures, and PyTorch/FastAPI inference pipelines.",
    skills: [
      "PyTorch (100%)",
      "FastAPI (100%)",
      "Next.js 15 (96%)",
      "TypeScript (95%)",
      "Docker (95%)",
      "PostgreSQL & SQL (92%)",
      "Node.js (90%)",
      "Tailwind CSS (95%)",
    ],
    projects: [
      {
        title: "AI Smart Allocation Engine",
        stack: "Next.js, TypeScript, Tailwind CSS, Gale-Shapley Solver",
        desc: "Multi-portal internship matching and counterfactual career simulation engine.",
      },
      {
        title: "Clinical Time-Series Representation Learning",
        stack: "PyTorch, FastAPI, Transformer Encoder",
        desc: "Deep representation learning pipeline for multi-variate healthcare telemetry.",
      },
    ],
  });

  const addSkill = () => {
    if (skillInput.trim() && !profile.skills.includes(skillInput.trim())) {
      setProfile({
        ...profile,
        skills: [...profile.skills, `${skillInput.trim()} (Verified)`],
      });
      setSkillInput("");
    }
  };

  const removeSkill = (skill: string) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter((s) => s !== skill),
    });
  };

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm">
            AI-Indexed Candidate Profile
          </span>
          <h1 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface mt-2">
            My Academic &amp; Technical Profile
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Your verified skills, assessment scores, and project portfolio drive
            your real-time AI allocation affinity.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsEditing((prev) => !prev)}
          className={`px-5 py-2.5 rounded-xl font-label-lg flex items-center gap-2 self-start transition-all ${
            isEditing
              ? "bg-secondary text-on-secondary"
              : "bg-primary text-on-primary hover:bg-primary-container"
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">
            {isEditing ? "check" : "edit"}
          </span>
          <span>{isEditing ? "Save Profile ✓" : "Edit Profile"}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left 4 Columns: Identity Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-5">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary text-on-primary font-headline-lg font-extrabold flex items-center justify-center text-2xl shadow-sm">
                AS
              </div>
              <h2 className="font-headline-sm text-on-surface mt-4">
                {profile.name}
              </h2>
              <p className="font-body-sm text-on-surface-variant mt-1">
                {profile.headline}
              </p>
              <span className="mt-2.5 px-3 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm font-bold">
                88.4% Tier-1 Match Affinity
              </span>
            </div>

            <div className="pt-4 border-t border-outline-variant/20 space-y-3 font-body-sm text-on-surface-variant">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  school
                </span>
                <span>{profile.university}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  grade
                </span>
                <span>
                  CGPA: <strong className="text-on-surface">{profile.cgpa}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  mail
                </span>
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  location_on
                </span>
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Readiness Telemetry */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-3">
            <h3 className="font-headline-sm text-on-surface">
              AI Telemetry Summary
            </h3>
            <div className="divide-y divide-outline-variant/20 font-body-sm">
              <div className="py-2.5 flex justify-between">
                <span className="text-on-surface-variant">Profile Completeness</span>
                <strong className="text-primary">92%</strong>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-on-surface-variant">Assessment Rank</span>
                <strong className="text-secondary">96th Percentile</strong>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-on-surface-variant">ATS Resume Score</span>
                <strong className="text-primary">91 / 100</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Right 8 Columns: Bio, Skills & Projects */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-3">
            <h3 className="font-headline-sm text-on-surface">
              Candidate Summary
            </h3>
            {isEditing ? (
              <textarea
                rows={3}
                value={profile.bio}
                onChange={(e) =>
                  setProfile({ ...profile, bio: e.target.value })
                }
                className="w-full p-3 rounded-xl bg-surface-container/60 border border-outline-variant/40 outline-none focus:border-primary font-body-md"
              />
            ) : (
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {profile.bio}
              </p>
            )}
          </div>

          {/* Interactive Skill Matrix */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-headline-sm text-on-surface">
                  Verified Technical Skills
                </h3>
                <p className="font-body-sm text-on-surface-variant">
                  Skills used by the AI Allocation Engine to compute your role
                  suitability.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                placeholder="Add a technical skill (e.g. Kubernetes, GraphQL, Rust)..."
                className="flex-1 px-4 py-2 rounded-xl bg-surface-container/60 border border-outline-variant/40 outline-none focus:border-primary font-body-sm"
              />
              <button
                type="button"
                onClick={addSkill}
                className="px-4 py-2 rounded-xl bg-primary text-on-primary font-label-md whitespace-nowrap"
              >
                + Add Skill
              </button>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl bg-surface-container text-primary font-label-md flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[15px] text-secondary">
                    verified
                  </span>
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="ml-1 text-on-surface-variant hover:text-error"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-4">
            <h3 className="font-headline-sm text-on-surface">
              Verified Engineering Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profile.projects.map((proj) => (
                <div
                  key={proj.title}
                  className="p-4 rounded-xl bg-surface-container/50 border border-outline-variant/20 space-y-1.5"
                >
                  <div className="font-label-lg text-on-surface font-bold">
                    {proj.title}
                  </div>
                  <div className="font-label-sm text-primary">{proj.stack}</div>
                  <p className="font-body-sm text-xs text-on-surface-variant">
                    {proj.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}