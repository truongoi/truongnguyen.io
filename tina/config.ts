import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: '8b47d71b-dfb6-4e02-8899-1dc629f588a7', // Get this from tina.io
  token: '404f560a1e80a407493cbedcbca6bf42cddb13b4', // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "../images/posts/",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "_posts",
        defaultItem: () => {
          return {
            // When a new post is created the title field will be set to "New post"
            title: 'New Post',
            description: 'A post from truongnguyen.io blog',
            featured_image: '/images/posts/default.jpg',
            date: new Date().toJSON(),
            published: true,
            comment: true
          }
        },
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: true,
            // Example of using a custom slugify function
            slugify: values => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              return `${values?.date.split('T')[0] ||
                new Date().toISOString().split('T')[0]}-${values?.title?.toLowerCase().replace(/ /g, '-')}`
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          { label: "Description", name: "description", type: "string" },
          { label: "Featured Image", name: "featured_image", type: "image" },
          { label: "Tags", name: "tags", type: "string", list: true },
          { label: "Link", name: "permalink", type: "string", required: false },
          { label: "Publish Date", name: "date", type: "datetime" },
          { label: "Publish?", name: "published", type: "boolean", required: false },
          {label: "Enable comments?", name: "comments", type: "boolean"},
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "page",
        label: "Pages",
        path: "_pages",
        fields: [
          {
            label: "Title",
            name: "title",
            type: "string",
            isTitle: true,
            required: true,
          },
          { label: "Description", name: "description", type: "string" },
          { label: "Featured Image", name: "featured_image", type: "image" },
          { label: "Tags", name: "tags", type: "string", list: true },
          { label: "Link", name: "permalink", type: "string", required: false },
          { label: "Publish Date", name: "date", type: "datetime" },
          { label: "Publish?", name: "published", type: "boolean", required: false },
          {label: "Enable comments?", name: "comments", type: "boolean"},
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ]
      }
    ],
  },
  search: {
    tina: {
      indexerToken: 'a6470e22a5966a3ab202f68581c7ba4a89d4f84a',
      stopwordLanguages: ['eng']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
});
