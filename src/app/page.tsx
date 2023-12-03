"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 text-white bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="relative">
                <Image
                  src="/anvil.jpeg"
                  width="300"
                  height="300"
                  alt="image of an anvil"
                  className="relative rounded-xl self-center z-10"
                />
                <div className="z-0 absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl top-6" />
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Welcome to <br />
                The Obsidian Forge
              </h1>

              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We specialize in custom blacksmithing projects.
              </p>

              <Button variant="default" asChild>
                <Link href="/submit-order">View our Services</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="bg-gray-900 w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-white text-3xl font-bold tracking-tighter sm:text-4xl/snug">
              Our latest work hot off the anvil
            </h2>
            <div className="grid gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card>
                <img
                  alt="Custom Build 1"
                  className="object-cover rounded-t"
                  height="200"
                  src="/man.jpeg"
                  width="400"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Chainmail Armor</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Tested against goblin archers!
                  </p>
                </div>
              </Card>
              <Card>
                <img
                  alt="Custom Build 2"
                  className="object-cover rounded-t"
                  height="200"
                  src="/sword.jpeg"
                  width="400"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Broad Sword</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Able to slice through orcs with ease
                  </p>
                </div>
              </Card>
              <Card>
                <img
                  alt="Custom Build 3"
                  className="object-cover rounded-t"
                  height="200"
                  src="/helmet.jpeg"
                  width="400"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Full Helm</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Designed specifically for better field of vision
                  </p>
                </div>
              </Card>
              <Card>
                <img
                  alt="Custom Build 4"
                  className="object-cover rounded-t"
                  height="200"
                  src="/bow.jpeg"
                  width="400"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Long Bow</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Able to shoot over 300 yards with ease
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-gray-800 w-full py-12 md:py-24 lg:py-32 text-white">
          <div className="max-w-screen-md mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl/tight">
              Contact Us
            </h2>
            <form className="grid gap-6 mt-6 sm:grid-cols-2">
              <div>
                <Label>Name</Label>
                <Input placeholder="Your Name" type="text" />
              </div>

              <div>
                <Label>Email</Label>
                <Input placeholder="Your Email" type="email" />
              </div>

              <div className="w-full col-span-2">
                <Label>Message</Label>
                <Textarea className="h-36" placeholder="Your Message" />
              </div>

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
