"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { api } from "../../../convex/_generated/api";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";

export default function CustomOrderPage() {
  const createOrderMutation = useMutation(api.orders.createOrder);
  const [selectedItemType, setItemType] = useState("");
  const [materialType, setMaterialType] = useState("");
  const [upgrades, setUpgrades] = useState({
    sharpEdges: false,
    lightweight: false,
    reinforced: false,
    magicResistant: false,
  });
  const router = useRouter();

  function ItemTypeCard({
    itemType,
    icon,
  }: {
    itemType: string;
    icon: ReactNode;
  }) {
    return (
      <Card
        className={cn("p-4", {
          "border-2 border-red-400 bg-gray-100": itemType === selectedItemType,
        })}
      >
        <div className="flex flex-col items-center">
          {icon}
          <h2 className="text-xl font-bold mb-1">{itemType}</h2>
          <Button onClick={() => setItemType(itemType)} variant="outline">
            Select
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <section className="container mx-auto px-4 py-8 text-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Custom Weapon and Armor Creation</h1>
        <p className="text-xl text-gray-500">Create your unique combat gear</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <ItemTypeCard
          icon={<IconSword className="w-16 h-16 mb-3" />}
          itemType="sword"
        />
        <ItemTypeCard
          icon={<IconBow className="w-16 h-16 mb-3" />}
          itemType="bow"
        />
        <ItemTypeCard
          icon={<IconShield className="w-16 h-16 mb-3" />}
          itemType="shield"
        />
        <ItemTypeCard
          icon={<IconAxe className="w-16 h-16 mb-3" />}
          itemType="axe"
        />
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Select Material Type</h2>
        <Select
          onValueChange={(value) => {
            setMaterialType(value);
          }}
          value={materialType}
        >
          <SelectTrigger className="text-black w-full">
            <SelectValue placeholder="Select a material" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="iron">Iron</SelectItem>
            <SelectItem value="steel">Steel</SelectItem>
            <SelectItem value="mithril">Mithril</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Upgrade Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Label className="flex items-center gap-2 font-normal">
            <Checkbox
              id="sharpEdge"
              checked={upgrades.sharpEdges === true}
              onCheckedChange={(isChecked) =>
                setUpgrades({
                  ...upgrades,
                  sharpEdges: isChecked === true,
                })
              }
            />
            Sharp Edge
          </Label>
          <Label className="flex items-center gap-2 font-normal">
            <Checkbox
              checked={upgrades.reinforced === true}
              onCheckedChange={(isChecked) =>
                setUpgrades({
                  ...upgrades,
                  reinforced: isChecked === true,
                })
              }
              id="reinforced"
            />
            Reinforced
          </Label>
          <Label className="flex items-center gap-2 font-normal">
            <Checkbox
              checked={upgrades.lightweight === true}
              onCheckedChange={(isChecked) =>
                setUpgrades({
                  ...upgrades,
                  lightweight: isChecked === true,
                })
              }
              id="lightweight"
            />
            Lightweight
          </Label>
          <Label className="flex items-center gap-2 font-normal">
            <Checkbox
              checked={upgrades.magicResistant === true}
              onCheckedChange={(isChecked) =>
                setUpgrades({
                  ...upgrades,
                  magicResistant: isChecked === true,
                })
              }
              id="magicResistant"
            />
            Magic Resistant
          </Label>
        </div>
      </div>
      <div className="mt-12 text-center">
        <Button
          onClick={() =>
            createOrderMutation({
              itemType: selectedItemType,
              materialType,
              upgrades,
            }).then((response) => {
              router.push("/success");
            })
          }
          variant="outline"
          className="px-10 py-2 text-black"
        >
          Submit Order
        </Button>
      </div>
    </section>
  );
}

function IconShield(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      stroke-linejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}

function IconSword(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      stroke-linejoin="round"
    >
      <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
      <line x1="13" x2="19" y1="19" y2="13" />
      <line x1="16" x2="20" y1="16" y2="20" />
      <line x1="19" x2="21" y1="21" y2="19" />
    </svg>
  );
}

function IconAxe(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      stroke-linejoin="round"
    >
      <path d="m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9" />
      <path d="M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z" />
    </svg>
  );
}

function IconBow(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}
