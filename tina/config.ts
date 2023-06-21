import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "Master";

export default defineConfig({
  branch,
  clientId: '9d60d60c-4d5a-4528-8107-61e4179e4a92', // Get this from tina.io
  token: '33f8b14e96efd99cadb366b9ead1a083518f011b', // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "images/posts",
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
      indexerToken: '53dc2ad3a5fea653a5dcf6e5aaa9d08d2d26e56c',
      stopwordLanguages: ['eng']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
});
