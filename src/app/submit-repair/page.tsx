"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { UploadButton } from "@xixixao/uploadstuff/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function RepairsPage() {
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const createRepair = useMutation(api.repairs.createRepair);
  const [imageId, setImageId] = useState("");
  const [description, setDescription] = useState("");
  const saveAfterUpload = async (uploaded: any[]) => {
    setImageId(uploaded[0].response.storageId);
  };
  const router = useRouter();

  return (
    <div className="space-y-8 max-w-screen-md h-[100vh] mx-auto mt-12">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Submit a Repair Request</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Please provide the necessary details about the repair needed.
        </p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="repair-image">Upload an Image</Label>
            <UploadButton
              uploadUrl={() => generateUploadUrl().then((url) => url as string)}
              fileTypes={["image/*"]}
              onUploadComplete={saveAfterUpload}
              onUploadError={(error: unknown) => {
                alert(`ERROR! ${error}`);
              }}
            />
            {imageId && (
              <Image
                src={`${process.env.NEXT_PUBLIC_CONVEX_URL}/api/storage/${imageId}`}
                width="200"
                height="200"
                alt="your image"
              />
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              className="min-h-[100px]"
              id="description"
              placeholder="Describe the issue"
              onChange={(event) => setDescription(event.currentTarget.value)}
            />
          </div>
        </div>
        <Button
          onClick={() => {
            createRepair({
              description,
              imageId,
            }).then(() => {
              router.push("/success");
            });
          }}
          type="submit"
        >
          Submit Repair Request
        </Button>
      </div>
    </div>
  );
}
