# Hashnode Blog Starter Kit
Starter Kit built with Hashnode Public APIs. Use Hashnode's [world class editor](https://hashnode.com/neptune) to author content and collaborate. Use our starter kit to customize the front end.

## How to deploy

### Step 1

- Fork this repo
- Import the repo on Vercel
- It's a monorepo. So, choose the following folder as Root Directory while importing on Vercel: `packages/blog-starter-kit/themes/enterprise`
  ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1695083263935/T5bByLxZT.png?auto=format)
- Make sure to choose `Next.js` as framework preset (just above Root Directory setting)
- Set the following env vars 

```
NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT=https://gql.hashnode.com
NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST=engineering.hashnode.com -> Change this to your Hashnode blog URL i.e. embedchain.hashnode.dev
NEXT_PUBLIC_BASE_URL=dev.hashnode.com/engineering -> This could be embedchain.ai/blog
NEXT_PUBLIC_MODE=production
```
Once this is deployed, just visit Vercel's auto generated domain to ensure it loads fine. Initially you won't see any posts. But you can always point `NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST` to a different domain such as `engineering.hashnode.com` to visualize.

### Step 2

Next, go to your main Vercel project that hosts your main site `embedchain.ai` and add the following rewrite to `next.config.js`:

```
async rewrites() {
    return [
      {
        source: "/blog/:path*",
        destination: "https://starter-kit-rose-seven.vercel.app/:path*", -> Replace https://starter-kit-rose-seven.vercel.app with your own Vercel deployment URL from step 1
      },
    ];
  },
```

You should be able to access your blog at https://embedchain.ai/blog.

## Running Locally

- cd `packages/blog-starter-kit/themes/enterprise`
- Copy `.env.example` to `.env.local`
- `pnpm install`
- `pnpm dev`

Visit http://localhost:3000!
