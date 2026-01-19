import { query } from "./_generated/server";

export const listAllFiles = query({
  args: {},
  handler: async (ctx) => {
    // 1. Get all file metadata from the system table
    const files = await ctx.db.system.query("_storage").collect();
    
    // 2. Map through and generate URLs
    return Promise.all(
      files.map(async (file) => {
        const url = await ctx.storage.getUrl(file._id);
        return {
          _id: file._id,
          url: url,
          
        };
      })
    );
  },
});