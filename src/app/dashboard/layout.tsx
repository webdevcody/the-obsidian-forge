"use client";

import { CheckIcon, HammerIcon, PackageIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div
      key="1"
      className="grid h-screen min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]"
    >
      <div className="hidden border-r bg-gray-900 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-8">
          <div className="flex-1 overflow-auto py-8">
            <nav className="grid gap-2 items-start px-4 text-md font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-gray-200"
                href="/dashboard/orders/new"
              >
                <StarIcon />
                New Orders
              </Link>

              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-gray-200"
                href="/dashboard/orders/inProgress"
              >
                <HammerIcon />
                In Progress
              </Link>

              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-gray-200"
                href="/dashboard/orders/readyForPickup"
              >
                <PackageIcon />
                Ready for Pickup
              </Link>

              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-gray-200"
                href="/dashboard/orders/completed"
              >
                <CheckIcon />
                Completed
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

function IconList(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      stroke-linejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}
