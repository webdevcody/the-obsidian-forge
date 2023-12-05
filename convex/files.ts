import { mutation } from "./_generated/server";

export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) {
      return {
        error: "invalid user",
      };
    }

    return await ctx.storage.generateUploadUrl();
  },
});
