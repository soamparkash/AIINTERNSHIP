// app/(student)/student/notifications/page.tsx
"use client";

import React, { useState } from "react";

interface StudentNotification {
  id: string;
  title: string;
  description: string;
  category: "Allocation" | "Assessment" | "Application" | "System";
  time: string;
  unread: boolean;
}

const INITIAL_STUDENT_NOTIFICATIONS: StudentNotification[] = [
  {
    id: "notif-1",
    title: "Round 1 Allocation Confirmed",
    description: "You have been officially allocated to Capgemini India as a Cloud & AI Platform Engineering Intern (88.4% Match Score).",
    category: "Allocation",
    time: "10 mins ago",
    unread: true,
  },
  {
    id: "notif-2",
    title: "Skill Assessment Unlocked",
    description: "System Design & Cloud Architecture assessment is ready in your portal. Complete it to lock your verified score.",
    category: "Assessment",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: "notif-3",
    title: "Application Shortlisted",
    description: "TCS R&D shortlisted your profile for the Autonomous Agent Evaluator role.",
    category: "Application",
    time: "1 day ago",
    unread: false,
  },
  {
    id: "notif-4",
    title: "Deterministic Engine Batch Run #14",
    description: "The AI Smart Allocation Engine successfully executed Round 1 matching across all 512 partner enterprises.",
    category: "System",
    time: "2 days ago",
    unread: false,
  },
];

export default function StudentNotificationsPage() {
  const [notifications, setNotifications] = useState<StudentNotification[]>(
    INITIAL_STUDENT_NOTIFICATIONS
  );
  const [filter, setFilter] = useState("All");

  const unreadCount = notifications.filter((n) => n.unread).length;

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const toggleRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: !n.unread } : n))
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const filtered = notifications.filter((n) => {
    if (filter === "Unread") return n.unread;
    if (filter !== "All") return n.category === filter;
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-outline-variant/30">
        <div>
          <span className="px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm">
            Student Alerts ({unreadCount} Unread)
          </span>
          <h1 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface mt-2">
            Notifications &amp; Activity Stream
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Stay updated with real-time allocation updates, assessment reminders,
            and application shortlists.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center">
          {unreadCount > 0 && (
            <button
              type="button"
              onClick={markAllAsRead}
              className="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high font-label-md text-on-surface transition-colors"
            >
              Mark all read
            </button>
          )}
          <button
            type="button"
            onClick={clearAll}
            className="px-4 py-2 rounded-xl border border-outline-variant/40 hover:bg-error-container/20 font-label-md text-error transition-colors"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1 p-1 bg-surface-container rounded-xl w-fit">
        {["All", "Unread", "Allocation", "Assessment", "Application", "System"].map(
          (tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilter(tab)}
              className={`px-3 py-1.5 rounded-lg font-label-sm text-xs transition-all ${
                filter === tab
                  ? "bg-surface-container-lowest text-primary font-semibold shadow-xs"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="bg-surface-container-lowest rounded-3xl p-12 text-center border border-outline-variant/30 space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-surface-container text-outline flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[28px]">
                notifications_off
              </span>
            </div>
            <h3 className="font-headline-sm text-on-surface">
              No notifications found
            </h3>
            <p className="font-body-sm text-on-surface-variant">
              You&apos;re all caught up with your candidate alerts!
            </p>
          </div>
        ) : (
          filtered.map((item) => (
            <div
              key={item.id}
              className={`bg-surface-container-lowest rounded-2xl p-5 border transition-all flex items-start justify-between gap-4 ${
                item.unread
                  ? "border-primary/40 shadow-xs bg-primary-fixed/5"
                  : "border-outline-variant/30 shadow-sm"
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    item.category === "Allocation"
                      ? "bg-secondary-fixed text-secondary"
                      : item.category === "Assessment"
                      ? "bg-primary-fixed text-primary"
                      : item.category === "Application"
                      ? "bg-tertiary-fixed text-tertiary"
                      : "bg-surface-container text-on-surface-variant"
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {item.category === "Allocation"
                      ? "verified"
                      : item.category === "Assessment"
                      ? "checklist"
                      : item.category === "Application"
                      ? "work"
                      : "memory"}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-label-lg text-on-surface font-bold">
                      {item.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-[10px] text-on-surface-variant">
                      {item.category}
                    </span>
                    {item.unread && (
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    )}
                  </div>
                  <p className="font-body-sm text-on-surface-variant">
                    {item.description}
                  </p>
                  <span className="font-label-sm text-[11px] text-outline block pt-1">
                    {item.time}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => toggleRead(item.id)}
                className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high font-label-sm text-xs text-on-surface-variant whitespace-nowrap transition-colors shrink-0"
              >
                {item.unread ? "Mark as Read" : "Unread"}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}