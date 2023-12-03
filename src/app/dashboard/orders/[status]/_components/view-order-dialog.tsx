"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Doc } from "../../../../../../convex/_generated/dataModel";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function ViewOrderDialog({ order }: { order: Doc<"order"> }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">{order.orderId.substring(0, 6)}...</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{order.orderId}</DialogTitle>
          <DialogDescription>Order for {order.user.name}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="border p-4 gap-1 rounded flex flex-col justify-center text-center">
              <h3 className="text-xl">Item Type</h3>
              <div className="text-lg text-purple-300">{order.itemType}</div>
              <Image
                className="rounded-xl self-center"
                src={`/items/${order.itemType}.jpeg`}
                width="100"
                height="100"
                alt={order.itemType}
              />
            </div>

            <div className="border p-4 rounded text-center">
              <h3 className="text-xl">Material Type</h3>
              <span className="text-lg text-purple-300">
                {order.materialType}
              </span>
            </div>
          </div>

          <div className="border p-4 rounded text-center">
            <h3 className="mb-4">Upgrades</h3>
            <ul className="list-disc grid grid-cols-2 gap-4 text-md">
              {Object.entries(order.upgrades)
                .filter((entry) => entry[1] === true)
                .map((entry) => (
                  <li className="flex gap-4 items-center">
                    <CheckCircle className="text-green-400" /> {entry[0]}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
