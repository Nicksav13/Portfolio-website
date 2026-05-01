import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "sa1se3ik",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  },
});
