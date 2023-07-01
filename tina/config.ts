import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: '9d60d60c-4d5a-4528-8107-61e4179e4a92', // Get this from tina.io
  token: '33f8b14e96efd99cadb366b9ead1a083518f011b', // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "/",
  },
  media: {
    tina: {
      publicFolder: "/",
      mediaRoot: "/images/posts",
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
            featured_image: '/images/og-image.jpg',
            date: new Date().toJSON(),
            published: true,
            comment: true
          }
        },
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: false,
            // Example of using a custom slugify function
            slugify: values => {
              const date = new Date();
              const day = date.getDate();
              const month = date.getMonth() + 1;
              const year = date.getFullYear();
              let currentDate = `${year}-${month}-${day}`;
              return `${currentDate}-${values?.title?.toLowerCase().replace(/ /g, '-')}`
            }
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
        defaultItem: () => {
          return {
            // When a new page is created the title field will be set to "New page"
            layout: 'page',
            title: 'New Page',
            description: 'A page from truongnguyen.io blog',
            featured_image: '/images/og-image.jpg',
            date: new Date().toJSON(),
            published: true,
            comment: true
          }
        },
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: false,
            // Example of using a custom slugify function
            slugify: values => {
              const date = new Date();
              const day = date.getDate();
              const month = date.getMonth() + 1;
              const year = date.getFullYear();
              let currentDate = `${year}-${month}-${day}`;
              return `${currentDate}-${values?.title?.toLowerCase().replace(/ /g, '-')}`
            }
          },
        },
        fields: [
          {
            label: "Title",
            name: "title",
            type: "string",
            isTitle: true,
            required: true,
          },
          { label: "Layout type ('default' or 'page')", name: "layout", type: "string" },
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
      indexerToken: '53dc2ad3a5fea653a5dcf6e5aaa9d08d2d26e56c',
      stopwordLanguages: ['eng']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
});
