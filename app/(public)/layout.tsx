// app/(public)/layout.tsx
import React from "react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-body-md text-on-surface antialiased">
      <Navbar />
      <main className="w-full pt-20 flex-1">{children}</main>
      <Footer />
    </div>
  );
}