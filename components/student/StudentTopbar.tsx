// components/student/StudentTopbar.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const QUICK_LINKS = [
  { title: "Student Dashboard", href: "/student/dashboard", category: "Overview" },
  { title: "My Profile & Skills", href: "/student/profile", category: "Overview" },
  { title: "Resume Builder & ATS Score", href: "/student/resume", category: "Overview" },
  { title: "Browse All Internships", href: "/student/internships", category: "Internships" },
  { title: "AI Recommendations", href: "/student/recommendations", category: "Internships" },
  { title: "Saved Internships", href: "/student/saved", category: "Internships" },
  { title: "My Applications", href: "/student/applications", category: "Internships" },
  { title: "My Allocation Status", href: "/student/allocations", category: "Internships" },
  { title: "Skill Gap Analysis", href: "/student/skill-gap", category: "Analysis" },
  { title: "Role Suitability Matrix", href: "/student/suitability", category: "Analysis" },
  { title: "Placement Readiness Score", href: "/student/readiness", category: "Analysis" },
  { title: "What-If Skill Simulator", href: "/student/what-if", category: "Analysis" },
  { title: "Career Roadmap", href: "/student/career-roadmap", category: "Analysis" },
  { title: "Skill Assessments", href: "/student/assessments", category: "Activities" },
  { title: "Weekly Check-In", href: "/student/check-in", category: "Activities" },
  { title: "Mentor Feedback", href: "/student/feedback", category: "Activities" },
  { title: "Learning Outcomes", href: "/student/outcomes", category: "Activities" },
];

