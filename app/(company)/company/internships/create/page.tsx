// app/(company)/company/internships/create/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CreateInternshipPage() {
  const router = useRouter();
  const [title, setTitle] = useState("Cloud & AI Platform Engineering Intern");
  const [domain, setDomain] = useState("AI / Cloud Engineering");
  const [location, setLocation] = useState("Bengaluru (Hybrid)");
  const [stipend, setStipend] = useState("25000");
  const [seats, setSeats] = useState("8");
  const [skills, setSkills] = useState<string[]>([
    "PyTorch",
    "FastAPI",
    "Docker",
    "PostgreSQL",
  ]);
  const [skillInput, setSkillInput] = useState("");

  // AI Weight Calibration
  const [skillWeight, setSkillWeight] = useState(50);
  const [assessmentWeight, setAssessmentWeight] = useState(30);
  const [cgpaWeight, setCgpaWeight] = useState(20);
  const [published, setPublished] = useState(false);

  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const removeSkill = (s: string) => {
    setSkills(skills.filter((item) => item !== s));
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    setPublished(true);
    setTimeout(() => {
      router.push("/company/internships");
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm">
            AI-Calibrated Requisition
          </span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mt-2">
            Post New Internship Opening
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Define role parameters and calibrate the AI matching weights for
            automated candidate ranking.
          </p>
        </div>
        <Link
          href="/company/internships"
          className="px-4 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high font-label-md text-on-surface"
        >
          ← Back to Roles
        </Link>
      </div>

      <form
        onSubmit={handlePublish}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8"
      >
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-5">
            <h2 className="font-headline-sm text-on-surface">
              1. Role Specifications
            </h2>

            <div className="space-y-1.5">
              <label className="font-label-md text-on-surface">Role Title</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/40 outline-none focus:border-primary"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-label-md text-on-surface">
                  Technical Domain
                </label>
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/40 outline-none focus:border-primary"
                >
                  <option>AI / Cloud Engineering</option>
                  <option>Full Stack Development</option>
                  <option>Data Science &amp; MLOps</option>
                  <option>Cybersecurity &amp; DevSecOps</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="font-label-md text-on-surface">
                  Location &amp; Mode
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/40 outline-none focus:border-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-label-md text-on-surface">
                  Monthly Stipend (₹)
                </label>
                <input
                  type="number"
                  value={stipend}
                  onChange={(e) => setStipend(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/40 outline-none focus:border-primary"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-label-md text-on-surface">
                  Allocation Seat Capacity
                </label>
                <input
                  type="number"
                  value={seats}
                  onChange={(e) => setSeats(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/40 outline-none focus:border-primary"
                />
              </div>
            </div>

            {/* Required Skills */}
            <div className="space-y-2">
              <label className="font-label-md text-on-surface">
                Mandatory Technical Skills (Used by AI Matcher)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  placeholder="e.g. Kubernetes, Next.js, LangChain..."
                  className="flex-1 px-4 py-2 rounded-xl bg-surface-container/60 border border-outline-variant/40 outline-none focus:border-primary"
                />
                <button
                  type="button"
                  onClick={addSkill}
                  className="px-4 py-2 rounded-xl bg-secondary-fixed text-on-secondary-fixed-variant font-label-md"
                >
                  + Add Skill
                </button>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm flex items-center gap-1.5"
                  >
                    {s}
                    <button
                      type="button"
                      onClick={() => removeSkill(s)}
                      className="hover:text-error font-bold"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* AI Weight Calibration */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-5">
            <h2 className="font-headline-sm text-on-surface">
              2. AI Allocation Weight Calibration
            </h2>
            <p className="font-body-sm text-on-surface-variant">
              Customize how the deterministic matching algorithm scores
              applicants for this role.
            </p>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between font-label-md mb-1">
                  <span>Verified Technical Skill Match</span>
                  <span className="text-primary font-bold">{skillWeight}%</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={80}
                  value={skillWeight}
                  onChange={(e) => setSkillWeight(Number(e.target.value))}
                  className="w-full accent-primary"
                />
              </div>

              <div>
                <div className="flex justify-between font-label-md mb-1">
                  <span>Proctored Assessment Score</span>
                  <span className="text-primary font-bold">
                    {assessmentWeight}%
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={60}
                  value={assessmentWeight}
                  onChange={(e) => setAssessmentWeight(Number(e.target.value))}
                  className="w-full accent-primary"
                />
              </div>

              <div>
                <div className="flex justify-between font-label-md mb-1">
                  <span>Academic CGPA &amp; Project Depth</span>
                  <span className="text-primary font-bold">{cgpaWeight}%</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={40}
                  value={cgpaWeight}
                  onChange={(e) => setCgpaWeight(Number(e.target.value))}
                  className="w-full accent-primary"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Live Preview Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-primary text-on-primary rounded-3xl p-6 lg:p-8 shadow-lg space-y-6 sticky top-28">
            <div className="flex items-center justify-between">
              <span className="font-label-sm uppercase tracking-wider text-on-primary/80">
                Live Pool Forecast
              </span>
              <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm font-bold">
                Instant Match Ready
              </span>
            </div>

            <div>
              <h3 className="font-headline-md text-on-primary">{title}</h3>
              <p className="font-body-sm text-on-primary/80 mt-1">
                {domain} • {location}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 border-y border-on-primary/20">
              <div>
                <div className="font-label-sm text-on-primary/70">
                  Eligible Tier-1 Pool
                </div>
                <div className="font-headline-md text-2xl font-bold text-secondary-fixed">
                  {Math.max(12, 68 - skills.length * 4)} Candidates
                </div>
              </div>
              <div>
                <div className="font-label-sm text-on-primary/70">
                  Monthly Stipend
                </div>
                <div className="font-headline-md text-2xl font-bold">
                  ₹{Number(stipend || 0).toLocaleString("en-IN")}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-surface-container-lowest text-primary font-label-lg flex items-center justify-center gap-2 hover:bg-surface-container transition-all shadow-md"
            >
              <span className="material-symbols-outlined text-[20px]">
                rocket_launch
              </span>
              <span>
                {published
                  ? "Published to AI Engine ✓"
                  : "Publish & Activate AI Matching"}
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}