
import { tool } from "ai";
import { z } from "zod";


export const getSports = tool({
  description:
    "This tool will show some photos of Aryan enjoying life ride!",
  parameters: z.object({}),
  execute: async () => {
    return "Here my some pictures of me enjoying!";
  },
});