"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 text-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Welcome to Blacksmith Inc
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We specialize in custom blacksmithing projects.
                </p>
              </div>
              <Button asChild>
                <Link href="/submit-order">Explore</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="bg-gray-900 w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-white text-3xl font-bold tracking-tighter sm:text-4xl/tight">
              Some Latest Builds
            </h2>
            <div className="grid gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card>
                <img
                  alt="Custom Build 1"
                  className="object-cover rounded-t"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Custom Build 1</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A brief description of the custom build.
                  </p>
                </div>
              </Card>
              <Card>
                <img
                  alt="Custom Build 2"
                  className="object-cover rounded-t"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Custom Build 2</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A brief description of the custom build.
                  </p>
                </div>
              </Card>
              <Card>
                <img
                  alt="Custom Build 3"
                  className="object-cover rounded-t"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Custom Build 3</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A brief description of the custom build.
                  </p>
                </div>
              </Card>
              <Card>
                <img
                  alt="Custom Build 4"
                  className="object-cover rounded-t"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Custom Build 4</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A brief description of the custom build.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl/tight">
              Contact Us
            </h2>
            <form className="grid gap-6 mt-6 sm:grid-cols-2">
              <Input placeholder="Your Name" type="text" />
              <Input placeholder="Your Email" type="email" />
              <textarea
                className="h-36 sm:col-span-2"
                placeholder="Your Message"
              />
              <Button className="sm:col-span-2" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
