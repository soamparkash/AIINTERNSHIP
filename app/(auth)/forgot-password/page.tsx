// app/(auth)/forgot-password/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px]">
          <span className="material-symbols-outlined text-[14px]">
            lock_reset
          </span>
          Account Recovery
        </div>
        <h1 className="font-headline-lg text-2xl sm:text-3xl text-on-surface tracking-tight">
          Reset Your Password
        </h1>
        <p className="font-body-sm text-on-surface-variant">
          Enter your registered email address and we will send you a password
          recovery link.
        </p>
      </div>

      {sent ? (
        <div className="p-6 rounded-2xl bg-secondary-fixed/40 border border-secondary/30 space-y-4">
          <div className="flex items-center gap-2.5 text-secondary font-headline-sm">
            <span className="material-symbols-outlined">check_circle</span>
            Recovery Link Dispatched
          </div>
          <p className="font-body-sm text-on-surface-variant">
            We have sent password reset instructions to{" "}
            <strong className="text-on-surface">{email}</strong>.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-on-primary font-label-md"
          >
            Return to Sign In
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="font-label-md text-on-surface">
              Registered Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@organization.com"
              className="w-full px-4 py-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/40 font-body-md text-on-surface outline-none focus:border-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-primary text-on-primary font-label-lg flex items-center justify-center gap-2 hover:bg-primary-container transition-all"
          >
            <span>Send Recovery Link</span>
            <span className="material-symbols-outlined text-[18px]">send</span>
          </button>
        </form>
      )}

      <p className="text-center font-body-sm text-on-surface-variant">
        Remembered your password?{" "}
        <Link
          href="/login"
          className="font-label-md text-primary font-semibold hover:underline"
        >
          Back to Sign In
        </Link>
      </p>
    </div>
  );
}