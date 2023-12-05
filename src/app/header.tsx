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
import { AvatarImage } from "@radix-ui/react-avatar";

export const Header = () => {
  const { session } = useSession();
  const isAdmin = session?.user.publicMetadata.isAdmin;
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
                Admin Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/submit-order"
                  className="text-lg hover:text-purple-400 hidden md:block"
                >
                  Place an Order
                </Link>
                <Link
                  href="/team"
                  className="text-lg hover:text-purple-400 hidden md:block"
                >
                  Meet Our Team
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="hidden md:block">
          {session ? (
            <div className="flex items-center gap-4">
              <div>
                {session.user.primaryEmailAddress?.emailAddress ?? "undefined"}
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src={session.user.imageUrl} />
                    <AvatarFallback className="bg-purple-300 text-black">
                      CN
                    </AvatarFallback>
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
            </div>
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
