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
import { Doc } from "../../../../../../convex/_generated/dataModel";
import { useState } from "react";
import Image from "next/image";

export function ViewRepairDialog({ repair }: { repair: Doc<"repairs"> }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">{repair.repairId.substring(0, 6)}...</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{repair.repairId}</DialogTitle>
          <DialogDescription>Repair for {repair.user.name}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="border p-4 rounded">
            <h3 className="text-xl">Issue</h3>
            <span className="text-lg text-white">{repair.description}</span>
          </div>

          <h3>Image</h3>
          <div className="border p-4 rounded">
            <Image
              src={`${process.env.NEXT_PUBLIC_CONVEX_URL}/api/storage/${repair.imageId}`}
              width="200"
              height="200"
              alt="your image"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
