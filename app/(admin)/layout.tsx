// app/(admin)/layout.tsx
import React from "react";
import { AdminTopbar } from "@/components/admin/AdminTopbar";
import { Footer } from "@/components/common/Footer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-body-md text-on-surface antialiased">
      <AdminTopbar />
      {/* Dedicated spacer for the h-20 fixed navbar so content never clips */}
      <div className="h-20 w-full shrink-0" aria-hidden="true" />
      <main className="w-full bg-background flex-1 pt-6 pb-12">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}