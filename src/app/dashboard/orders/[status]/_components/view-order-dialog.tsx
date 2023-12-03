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
            <div className="border p-4 rounded">
              <h3 className="text-xl">Item Type</h3>
              <span className="text-lg text-white">{order.itemType}</span>
            </div>

            <div className="border p-4 rounded">
              <h3 className="text-xl">Material Type</h3>
              <span className="text-lg text-white">{order.materialType}</span>
            </div>
          </div>

          <h3>Upgrades</h3>
          <div className="border p-4 rounded">
            <ul className="list-disc flex flex-col gap-2">
              {order.upgrades.lightweight && (
                <li className="flex gap-2 items-center">
                  <CheckCircle className="text-green-400" /> Light Weight
                </li>
              )}
              {order.upgrades.magicResistant && (
                <li className="flex gap-2 items-center">
                  <CheckCircle className="text-green-400" /> Magic Resistant
                </li>
              )}
              {order.upgrades.reinforced && (
                <li className="flex gap-2 items-center">
                  <CheckCircle className="text-green-400" /> Reinforced
                </li>
              )}
              {order.upgrades.sharpEdges && (
                <li className="flex gap-2 items-center">
                  <CheckCircle className="text-green-400" /> Extra Sharp Edges
                </li>
              )}
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
