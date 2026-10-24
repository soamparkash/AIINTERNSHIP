// app/(auth)/register/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [accountType, setAccountType] = useState<"student" | "company">(
    "student"
  );
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [specialization, setSpecialization] = useState(
    "B.Tech CSE (Full Stack)"
  );
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (accountType === "student") {
      router.push("/student/dashboard");
    } else {
      router.push("/company/dashboard");
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-[11px]">
          <span className="material-symbols-outlined text-[14px]">
            person_add
          </span>
          Onboarding Registration
        </div>
        <h1 className="font-headline-lg text-2xl sm:text-3xl text-on-surface tracking-tight">
          Create Your Account
        </h1>
        <p className="font-body-sm text-on-surface-variant">
          Join the AI Smart Allocation Engine as a student candidate or
          enterprise partner.
        </p>
      </div>

      {/* Account Type Selector */}
      <div className="grid grid-cols-2 gap-2.5 p-1 bg-surface-container rounded-2xl border border-outline-variant/30">
        <button
          type="button"
          onClick={() => setAccountType("student")}
          className={`py-2.5 px-3 rounded-xl font-label-md flex items-center justify-center gap-2 transition-all ${
            accountType === "student"
              ? "bg-surface-container-lowest text-primary font-bold shadow-xs"
              : "text-on-surface-variant hover:text-on-surface"
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">school</span>
          <span>Student Candidate</span>
        </button>

        <button
          type="button"
          onClick={() => setAccountType("company")}
          className={`py-2.5 px-3 rounded-xl font-label-md flex items-center justify-center gap-2 transition-all ${
            accountType === "company"
              ? "bg-surface-container-lowest text-primary font-bold shadow-xs"
              : "text-on-surface-variant hover:text-on-surface"
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">domain</span>
          <span>Enterprise Partner</span>
        </button>
      </div>

      <form onSubmit={handleRegister} className="space-y-4">
        <div className="space-y-1.5">
          <label className="font-label-md text-on-surface">
            {accountType === "student" ? "Full Name" : "Recruiter Full Name"}
          </label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder={
              accountType === "student" ? "e.g. Aarav Sharma" : "e.g. Priya Menon"
            }
            className="w-full px-4 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/40 font-body-md text-on-surface outline-none focus:border-primary"
          />
        </div>

        <div className="space-y-1.5">
          <label className="font-label-md text-on-surface">
            {accountType === "student"
              ? "University Email"
              : "Corporate Work Email"}
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={
              accountType === "student"
                ? "student@university.edu"
                : "hr@company.com"
            }
            className="w-full px-4 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/40 font-body-md text-on-surface outline-none focus:border-primary"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="font-label-md text-on-surface">
              {accountType === "student" ? "University / Institute" : "Company Name"}
            </label>
            <input
              type="text"
              required
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              placeholder={
                accountType === "student"
                  ? "e.g. LPU / IIT / NIT"
                  : "e.g. Capgemini India"
              }
              className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/40 font-body-md text-on-surface outline-none focus:border-primary"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-label-md text-on-surface">
              {accountType === "student" ? "Degree & Branch" : "Industry Sector"}
            </label>
            <input
              type="text"
              required
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/40 font-body-md text-on-surface outline-none focus:border-primary"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="font-label-md text-on-surface">
            Create Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Minimum 8 characters"
            className="w-full px-4 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/40 font-body-md text-on-surface outline-none focus:border-primary"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-sm hover:bg-primary-container transition-all"
        >
          <span>
            {accountType === "student"
              ? "Complete Student Registration"
              : "Register Enterprise Partner"}
          </span>
          <span className="material-symbols-outlined text-[18px]">
            arrow_forward
          </span>
        </button>
      </form>

      <p className="text-center font-body-sm text-on-surface-variant">
        Already registered?{" "}
        <Link
          href="/login"
          className="font-label-md text-primary font-semibold hover:underline"
        >
          Sign in to your account
        </Link>
      </p>
    </div>
  );
}