export function StudentTopbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const [notifications, setNotifications] = useState([
    {
      id: "1",
      title: "Round 1 Allocation Confirmed",
      desc: "You have been matched with Capgemini (88.4% Match Score).",
      time: "10m ago",
      unread: true,
    },
    {
      id: "2",
      title: "Skill Assessment Unlocked",
      desc: "System Design & Cloud Architecture assessment is ready.",
      time: "2h ago",
      unread: true,
    },
    {
      id: "3",
      title: "Application Shortlisted",
      desc: "TCS R&D shortlisted your profile for Autonomous Agent Evaluator.",
      time: "1d ago",
      unread: false,
    },
  ]);

  const unreadCount = notifications.filter((n) => n.unread).length;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setNotifOpen(false);
        setProfileOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
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

  const filteredLinks = QUICK_LINKS.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const isActive = (path: string) =>
    pathname === path || pathname?.startsWith(path + "/");

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Left Brand + Compact Single-Line Nav */}
          <div className="flex items-center gap-3 min-w-0">
            <Link
              className="flex items-center gap-2 group shrink-0"
              href="/student/dashboard"
            >
              <div className="w-9 h-9 rounded-xl bg-primary-container flex items-center justify-center text-on-primary font-headline-md font-bold text-sm shadow-sm shrink-0">
                AI
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="font-headline-sm text-[15px] font-bold tracking-tight text-on-surface group-hover:text-primary transition-colors">
                    SmartAlloc
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-[9px] font-bold uppercase">
                    Student
                  </span>
                </div>
                <span className="font-label-sm text-[10px] text-on-surface-variant whitespace-nowrap">
                  AI Allocation Portal
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5 ml-1">
              <Link
                href="/student/dashboard"
                className={`px-2.5 py-1.5 rounded-lg font-label-lg text-[12px] whitespace-nowrap transition-colors ${
                  pathname === "/student/dashboard"
                    ? "text-primary font-semibold bg-surface-container/80"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/student/internships"
                className={`px-2.5 py-1.5 rounded-lg font-label-lg text-[12px] whitespace-nowrap transition-colors ${
                  isActive("/student/internships")
                    ? "text-primary font-semibold bg-surface-container/80"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                Internships
              </Link>
              <Link
                href="/student/recommendations"
                className={`px-2.5 py-1.5 rounded-lg font-label-lg text-[12px] whitespace-nowrap transition-colors ${
                  isActive("/student/recommendations")
                    ? "text-primary font-semibold bg-surface-container/80"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                AI Matches
              </Link>
              <Link
                href="/student/allocations"
                className={`px-2.5 py-1.5 rounded-lg font-label-lg text-[12px] whitespace-nowrap transition-colors ${
                  isActive("/student/allocations")
                    ? "text-primary font-semibold bg-surface-container/80"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                My Allocation
              </Link>
              <Link
                href="/student/what-if"
                className={`px-2.5 py-1.5 rounded-lg font-label-lg text-[12px] whitespace-nowrap transition-colors ${
                  isActive("/student/what-if")
                    ? "text-primary font-semibold bg-surface-container/80"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                What-If Simulator
              </Link>
              <Link
                href="/student/assessments"
                className={`px-2.5 py-1.5 rounded-lg font-label-lg text-[12px] whitespace-nowrap transition-colors ${
                  isActive("/student/assessments")
                    ? "text-primary font-semibold bg-surface-container/80"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                Assessments
              </Link>
            </nav>
          </div>

          {/* Right Controls: Compact Search, Notifications, Profile Dropdown */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface-variant hover:border-primary/50 transition-colors"
              title="Quick Jump (⌘K)"
            >
              <span className="material-symbols-outlined text-[17px] text-outline">
                search
              </span>
              <kbd className="px-1.5 py-0.2 rounded bg-surface-container-highest font-label-sm text-[9px] text-on-surface-variant hidden sm:inline">
                ⌘K
              </kbd>
            </button>

            {/* Notifications with Correct Spelling & View All Link */}
            <div className="relative" ref={notifRef}>
              <button
                type="button"
                onClick={() => setNotifOpen((prev) => !prev)}
                className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors relative"
              >
                <span className="material-symbols-outlined text-[19px]">
                  notifications
                </span>
                {unreadCount > 0 && (
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span>
                )}
              </button>

              {notifOpen && (
                <div className="absolute right-0 mt-2 w-80 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-xl p-4 z-50">
                  <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
                    <span className="font-headline-sm text-sm text-on-surface">
                      Notifications ({unreadCount})
                    </span>
                    {unreadCount > 0 && (
                      <button
                        type="button"
                        onClick={markAllRead}
                        className="font-label-sm text-label-sm text-primary hover:underline"
                      >
                        Mark all read
                      </button>
                    )}
                  </div>
                  <div className="divide-y divide-outline-variant/20 max-h-64 overflow-y-auto my-2">
                    {notifications.map((n) => (
                      <div
                        key={n.id}
                        className={`py-2.5 space-y-1 transition-opacity ${
                          n.unread ? "opacity-100" : "opacity-60"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                            {n.unread && (
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            )}
                            {n.title}
                          </span>
                          <span className="font-label-sm text-[10px] text-on-surface-variant">
                            {n.time}
                          </span>
                        </div>
                        <p className="font-body-sm text-xs text-on-surface-variant">
                          {n.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/student/notifications"
                    onClick={() => setNotifOpen(false)}
                    className="block w-full text-center py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high font-label-md text-label-md text-primary font-semibold transition-colors mt-2"
                  >
                    View All Notifications →
                  </Link>
                </div>
              )}
            </div>

            <div className="h-5 w-[1px] bg-outline-variant/30 hidden sm:block"></div>

            {/* Profile Dropdown with Sign Out */}
            <div className="relative" ref={profileRef}>
              <button
                type="button"
                onClick={() => setProfileOpen((prev) => !prev)}
                className="flex items-center gap-2 p-1 rounded-xl hover:bg-surface-container transition-colors text-left"
              >
                <div className="text-right hidden sm:block leading-tight">
                  <div className="font-label-md text-[11.5px] text-on-surface font-semibold whitespace-nowrap">
                    Aarav Sharma
                  </div>
                  <div className="font-label-sm text-[9.5px] text-on-surface-variant whitespace-nowrap">
                    B.Tech CSE · Full Stack
                  </div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-primary text-on-primary flex items-center justify-center font-bold text-xs shrink-0">
                  AS
                </div>
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                  expand_more
                </span>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-60 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-xl p-2 z-50">
                  <div className="px-3 py-2 border-b border-outline-variant/20">
                    <div className="font-label-lg text-on-surface font-bold text-xs">
                      Aarav Sharma
                    </div>
                    <div className="font-body-sm text-[11px] text-on-surface-variant">
                      aarav.sharma@student.edu
                    </div>
                  </div>

                  <div className="py-1.5 flex flex-col">
                    <Link
                      href="/student/profile"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl font-label-md text-on-surface hover:bg-surface-container"
                    >
                      <span className="material-symbols-outlined text-[17px] text-primary">
                        person
                      </span>
                      My Profile &amp; Skills
                    </Link>
                    <Link
                      href="/student/resume"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl font-label-md text-on-surface hover:bg-surface-container"
                    >
                      <span className="material-symbols-outlined text-[17px] text-on-surface-variant">
                        description
                      </span>
                      Resume &amp; ATS Score
                    </Link>
                  </div>

                  <div className="py-1.5 border-t border-outline-variant/20 flex flex-col">
                    <div className="px-3 py-1 font-label-sm text-[10px] uppercase tracking-wider text-on-surface-variant">
                      Switch Portal View
                    </div>
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
                    <Link
                      href="/admin/dashboard"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl font-label-md text-on-surface-variant hover:bg-surface-container"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        admin_panel_settings
                      </span>
                      Admin Console
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
                placeholder="Type a module, tool, or page name..."
                className="w-full bg-transparent outline-none font-body-md text-on-surface"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant"
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
                  <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px]">
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

export default StudentTopbar;