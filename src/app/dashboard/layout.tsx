"use client";

import { useQuery } from "convex/react";
import { CheckIcon, HammerIcon, PackageIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { api } from "../../../convex/_generated/api";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const repairCounts = useQuery(api.repairs.getRepairCounts);
  const orderCounts = useQuery(api.orders.getOrderCounts);
  const pathname = usePathname();

  function SideNavLink({
    text,
    icon,
    count = 0,
    path,
  }: {
    count?: number;
    icon: ReactNode;
    text: string;
    path: string;
  }) {
    return (
      <Link
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-purple-400",
          {
            "text-purple-500": pathname === path,
          }
        )}
        href={path}
      >
        {icon}
        {text} ({count})
      </Link>
    );
  }

  return (
    <div
      key="1"
      className="grid h-screen min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]"
    >
      <div className="hidden border-r wall lg:block">
        <div className="flex h-full max-h-screen flex-col gap-8">
          <div className="flex-1 overflow-auto py-8">
            <div className="text-xl ml-4 mb-2">Repairs</div>
            <nav className="grid gap-2 items-start px-4 text-md font-medium">
              <SideNavLink
                count={repairCounts?.new}
                icon={<StarIcon />}
                path="/dashboard/repairs/new"
                text="New"
              />

              <SideNavLink
                count={repairCounts?.inProgress}
                icon={<HammerIcon />}
                path="/dashboard/repairs/inProgress"
                text="In Progress"
              />

              <SideNavLink
                count={repairCounts?.readyForPickup}
                icon={<PackageIcon />}
                path="/dashboard/repairs/readyForPickup"
                text="Ready for Pickup"
              />

              <SideNavLink
                count={repairCounts?.completed}
                icon={<CheckIcon />}
                path="/dashboard/repairs/completed"
                text="Completed"
              />
            </nav>

            <div className="text-xl ml-4 mb-2 mt-8">Orders</div>
            <nav className="grid gap-2 items-start px-4 text-md font-medium">
              <SideNavLink
                count={orderCounts?.new}
                icon={<StarIcon />}
                path="/dashboard/orders/new"
                text="New"
              />

              <SideNavLink
                count={orderCounts?.inProgress}
                icon={<HammerIcon />}
                path="/dashboard/orders/inProgress"
                text="In Progress"
              />

              <SideNavLink
                count={orderCounts?.readyForPickup}
                icon={<PackageIcon />}
                path="/dashboard/orders/readyForPickup"
                text="Ready for Pickup"
              />

              <SideNavLink
                count={orderCounts?.completed}
                icon={<CheckIcon />}
                path="/dashboard/orders/completed"
                text="Completed"
              />
            </nav>
          </div>
        </div>
      </div>
      <div className="oldwall flex flex-col">
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
