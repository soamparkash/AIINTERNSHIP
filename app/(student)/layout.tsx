// app/(student)/layout.tsx
import React from "react";
import { StudentTopbar } from "@/components/student/StudentTopbar";
import { Footer } from "@/components/common/Footer";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-body-md text-on-surface antialiased">
      <StudentTopbar />
      {/* Dedicated spacer for the h-20 fixed navbar */}
      <div className="h-20 w-full shrink-0" aria-hidden="true" />
      <main className="w-full bg-background flex-1 pb-12">
        <div className="flex flex-col w-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
}