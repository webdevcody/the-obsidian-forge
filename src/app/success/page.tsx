"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <div className="oldwall flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-4">
      <IconCheck className="h-24 w-24 text-green-500 dark:text-green-300" />
      <h1 className="mt-4 text-2xl font-semibold text-white">
        Order Created Successfully
      </h1>
      <p className="mt-2 text-white text-center mb-8">
        Your order has been created, we'll email you when it's ready
      </p>
      <Button asChild>
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
}

function IconCheck(props: any) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
