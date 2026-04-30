import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";
import { projectId, dataset, apiVersion } from "./src/sanity/env";

export default defineConfig({
  name: "hstudio",
  title: "H.Studio CMS",
  projectId,
  dataset,
  apiVersion,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site Configuration")
              .id("siteConfig")
              .child(
                S.document()
                  .schemaType("siteConfig")
                  .documentId("siteConfig")
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== "siteConfig"
            ),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
