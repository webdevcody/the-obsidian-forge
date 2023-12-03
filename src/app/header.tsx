import { useConvexAuth } from "convex/react";
import { SignInButton, SignOutButton, useSession } from "@clerk/clerk-react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export const Header = () => {
  const session = useConvexAuth();
  const isAdmin = !!useSession().session?.user.publicMetadata.isAdmin;
  const router = useRouter();

  return (
    <>
      <header className="bg-gray-800 border-b py-2 px-8 flex justify-between items-center w-full">
        <div className="text-white text-lg font-semibold flex gap-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              height="50"
              width="50"
              src="/obsidian.png"
              alt="The Obsidian Forge Logo"
            />
            <div className="text-2xl">The Obsidian Forge</div>
          </Link>

          <div className="flex gap-8 items-center">
            {isAdmin ? (
              <Link
                href="/dashboard/orders/new"
                className="text-lg hover:text-purple-400 hidden md:block"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/submit-order"
                className="text-lg hover:text-purple-400 hidden md:block"
              >
                Place an Order
              </Link>
            )}
          </div>
        </div>

        <div className="hidden md:block">
          {session.isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <SignOutButton
                    signOutCallback={() => {
                      router.push("/");
                    }}
                  >
                    Sign Out
                  </SignOutButton>
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
      </header>
    </>
  );
};
