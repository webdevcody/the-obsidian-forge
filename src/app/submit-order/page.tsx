import Link from "next/link";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function SubmitOrderPage() {
  return (
    <main className="flex-1 p-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Custom Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/custom-order.jpeg"
              alt="image of scroll and ink pen"
              width="500"
              height="500"
            />
            <p className="text-center text-gray-900 dark:text-gray-100 text-lg mt-4">
              Request a new handcrafted item.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild className="w-full">
              <Link href="/custom-order">Create Custom Order</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <CardTitle>Request Repair Service</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/repair.jpeg"
              alt="image of scroll and ink pen"
              width="500"
              height="500"
            />
            <p className="text-center text-gray-900 dark:text-gray-100 text-lg mt-4">
              Request a repair service
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button disabled asChild className="w-full">
              <Link href="/submit-repair">Request Repair</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <CardTitle>Purchase Existing Items</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/buy.jpeg"
              alt="a blacksmith shop to buy items"
              width="500"
              height="500"
            />
            <p className="text-center text-gray-900 dark:text-gray-100 text-lg mt-4">
              Browse our collection of pre-made items.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              disabled
              asChild
              className="w-full pointer-events-none bg-gray-400"
            >
              <Link href="/browse">Browse Items (Coming Soon)</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
