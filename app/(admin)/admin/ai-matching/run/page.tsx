// app/(admin)/admin/ai-matching/run/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

const SOLVER_STEPS = [
  "1. Parsing 4,820 Student Skill Vectors & Proctored Assessment Scores...",
  "2. Calibrating 512 Enterprise Role Requisitions & Seat Capacities...",
  "3. Enforcing Affirmative Inclusion & Rural College Representation Quotas...",
  "4. Running Constrained Gale-Shapley Optimal Matching Solver...",
];

export default function RunAIMatchingPage() {
  const [skillWeight, setSkillWeight] = useState(50);
  const [assessmentWeight, setAssessmentWeight] = useState(30);
  const [fairnessWeight, setFairnessWeight] = useState(20);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [completed, setCompleted] = useState(false);

  const startMatchingRun = () => {
    setIsRunning(true);
    setCompleted(false);
    setCurrentStep(0);

    SOLVER_STEPS.forEach((_, index) => {
      setTimeout(() => {
        setCurrentStep(index);
        if (index === SOLVER_STEPS.length - 1) {
          setTimeout(() => {
            setIsRunning(false);
            setCompleted(true);
          }, 700);
        }
      }, (index + 1) * 650);
    });
  };

  return (
    <div className="max-w-7xl mx-auto w-full py-8 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm">
            Deterministic Solver Engine
          </span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mt-2">
            Execute AI Allocation Run
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Configure global solver weights and execute the national internship
            matching batch.
          </p>
        </div>
        <Link
          href="/admin/dashboard"
          className="px-4 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high font-label-md text-on-surface self-start"
        >
          ← Back to Command Center
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Solver Parameters */}
        <div className="lg:col-span-6 bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-6">
          <h2 className="font-headline-sm text-on-surface">
            Global Solver Hyperparameters
          </h2>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between font-label-md mb-1">
                <span>Technical Skill Vector Cosine Similarity</span>
                <span className="text-primary font-bold">{skillWeight}%</span>
              </div>
              <input
                type="range"
                min={20}
                max={70}
                value={skillWeight}
                onChange={(e) => setSkillWeight(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            <div>
              <div className="flex justify-between font-label-md mb-1">
                <span>Proctored Assessment Percentile Weight</span>
                <span className="text-primary font-bold">
                  {assessmentWeight}%
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={50}
                value={assessmentWeight}
                onChange={(e) => setAssessmentWeight(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            <div>
              <div className="flex justify-between font-label-md mb-1">
                <span>Quota &amp; Regional Inclusion Priority</span>
                <span className="text-primary font-bold">{fairnessWeight}%</span>
              </div>
              <input
                type="range"
                min={10}
                max={40}
                value={fairnessWeight}
                onChange={(e) => setFairnessWeight(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
          </div>

          <button
            type="button"
            disabled={isRunning}
            onClick={startMatchingRun}
            className="w-full py-3.5 rounded-xl bg-primary text-on-primary font-label-lg flex items-center justify-center gap-2 hover:bg-primary-container shadow-md transition-all disabled:opacity-60"
          >
            <span className="material-symbols-outlined text-[20px]">bolt</span>
            <span>
              {isRunning
                ? "Executing Gale-Shapley Solver..."
                : "Execute Round 1 Matching Run"}
            </span>
          </button>
        </div>

        {/* Right Live Execution Telemetry */}
        <div className="lg:col-span-6 bg-primary text-on-primary rounded-3xl p-6 lg:p-8 shadow-lg flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-label-sm uppercase tracking-wider text-on-primary/80">
                Solver Execution Pipeline
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm font-bold">
                {completed
                  ? "Batch Complete ✓"
                  : isRunning
                  ? "Running..."
                  : "Ready"}
              </span>
            </div>

            <div className="space-y-3 pt-2">
              {SOLVER_STEPS.map((step, idx) => {
                const isDone = completed || currentStep > idx;
                const isCurrent = isRunning && currentStep === idx;
                return (
                  <div
                    key={step}
                    className={`p-3.5 rounded-xl border transition-all flex items-center gap-3 ${
                      isDone
                        ? "bg-secondary-fixed/20 border-secondary-fixed/50 text-on-primary"
                        : isCurrent
                        ? "bg-on-primary/20 border-on-primary text-on-primary animate-pulse"
                        : "bg-inverse-surface/30 border-on-primary/10 text-on-primary/60"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {isDone
                        ? "check_circle"
                        : isCurrent
                        ? "sync"
                        : "radio_button_unchecked"}
                    </span>
                    <span className="font-label-md text-xs">{step}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {completed && (
            <div className="p-4 rounded-2xl bg-surface-container-lowest text-on-surface flex items-center justify-between">
              <div>
                <div className="font-label-lg text-primary font-bold">
                  1,438 Optimal Allocations Generated
                </div>
                <div className="font-body-sm text-xs text-on-surface-variant">
                  92.4% Average Skill Affinity • 100% Quota Compliance
                </div>
              </div>
              <Link
                href="/admin/allocations"
                className="px-4 py-2 rounded-xl bg-primary text-on-primary font-label-md"
              >
                Inspect Results →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}