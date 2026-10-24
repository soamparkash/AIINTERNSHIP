// app/(admin)/admin/companies/page.tsx
"use client";

import React, { useState } from "react";

const COMPANIES = [
  {
    id: "COMP-01",
    name: "Capgemini Technology Services India",
    sector: "Cloud & Enterprise AI",
    roles: 6,
    seats: 24,
    status: "Tier-1 Verified",
  },
  {
    id: "COMP-02",
    name: "Tata Consultancy Services (R&D)",
    sector: "Autonomous Systems & GenAI",
    roles: 8,
    seats: 36,
    status: "Tier-1 Verified",
  },
  {
    id: "COMP-03",
    name: "Infosys FinTech Labs",
    sector: "Distributed Microservices",
    roles: 5,
    seats: 20,
    status: "Tier-1 Verified",
  },
];

export default function AdminCompaniesPage() {
  const [companies] = useState(COMPANIES);

  return (
    <div className="py-8 space-y-6">
      <div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface">
          Enterprise Partner Registry
        </h1>
        <p className="font-body-md text-on-surface-variant">
          Oversee participating organizations, seat capacities, and role
          requisitions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {companies.map((c) => (
          <div
            key={c.id}
            className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-primary font-bold">
                {c.id}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm">
                {c.status}
              </span>
            </div>
            <div>
              <h3 className="font-headline-sm text-on-surface">{c.name}</h3>
              <p className="font-body-sm text-on-surface-variant mt-1">
                {c.sector}
              </p>
            </div>
            <div className="pt-3 border-t border-outline-variant/20 flex justify-between font-label-md">
              <span>{c.roles} Active Roles</span>
              <span className="text-primary">{c.seats} Total Seats</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}