// app/(company)/company/profile/page.tsx
"use client";

import React, { useState } from "react";

export default function CompanyProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Capgemini Technology Services India",
    tagline: "Enterprise Cloud, AI & Digital Engineering Partner",
    location: "Bengaluru, Karnataka (Whitefield Campus)",
    phone: "+91 80 6656 7000",
    email: "hr-campus@capgemini.com",
    website: "https://www.capgemini.com/in-en",
    founded: "Est. 1967 (India Operations 2001)",
    employees: "150,000+ (India)",
    sector: "IT Services, Cloud & Enterprise AI",
    address: "EPIP Zone, Whitefield, Bengaluru, Karnataka - 560066",
    about:
      "Capgemini Technology Services India is a premier partner on the SmartAlloc AI engine, offering high-impact engineering internships across Cloud Native Architecture, Generative AI Agents, DevSecOps, and FinTech Microservices.",
    techStack: [
      "PyTorch",
      "FastAPI",
      "Next.js",
      "Kubernetes",
      "AWS Serverless",
      "Apache Kafka",
      "Terraform",
      "PostgreSQL",
    ],
  });

  return (
    <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm">
            Verified Enterprise Partner
          </span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mt-2">
            Company Profile &amp; AI Matching Baseline
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Manage your public organization profile, verified tech stack, and
            campus recruitment contact details.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsEditing((prev) => !prev)}
          className={`px-5 py-2.5 rounded-xl font-label-lg flex items-center gap-2 transition-all self-start ${
            isEditing
              ? "bg-secondary text-on-secondary"
              : "bg-primary text-on-primary hover:bg-primary-container"
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">
            {isEditing ? "check" : "edit"}
          </span>
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>

      {/* Balanced 12-Column Grid (No Empty Whitespace) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Identity + Allocation Telemetry */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-5">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary-fixed text-primary font-headline-lg font-extrabold flex items-center justify-center text-2xl shadow-xs">
                CG
              </div>
              <h2 className="font-headline-sm text-on-surface mt-4">
                {profile.name}
              </h2>
              <p className="font-body-sm text-on-surface-variant mt-0.5">
                {profile.tagline}
              </p>
              <span className="mt-2 px-3 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  verified
                </span>
                Tier-1 Verified Partner
              </span>
            </div>

            <div className="pt-4 border-t border-outline-variant/20 space-y-3 font-body-sm text-on-surface-variant">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  location_on
                </span>
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  call
                </span>
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  mail
                </span>
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  language
                </span>
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline truncate"
                >
                  {profile.website}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  apartment
                </span>
                <span>{profile.founded}</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-3">
            <h3 className="font-headline-sm text-on-surface">
              Recruitment Telemetry
            </h3>
            <div className="divide-y divide-outline-variant/20 font-body-sm">
              <div className="py-2.5 flex justify-between">
                <span className="text-on-surface-variant">Total Internships</span>
                <strong className="text-on-surface">6</strong>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-on-surface-variant">Active Postings</span>
                <strong className="text-primary">6 Active</strong>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-on-surface-variant">Total Seat Capacity</span>
                <strong className="text-on-surface">24 Seats</strong>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-on-surface-variant">Allocated Seats</span>
                <strong className="text-secondary">18 / 24 (75%)</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: About, Organization Details, Tech Stack & Mentors */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-3">
            <h3 className="font-headline-sm text-on-surface">
              About Organization
            </h3>
            {isEditing ? (
              <textarea
                rows={4}
                value={profile.about}
                onChange={(e) =>
                  setProfile({ ...profile, about: e.target.value })
                }
                className="w-full p-3 rounded-xl bg-surface-container/60 border border-outline-variant/40 outline-none focus:border-primary font-body-md"
              />
            ) : (
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {profile.about}
              </p>
            )}
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-4">
            <h3 className="font-headline-sm text-on-surface">
              Corporate Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <div className="font-label-sm text-on-surface-variant uppercase">
                  Employee Strength
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.employees}
                    onChange={(e) =>
                      setProfile({ ...profile, employees: e.target.value })
                    }
                    className="mt-1 w-full px-3 py-2 rounded-lg bg-surface-container border border-outline-variant/40"
                  />
                ) : (
                  <div className="font-label-lg text-on-surface mt-1">
                    {profile.employees}
                  </div>
                )}
              </div>

              <div>
                <div className="font-label-sm text-on-surface-variant uppercase">
                  India Headquarters
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.location}
                    onChange={(e) =>
                      setProfile({ ...profile, location: e.target.value })
                    }
                    className="mt-1 w-full px-3 py-2 rounded-lg bg-surface-container border border-outline-variant/40"
                  />
                ) : (
                  <div className="font-label-lg text-on-surface mt-1">
                    {profile.location}
                  </div>
                )}
              </div>

              <div>
                <div className="font-label-sm text-on-surface-variant uppercase">
                  Registered Campus Address
                </div>
                <div className="font-label-lg text-on-surface mt-1">
                  {profile.address}
                </div>
              </div>

              <div>
                <div className="font-label-sm text-on-surface-variant uppercase">
                  Primary Industry Sector
                </div>
                <div className="font-label-lg text-on-surface mt-1">
                  {profile.sector}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-headline-sm text-on-surface">
                  Verified Engineering Tech Stack
                </h3>
                <p className="font-body-sm text-on-surface-variant">
                  Used by the AI Allocation Engine to compute student skill
                  affinity scores.
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-primary-fixed text-primary font-label-sm">
                AI Indexed
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl bg-surface-container text-on-surface font-label-md flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[15px] text-secondary">
                    verified
                  </span>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}