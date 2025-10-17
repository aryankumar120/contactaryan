import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of job I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my internship search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s what I’m looking for 👇

- 📅 **Availability**: Open to immediate opportunities
- 🌍 **Location**: Preferably **Pune, Hydeabad, Bangalore, Noida, Remote ** or anywhere in the **India or Abroad**
- 🧑‍💻 **Focus**: Data Enginnering, AI/ML, Cloud
- 🛠️ **Stack**: Python, React, SQL, Big Data, AWS, Docker, NLP, Data Warehouse, Pipelines, Power BI, Tableau
- ✅ **What I bring**: Experience in building data-driven dashboards, building data pipelines, and developing end-to-end analytics projects. Proven ability to translate raw data into actionable business insights.
- 🔥 I move fast, learn faster, whatever I'll do I'll do the best of my work and I’m HUNGRYYYYY for big challenges - it makes me learn and grow.

📬 **Contact me** via:
- Email: aryannkr120@gmail.com
- LinkedIn: [linkedin.com/in/aryan-kumar29](- LinkedIn: https://www.linkedin.com/in/aryan-kumar29/)
- GitHub: [github.com/aryankumar120](https://github.com/aryankumar120))

Let's build cool products together ✌️
    `;
  },
});
