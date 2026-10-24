// app/(student)/student/what-if/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

const AVAILABLE_SKILLS = [
  { id: "react19", name: "React 19 & Server Actions", boost: 4.2, domain: "Frontend", rolesUnlocked: 18 },
  { id: "aws", name: "AWS Serverless & Lambda", boost: 3.8, domain: "Cloud", rolesUnlocked: 15 },
  { id: "k8s", name: "Kubernetes & Docker Swarm", boost: 3.5, domain: "DevOps", rolesUnlocked: 14 },
  { id: "llm", name: "LLM Fine-Tuning & RAG", boost: 5.1, domain: "AI/ML", rolesUnlocked: 24 },
  { id: "kafka", name: "Apache Kafka & Event Streams", boost: 2.9, domain: "Backend", rolesUnlocked: 11 },
  { id: "nextjs", name: "Next.js App Router & TypeScript", boost: 3.2, domain: "Full Stack", rolesUnlocked: 16 },
];

export default function WhatIfSimulatorPage() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["react19"]);
  const [simulatedProjects, setSimulatedProjects] = useState<number>(3);
  const [assessmentScore, setAssessmentScore] = useState<number>(85);

  const toggleSkill = (id: string) => {
    setSelectedSkills((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const baseScore = 82.0;
  const skillBoost = AVAILABLE_SKILLS.filter((s) =>
    selectedSkills.includes(s.id)
  ).reduce((acc, s) => acc + s.boost, 0);
  const projectBoost = (simulatedProjects - 2) * 1.2;
  const assessmentBoost = ((assessmentScore - 75) / 10) * 1.5;

  const finalScore = Math.min(
    99.4,
    Math.max(60, baseScore + skillBoost + projectBoost + assessmentBoost)
  );

  const totalExtraRoles = AVAILABLE_SKILLS.filter((s) =>
    selectedSkills.includes(s.id)
  ).reduce((acc, s) => acc + s.rolesUnlocked, 0);

  return (
    <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm mb-2">
            <span className="material-symbols-outlined text-[15px]">
              auto_graph
            </span>
            Counterfactual AI Career Simulator
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface">
            What-If Allocation Simulator
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Simulate adding technical skills, projects, and assessment scores to
            preview your real-time AI allocation rank.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setSelectedSkills([]);
            setSimulatedProjects(2);
            setAssessmentScore(75);
          }}
          className="px-4 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high font-label-md text-on-surface transition-colors self-start"
        >
          Reset Baseline
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Controls */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-4">
            <h2 className="font-headline-sm text-on-surface">
              1. Toggle High-Demand Skills to Add
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {AVAILABLE_SKILLS.map((skill) => {
                const active = selectedSkills.includes(skill.id);
                return (
                  <button
                    key={skill.id}
                    type="button"
                    onClick={() => toggleSkill(skill.id)}
                    className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between gap-2 ${
                      active
                        ? "border-primary bg-primary-fixed/40 shadow-xs"
                        : "border-outline-variant/30 bg-surface-container-lowest hover:bg-surface-container/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-[11px] text-on-surface-variant">
                        {skill.domain}
                      </span>
                      <span className="font-label-sm text-secondary font-bold">
                        +{skill.boost}% Affinity
                      </span>
                    </div>
                    <div className="font-label-lg text-on-surface">
                      {skill.name}
                    </div>
                    <div className="font-label-sm text-on-surface-variant">
                      Unlocks +{skill.rolesUnlocked} partner roles
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sliders */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-6">
            <h2 className="font-headline-sm text-on-surface">
              2. Adjust Portfolio &amp; Assessment Parameters
            </h2>

            <div className="space-y-2">
              <div className="flex justify-between font-label-md">
                <span>Verified Full-Stack / AI Projects</span>
                <span className="text-primary font-bold">
                  {simulatedProjects} Projects
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={6}
                value={simulatedProjects}
                onChange={(e) => setSimulatedProjects(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between font-label-md">
                <span>Technical Assessment Percentile</span>
                <span className="text-primary font-bold">
                  {assessmentScore}% Score
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={100}
                value={assessmentScore}
                onChange={(e) => setAssessmentScore(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
          </div>
        </div>

        {/* Right Live Output */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-primary text-on-primary rounded-3xl p-6 lg:p-8 shadow-lg space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-label-sm uppercase tracking-wider text-on-primary/80">
                Simulated Allocation Output
              </span>
              <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm font-bold">
                {finalScore >= 90 ? "Tier-1+ Elite" : "Tier-1 Match"}
              </span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-headline-xl text-5xl font-extrabold">
                {finalScore.toFixed(1)}%
              </span>
              <span className="text-secondary-fixed font-label-lg">
                (+{(finalScore - baseScore).toFixed(1)}% vs baseline)
              </span>
            </div>

            <div className="space-y-3 pt-4 border-t border-on-primary/20">
              <div className="flex justify-between text-body-sm">
                <span className="text-on-primary/80">New Roles Unlocked</span>
                <span className="font-bold">+{totalExtraRoles} Roles</span>
              </div>
              <div className="flex justify-between text-body-sm">
                <span className="text-on-primary/80">Projected Stipend Band</span>
                <span className="font-bold">
                  ₹{finalScore >= 92 ? "45,000" : "32,000"} / month
                </span>
              </div>
              <div className="flex justify-between text-body-sm">
                <span className="text-on-primary/80">Allocation Probability</span>
                <span className="font-bold text-secondary-fixed">98.2% High</span>
              </div>
            </div>

            <Link
              href="/student/assessments"
              className="w-full py-3 rounded-xl bg-surface-container-lowest text-primary font-label-lg flex items-center justify-center gap-2 hover:bg-surface-container transition-colors"
            >
              <span>Take Skill Assessment to Lock Boost</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}