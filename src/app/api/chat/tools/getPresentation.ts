import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Aryan Kumar. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "Here is a little bit about me, you can see it above!",
        //"I’m Aryan Kumar, a curious mind driven by the blend of technology, creativity, and exploration. I’m passionate about understanding how data and AI shape the world around us and love turning ideas into meaningful insights and stories. Beyond the tech world, I enjoy traveling, exploring new places, and creating content that inspires and connects people.",
    };
  },
});