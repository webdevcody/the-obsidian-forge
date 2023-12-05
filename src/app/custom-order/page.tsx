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
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { cn } from "@/lib/utils";
import { api } from "../../../convex/_generated/api";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const allUpgrades = [
  {
    name: "Flaming",
    description: "Adds fire damage to attacks.",
  },
  {
    name: "Frost",
    description: "Adds cold damage to attacks and may slow enemies.",
  },
  {
    name: "Shock",
    description: "Adds lightning damage to attacks.",
  },
  {
    name: "Keen",
    description: "Increases the weapon's critical hit range.",
  },
  {
    name: "Masterwork Quality",
    description:
      "Provides a +1 bonus to attack rolls. Grants a +1 bonus to damage rolls.",
  },
  {
    name: "Vorpal Edge",
    description:
      "Gives the weapon a chance to instantly decapitate a creature on a critical hit.",
  },
  {
    name: "Defender",
    description: "Grants a bonus to the wielder's Armor Class.",
  },
  {
    name: "Vicious",
    description:
      "Adds extra damage to attacks, but also inflicts some damage on the wielder.",
  },
  {
    name: "Serrated Edge",
    description: "Deals additional damage to lightly armored foes.",
  },
  {
    name: "Thunderous Blows",
    description:
      "Causes a loud boom or shockwave upon impact, potentially stunning or deafening enemies.",
  },
  {
    name: "Mystic Runes",
    description:
      "Allows the weapon to bypass certain resistances or immunities.",
  },
  {
    name: "Venomous Coating",
    description: "Applies poison damage to attacks.",
  },
  {
    name: "Gleaming",
    description:
      "Illuminates the area around the weapon, providing light in darkness.",
  },
  {
    name: "Returning",
    description: "Allows a thrown weapon to return to the wielder's hand.",
  },
  {
    name: "Soulbound",
    description:
      "Binds the weapon to the character, preventing others from using it effectively.",
  },
];

const materialTypes = [
  {
    name: "Iron",
    description:
      "A strong and durable metal commonly used for weapons and armor.",
  },
  {
    name: "Steel",
    description:
      "An alloy of iron and carbon, known for its strength and versatility.",
  },
  {
    name: "Mithril",
    description:
      "A lightweight and durable metal, often used for magical or elven armor.",
  },
  {
    name: "Adamantine",
    description:
      "A rare and extremely hard metal, prized for crafting powerful weapons and armor.",
  },
  {
    name: "Dragonbone",
    description:
      "Bones from dragons, known for their strength and often used in crafting weapons.",
  },
  {
    name: "Obsidian",
    description:
      "A volcanic glass with sharp edges, used for crafting blades and ritualistic items.",
  },
];

const itemTypes = [
  "Longsword",
  "Shortbow",
  "Warhammer",
  "Dagger",
  "Great Axe",
  "Shortsword",
  "Crossbow",
  "Staff",
];

function ItemTypeCard({
  itemType,
  selectedItemType,
  setItemType,
}: {
  itemType: string;
  selectedItemType: string;
  setItemType: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Card
      className={cn("p-4 bg-gray-800", {
        "border-2 border-red-400 bg-gray-900 glow":
          itemType === selectedItemType,
      })}
    >
      <div className="flex flex-col items-center">
        <Image
          className="rounded-xl"
          src={`/items/${itemType}.jpeg`}
          width="100"
          height="100"
          alt={itemType}
        />
        <h2 className="text-xl font-bold mb-4">{itemType}</h2>
        <Button onClick={() => setItemType(itemType)} variant="default">
          Select
        </Button>
      </div>
    </Card>
  );
}
export default function CustomOrderPage() {
  const createOrderMutation = useMutation(api.orders.createOrder);
  const [selectedItemType, setItemType] = useState("");
  const [materialType, setMaterialType] = useState("");
  const [upgrades, setUpgrades] = useState<Record<string, boolean>>(
    allUpgrades.reduce((acc, cur) => ({ ...acc, [cur.name]: false }), {})
  );
  const router = useRouter();

  return (
    <section className="container mx-auto px-4 py-8 text-white max-w-screen-lg">
      <div className="text-center mb-8 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Create a Custom Order</h1>
        <p className="text-xl text-gray-500">Select your item type</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {itemTypes.map((itemType) => (
          <ItemTypeCard
            itemType={itemType}
            selectedItemType={selectedItemType}
            setItemType={setItemType}
          />
        ))}
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Select Material Type</h2>
        <Select
          onValueChange={(value) => {
            setMaterialType(value);
          }}
          value={materialType}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a material" />
          </SelectTrigger>
          <SelectContent>
            {materialTypes.map((type) => (
              <SelectItem value={type.name}>{type.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Upgrade Packages</h2>
        <div className="grid grid-cols-2 gap-8">
          {allUpgrades.map((upgrade) => {
            return (
              <Label className="flex items-center gap-2 font-normal text-md">
                <Checkbox
                  checked={upgrades[upgrade.name] === true}
                  onCheckedChange={(isChecked) =>
                    setUpgrades({
                      ...upgrades,
                      [upgrade.name]: isChecked === true,
                    })
                  }
                />
                {upgrade.name} ({upgrade.description})
              </Label>
            );
          })}
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
          className="px-10 py-2 text-black w-full"
        >
          Submit Order
        </Button>
      </div>
    </section>
  );
}
