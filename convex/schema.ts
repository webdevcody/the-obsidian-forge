import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  order: defineTable({
    userId: v.string(),
    orderId: v.string(),
    materialType: v.string(),
    itemType: v.string(),
    user: v.any(),
    upgrades: v.object({
      sharpEdges: v.boolean(),
      lightweight: v.boolean(),
      reinforced: v.boolean(),
      magicResistant: v.boolean(),
    }),
    status: v.union(
      v.literal("new"),
      v.literal("inProgress"),
      v.literal("readyForPickup"),
      v.literal("completed")
    ),
  }).index("index_status", ["status"]),
  repairs: defineTable({
    userId: v.string(),
    repairId: v.string(),
    user: v.any(),
    description: v.string(),
    imageId: v.string(),
    status: v.union(
      v.literal("new"),
      v.literal("inProgress"),
      v.literal("readyForPickup"),
      v.literal("completed")
    ),
  }).index("index_status", ["status"]),
});
