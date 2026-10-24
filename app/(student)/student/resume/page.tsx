// app/(student)/student/resume/page.tsx
"use client";

import React, { useState } from "react";

export default function StudentResumePage() {
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(true);
  const [resumeScore, setResumeScore] = useState(91);
  const [latexModalOpen, setLatexModalOpen] = useState(false);

  const handleReanalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setAnalyzed(true);
      setResumeScore(94);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm">
            ATS Resume Parser &amp; Optimizer
          </span>
          <h1 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface mt-2">
            Resume Analysis &amp; ATS Score
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Upload your resume to check ATS compliance, extract skills, and
            optimize for the AI Smart Allocation Engine.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setLatexModalOpen(true)}
          className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-lg flex items-center gap-2 shadow-sm hover:bg-primary-container transition-all self-start"
        >
          <span className="material-symbols-outlined text-[18px]">
            code
          </span>
          <span>Generate ATS LaTeX Resume</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Upload Box */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-surface-container-lowest rounded-2xl p-6 border-2 border-dashed border-outline-variant/50 text-center space-y-4 hover:border-primary transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-primary-fixed text-primary flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[28px]">
                upload_file
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="font-headline-sm text-on-surface">
                Drag &amp; drop your resume
              </h3>
              <p className="font-body-sm text-on-surface-variant">
                PDF, DOCX up to 5 MB
              </p>
            </div>
            <label className="inline-block px-5 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high font-label-md text-on-surface cursor-pointer transition-colors">
              Browse File
              <input type="file" className="hidden" accept=".pdf,.docx" />
            </label>
          </div>

          {/* Uploaded File Card */}
          <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/30 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-error-container text-on-error-container flex items-center justify-center font-bold">
                  PDF
                </div>
                <div>
                  <div className="font-label-md text-on-surface font-semibold">
                    Aarav_Sharma_Resume.pdf
                  </div>
                  <div className="font-label-sm text-on-surface-variant">
                    245 KB • Uploaded Oct 22
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm font-bold">
                Parsed ✓
              </span>
            </div>

            <button
              type="button"
              disabled={analyzing}
              onClick={handleReanalyze}
              className="w-full py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high font-label-md text-primary flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-[18px]">
                {analyzing ? "sync" : "psychology"}
              </span>
              <span>{analyzing ? "Analyzing Resume..." : "Re-Analyze with AI"}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Score & Extracted Data */}
        <div className="lg:col-span-7 space-y-6">
          {/* Score Card */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
              <div>
                <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">
                  ATS Compatibility Score
                </span>
                <div className="font-headline-xl text-4xl font-extrabold text-primary mt-1">
                  {resumeScore} <span className="text-xl text-outline">/ 100</span>
                </div>
              </div>
              <div className="w-16 h-16 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold text-lg">
                {resumeScore}%
              </div>
            </div>

            {/* Fixed Progress Bar (No Overflow) */}
            <div className="w-full bg-surface-container rounded-full h-3 overflow-hidden">
              <div
                className="bg-primary h-full rounded-full transition-all duration-500"
                style={{ width: `${resumeScore}%` }}
              />
            </div>
          </div>

          {/* Extracted Skills */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-3">
            <h3 className="font-headline-sm text-on-surface">
              Extracted Skills &amp; Keywords
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "PyTorch",
                "FastAPI",
                "Next.js 15",
                "TypeScript",
                "Docker",
                "PostgreSQL",
                "Node.js",
                "Tailwind CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg bg-surface-container text-primary font-label-md font-semibold flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[14px] text-secondary">
                    check
                  </span>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education & Projects */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-4">
            <h3 className="font-headline-sm text-on-surface">
              Parsed Academic Record
            </h3>
            <div className="p-4 rounded-xl bg-surface-container/50 border border-outline-variant/20 space-y-1">
              <div className="font-label-lg text-on-surface font-bold">
                B.Tech — Computer Science &amp; Engineering
              </div>
              <div className="font-body-sm text-on-surface-variant">
                Lovely Professional University • 2023–2027 • CGPA: 9.14
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LaTeX ATS Template Modal */}
      {latexModalOpen && (
        <div className="fixed inset-0 z-50 bg-inverse-surface/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-outline-variant/30 shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
              <div>
                <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm font-semibold">
                  ATS-Optimized LaTeX Template
                </span>
                <h3 className="font-headline-md text-on-surface mt-1">
                  Single-Page Professional LaTeX Code
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLatexModalOpen(false)}
                className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <pre className="p-4 rounded-2xl bg-inverse-surface text-inverse-on-surface font-mono text-xs overflow-x-auto max-h-72">
              {`\\documentclass[letterpaper,11pt]{article}
\\usepackage{tabularx,hyperref}
\\begin{document}
\\begin{center}
    {\\Large \\textbf{Aarav Sharma}} \\\\
    Bengaluru | aarav.sharma@student.edu | +91 98765 43210
\\end{center}
\\section*{Education}
\\textbf{B.Tech Computer Science} \\hfill 2023--2027 \\\\
Lovely Professional University \\hfill CGPA: 9.14/10.0
\\section*{Technical Skills}
PyTorch, FastAPI, Next.js, TypeScript, Docker, PostgreSQL
\\end{document}`}
            </pre>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setLatexModalOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-surface-container font-label-md"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "\\documentclass[letterpaper,11pt]{article}..."
                  );
                  alert("LaTeX code copied to clipboard!");
                  setLatexModalOpen(false);
                }}
                className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-md"
              >
                Copy LaTeX Code ✓
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}