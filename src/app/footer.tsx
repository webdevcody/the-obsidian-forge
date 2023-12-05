import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t text-white flex bg-gray-950 flex-col gap-2 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6">
      <div className="container mx-auto flex justify-between">
        <p className="text-md text-gray-500 dark:text-gray-400">
          © The Obsidian Forge Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-md hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-md hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
