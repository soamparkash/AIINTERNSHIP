// components/admin/AdminTopbar.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const ADMIN_LINKS = [
  { title: "Command Center", href: "/admin/dashboard", category: "Overview" },
  { title: "AI Matching Engine", href: "/admin/ai-matching", category: "Engine" },
  { title: "Run Allocation Batch", href: "/admin/ai-matching/run", category: "Engine" },
  { title: "All Allocations", href: "/admin/allocations", category: "Governance" },
  { title: "Fairness & Quotas", href: "/admin/fairness", category: "Governance" },
  { title: "Reallocation & Swaps", href: "/admin/reallocation", category: "Governance" },
  { title: "Student Directory", href: "/admin/students", category: "Directory" },
  { title: "Enterprise Partners", href: "/admin/companies", category: "Directory" },
  { title: "Audit Logs", href: "/admin/audit-logs", category: "Security" },
  { title: "Engine Rules", href: "/admin/rules", category: "Security" },
];

export function AdminTopbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setProfileOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path: string) =>
    pathname === path || pathname?.startsWith(path + "/");

  const filteredLinks = ADMIN_LINKS.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Left Brand + Compact Nav */}
          <div className="flex items-center gap-3 min-w-0">
            <Link
              className="flex items-center gap-2 group shrink-0"
              href="/admin/dashboard"
            >
              <div className="w-9 h-9 rounded-xl bg-primary-container flex items-center justify-center text-on-primary font-headline-md font-bold text-sm shadow-sm shrink-0">
                AI
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 whitespace-nowrap">
                  <span className="font-headline-sm text-[15px] font-bold tracking-tight text-on-surface group-hover:text-primary transition-colors">
                    SmartAlloc
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-[9px] font-bold uppercase">
                    Admin
                  </span>
                </div>
                <span className="font-label-sm text-[10px] text-on-surface-variant whitespace-nowrap">
                  Allocation Control Center
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5 ml-1">
              <Link
                href="/admin/dashboard"
                className={`px-2.5 py-1.5 rounded-lg font-label-lg text-[12px] whitespace-nowrap transition-colors ${
                  pathname === "/admin/dashboard"
                    ? "text-primary font-semibold bg-surface-container/80"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                Dashboard
              </Link>

              <Link
                href="/admin/ai-matching"
                className={`px-2.5 py-1.5 rounded-lg font-label-lg text-[12px] whitespace-nowrap transition-colors ${
                  isActive("/admin/ai-matching")
                    ? "text-primary font-semibold bg-surface-container/80"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                AI Engine
              </Link>

              <Link
                href="/admin/allocations"
                className={`px-2.5 py-1.5 rounded-lg font-label-lg text-[12px] whitespace-nowrap transition-colors ${
                  isActive("/admin/allocations")
                    ? "text-primary font-semibold bg-surface-container/80"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                Allocations
              </Link>

              <Link
                href="/admin/fairness"
                className={`px-2.5 py-1.5 rounded-lg font-label-lg text-[12px] whitespace-nowrap transition-colors ${
                  isActive("/admin/fairness")
                    ? "text-primary font-semibold bg-surface-container/80"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                Fairness
              </Link>

              {/* Directory & Governance Dropdown */}
              <div className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-0.5 px-2.5 py-1.5 rounded-lg font-label-lg text-[12px] whitespace-nowrap text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
                >
                  <span>Directory</span>
                  <span className="material-symbols-outlined text-[15px]">
                    expand_more
                  </span>
                </button>
                <div className="absolute left-0 top-full pt-1 hidden group-hover:block w-48 z-50">
                  <div className="p-1.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-lg flex flex-col">
                    <Link
                      href="/admin/students"
                      className="px-3 py-2 rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                    >
                      Students
                    </Link>
                    <Link
                      href="/admin/companies"
                      className="px-3 py-2 rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                    >
                      Companies
                    </Link>
                    <Link
                      href="/admin/reallocation"
                      className="px-3 py-2 rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                    >
                      Reallocations
                    </Link>
                    <Link
                      href="/admin/rules"
                      className="px-3 py-2 rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                    >
                      Matching Rules
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/admin/audit-logs"
                className={`px-2.5 py-1.5 rounded-lg font-label-lg text-[12px] whitespace-nowrap transition-colors ${
                  isActive("/admin/audit-logs")
                    ? "text-primary font-semibold bg-surface-container/80"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                Audit Logs
              </Link>
            </nav>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface-variant hover:border-primary/50 transition-colors"
            >
              <span className="material-symbols-outlined text-[17px] text-outline">
                search
              </span>
              <kbd className="px-1.5 py-0.2 rounded bg-surface-container-highest font-label-sm text-[9px] text-on-surface-variant hidden sm:inline">
                ⌘K
              </kbd>
            </button>

            <Link
              href="/admin/ai-matching/run"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-primary text-on-primary font-label-md text-[12px] font-semibold whitespace-nowrap shadow-xs hover:bg-primary-container transition-all"
            >
              <span className="material-symbols-outlined text-[15px]">
                bolt
              </span>
              <span>Run AI Engine</span>
            </Link>

            <div className="h-5 w-[1px] bg-outline-variant/30 hidden sm:block"></div>

            {/* Profile Dropdown with Direct Sign Out */}
            <div className="relative" ref={profileRef}>
              <button
                type="button"
                onClick={() => setProfileOpen((prev) => !prev)}
                className="flex items-center gap-2 p-1 rounded-xl hover:bg-surface-container transition-colors text-left"
              >
                <div className="text-right hidden sm:block leading-tight">
                  <div className="font-label-md text-[11.5px] text-on-surface font-semibold whitespace-nowrap">
                    Chief Allocator
                  </div>
                  <div className="font-label-sm text-[9.5px] text-secondary font-semibold whitespace-nowrap">
                    System Admin
                  </div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center font-headline-sm font-bold text-xs shrink-0">
                  AD
                </div>
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                  expand_more
                </span>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-60 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-xl p-2 z-50">
                  <div className="px-3 py-2 border-b border-outline-variant/20">
                    <div className="font-label-lg text-on-surface font-bold text-xs">
                      System Administrator
                    </div>
                    <div className="font-body-sm text-[11px] text-on-surface-variant truncate">
                      admin@smartalloc.ai
                    </div>
                  </div>

                  <div className="py-1.5 flex flex-col">
                    <Link
                      href="/admin/settings"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl font-label-md text-on-surface hover:bg-surface-container"
                    >
                      <span className="material-symbols-outlined text-[17px] text-primary">
                        settings
                      </span>
                      Engine Settings
                    </Link>
                    <Link
                      href="/admin/rules"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl font-label-md text-on-surface hover:bg-surface-container"
                    >
                      <span className="material-symbols-outlined text-[17px] text-on-surface-variant">
                        tune
                      </span>
                      Allocation Rules
                    </Link>
                  </div>

                  <div className="py-1.5 border-t border-outline-variant/20 flex flex-col">
                    <div className="px-3 py-1 font-label-sm text-[10px] uppercase tracking-wider text-on-surface-variant">
                      Switch Portal View
                    </div>
                    <Link
                      href="/student/dashboard"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl font-label-md text-on-surface-variant hover:bg-surface-container"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        school
                      </span>
                      Student Portal
                    </Link>
                    <Link
                      href="/company/dashboard"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl font-label-md text-on-surface-variant hover:bg-surface-container"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        domain
                      </span>
                      Company Console
                    </Link>
                  </div>

                  <div className="pt-1.5 border-t border-outline-variant/20">
                    <button
                      type="button"
                      onClick={() => {
                        setProfileOpen(false);
                        router.push("/login");
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl font-label-md text-error hover:bg-error-container/40 font-semibold text-left"
                    >
                      <span className="material-symbols-outlined text-[17px]">
                        logout
                      </span>
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-inverse-surface/50 backdrop-blur-xs flex items-start justify-center pt-24 px-4">
          <div className="bg-surface-container-lowest w-full max-w-lg rounded-2xl border border-outline-variant/30 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-outline-variant/30">
              <span className="material-symbols-outlined text-outline">
                search
              </span>
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Jump to admin governance module..."
                className="w-full bg-transparent outline-none font-body-md text-on-surface"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-on-surface-variant"
              >
                ESC
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-outline-variant/15">
              {filteredLinks.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    router.push(item.href);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-surface-container transition-colors text-left"
                >
                  <span className="font-label-md text-on-surface font-semibold">
                    {item.title}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-[11px]">
                    {item.category}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminTopbar;