import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { v4 as uuidv4 } from "uuid";

export const createRepair = mutation({
  args: {
    description: v.string(),
    imageId: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) {
      return {
        error: "invalid user",
      };
    }

    const repair = await ctx.db.insert("repairs", {
      user: user,
      repairId: uuidv4(),
      description: args.description,
      status: "new",
      userId: user.subject,
      imageId: args.imageId,
    });

    return repair;
  },
});

export const setRepairStatus = mutation({
  args: {
    repairId: v.id("repairs"),
    status: v.union(
      v.literal("new"),
      v.literal("inProgress"),
      v.literal("readyForPickup"),
      v.literal("completed")
    ),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) {
      return {
        error: "invalid user",
      };
    }

    const repair = await ctx.db.patch(args.repairId, {
      status: args.status,
    });

    return repair;
  },
});

export const getRepairs = query({
  args: {
    status: v.union(
      v.literal("new"),
      v.literal("inProgress"),
      v.literal("readyForPickup"),
      v.literal("completed")
    ),
  },
  handler: async (ctx, args) => {
    return ctx.db
      .query("repairs")
      .withIndex("index_status", (q) => q.eq("status", args.status))
      .collect();
  },
});
