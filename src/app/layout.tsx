"use client";

import "src/styles/globals.css";
import NextTopLoader from "nextjs-toploader";
import { useState, type ReactNode } from "react";
import { ConvexReactClient, useConvexAuth, useQuery } from "convex/react";
import {
  ClerkProvider,
  SignInButton,
  SignOutButton,
  useAuth,
} from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const Header = () => {
  const session = useConvexAuth();
  // const info = useQuery(api.participants.getRegistrationInfo);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-gray-900 py-2 px-8 flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <Link href="/" className="flex items-center">
            <Image
              height="90"
              width="90"
              src="/obsidian.png"
              alt="The Obsidian Forge Logo"
            />
            <div className="text-2xl">The Obsidian Forge</div>
          </Link>
        </div>

        <div className="text-white gap-4 lg:gap-8 text-xs hidden md:flex">
          {/* <Link href="/winners" className="hover:text-gray-200">
            ORDERS
          </Link> */}
        </div>

        {session.isAuthenticated && (
          <Link
            href="/submit-order"
            className="hover:text-gray-200 text-xs hidden md:block"
          >
            <Button>View our Services</Button>
          </Link>
        )}

        <div className="hidden md:block">
          {session.isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  {/* <AvatarImage src={session?.image} /> */}
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/profile">Edit Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <SignOutButton>Sign Out</SignOutButton>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <SignInButton mode="modal">
              <button className="btn bg-gray-100 text-black py-2 px-4 hover:bg-gray-200 rounded">
                Sign In
              </button>
            </SignInButton>
          )}
        </div>

        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <GiHamburgerMenu className="text-white md:hidden text-3xl" />
        </button>
      </header>

      {isMobileMenuOpen && (
        <div
          onClick={() => {
            setIsMobileMenuOpen(false);
          }}
          className="text-white flex flex-col bg-gray-900 justify-center gap-4 pt-4 items-center pb-8"
        >
          <Link href="/register" className="hover:text-gray-200">
            REGISTER
          </Link>
          <Link href="/participants" className="hover:text-gray-200">
            PARTICIPANTS
          </Link>
          <Link href="/resources" className="hover:text-gray-200">
            RESOURCES
          </Link>
          <Link href="/submissions" className="hover:text-gray-200">
            SUBMISSIONS
          </Link>

          {session.isAuthenticated ? (
            <>
              <Link href="/profile" className="hover:text-gray-200">
                PROFILE
              </Link>
              <Link href="/submit" className="hover:text-gray-200 text-xs">
                <button className="btn-primary">SUBMIT</button>
              </Link>
              <SignOutButton>
                <button className="btn bg-gray-100 text-black py-2 px-4 hover:bg-gray-200 rounded">
                  Sign Out
                </button>
              </SignOutButton>
            </>
          ) : (
            <SignInButton mode="modal">
              <button className="btn bg-gray-100 text-black py-2 px-4 hover:bg-gray-200 rounded">
                Sign In
              </button>
            </SignInButton>
          )}
        </div>
      )}
    </>
  );
};

const Footer = () => {
  return (
    <footer className="text-white flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © The Obsidian Forge Inc. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
  );
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-gray-800">
      <body className="radial">
        <NextTopLoader showSpinner={false} color="#2264AB" />
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
        >
          <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
            <Header />
            {children}
            <Footer />
          </ConvexProviderWithClerk>
        </ClerkProvider>
      </body>
    </html>
  );
}
