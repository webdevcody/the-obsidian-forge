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

export default function SubmitOrderPage() {
  return (
    <main className="oldwall flex-1 py-24 min-h-screen">
      <h1 className="text-5xl font-bold text-center mb-24">Our Services</h1>

      <div className="max-w-screen-lg mx-auto grid gap-8 md:grid-cols-3">
        <Card className="bg-gray-800">
          <CardHeader className="text-center">
            <CardTitle>Custom Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/custom-order.jpeg"
              alt="image of scroll and ink pen"
              width="500"
              height="500"
              className="rounded-lg"
            />
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild className="w-full">
              <Link href="/custom-order">Create Custom Order</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-gray-800">
          <CardHeader className="text-center">
            <CardTitle>Request Repair Service</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/repair.jpeg"
              alt="image of scroll and ink pen"
              width="500"
              height="500"
              className="rounded-lg"
            />
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button disabled asChild className="w-full">
              <Link href="/submit-repair">Request Repair</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-gray-800">
          <CardHeader className="text-center">
            <CardTitle>Purchase Existing Items</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/buy.jpeg"
              alt="a blacksmith shop to buy items"
              width="500"
              height="500"
              className="rounded-lg"
            />
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
