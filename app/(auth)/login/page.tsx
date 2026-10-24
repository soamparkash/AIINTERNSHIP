// app/(auth)/login/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type PortalRole = "student" | "company" | "admin";

const DEMO_ACCOUNTS: Record<
  PortalRole,
  { label: string; email: string; badge: string; redirect: string }
> = {
  student: {
    label: "Student Candidate",
    email: "aarav.sharma@student.edu",
    badge: "B.Tech CSE",
    redirect: "/student/dashboard",
  },
  company: {
    label: "Enterprise Partner",
    email: "hr-campus@capgemini.com",
    badge: "Capgemini India",
    redirect: "/company/dashboard",
  },
  admin: {
    label: "Platform Admin",
    email: "admin@smartalloc.ai",
    badge: "System Oversight",
    redirect: "/admin/dashboard",
  },
};

export default function LoginPage() {
  const router = useRouter();
  
  // Cinematic splash screen state (plays on every refresh)
  const [showSplash, setShowSplash] = useState(true);
  const [splashPhase, setSplashPhase] = useState<"logo" | "text" | "fade">("logo");

  const [role, setRole] = useState<PortalRole>("student");
  const [email, setEmail] = useState(DEMO_ACCOUNTS.student.email);
  const [password, setPassword] = useState("SmartAlloc#2026");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Sequence: Logo pops in (0ms) -> Text slides/fades in (700ms) -> Fade out (2500ms) -> Hide (3100ms)
    const t1 = setTimeout(() => setSplashPhase("text"), 700);
    const t2 = setTimeout(() => setSplashPhase("fade"), 2500);
    const t3 = setTimeout(() => {
      setShowSplash(false);
    }, 3100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleRoleSwitch = (selectedRole: PortalRole) => {
    setRole(selectedRole);
    setEmail(DEMO_ACCOUNTS[selectedRole].email);
    setPassword("SmartAlloc#2026");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push(DEMO_ACCOUNTS[role].redirect);
    }, 300);
  };

  return (
    <>
      {/* YouTube-Style Cinematic Welcome Splash Screen (Triggered on Every Refresh) */}
      {showSplash && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-inverse-surface text-inverse-on-surface transition-opacity duration-700 ${
            splashPhase === "fade" ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="flex flex-col items-center space-y-5">
            {/* 1. Logo pop in */}
            <div
              className={`w-20 h-20 rounded-3xl bg-primary flex items-center justify-center text-on-primary font-headline-xl text-3xl font-extrabold shadow-2xl transform transition-all duration-700 ease-out ${
                splashPhase === "logo" ? "scale-50 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              AI
            </div>

            {/* 2. Full brand name fade in */}
            <div
              className={`text-center transition-all duration-700 ease-out ${
                splashPhase === "logo"
                  ? "translate-y-6 opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >
              <h1 className="font-headline-lg text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                SmartAlloc <span className="text-secondary-fixed">AI</span>
              </h1>
              <p className="font-body-sm text-xs text-on-surface-variant tracking-widest uppercase mt-1.5">
                AI Smart Allocation Engine
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Login Screen */}
      <div className="space-y-5">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px]">
            <span className="material-symbols-outlined text-[14px]">lock</span>
            Unified Role Authentication
          </div>
          <h1 className="font-headline-lg text-2xl sm:text-3xl text-on-surface tracking-tight">
            Sign in to SmartAlloc AI
          </h1>
          <p className="font-body-sm text-on-surface-variant">
            Select your portal role below or enter your credentials to continue.
          </p>
        </div>

        {/* 1-Click Role Switcher Tabs */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant">
              Quick Select Demo Role
            </label>
            <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-[10px]">
              Auto-Fills Credentials
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 p-1 bg-surface-container rounded-2xl border border-outline-variant/30">
            {(["student", "company", "admin"] as PortalRole[]).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => handleRoleSwitch(r)}
                className={`py-2 px-2 rounded-xl font-label-md text-xs capitalize transition-all flex flex-col items-center gap-0.5 whitespace-nowrap ${
                  role === r
                    ? "bg-surface-container-lowest text-primary font-bold shadow-xs"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                <span>{r}</span>
                <span className="text-[10px] font-normal opacity-75">
                  {DEMO_ACCOUNTS[r].badge}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="font-label-md text-on-surface">Email Address</label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined text-[18px] text-outline absolute left-3.5">
                mail
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/40 font-body-md text-on-surface outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="font-label-md text-on-surface">Password</label>
              <Link
                href="/forgot-password"
                className="font-label-sm text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined text-[18px] text-outline absolute left-3.5">
                key
              </span>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/40 font-body-md text-on-surface outline-none focus:border-primary transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 text-outline hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-sm hover:bg-primary-container transition-all disabled:opacity-60"
          >
            <span>
              {isLoading
                ? "Authenticating..."
                : `Enter ${DEMO_ACCOUNTS[role].label} Portal`}
            </span>
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </button>
        </form>

        <p className="text-center font-body-sm text-on-surface-variant pt-1">
          Don&apos;t have an account yet?{" "}
          <Link
            href="/register"
            className="font-label-md text-primary font-semibold hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>
    </>
  );
}