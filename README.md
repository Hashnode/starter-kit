<p align="center">
  <a href="https://hashnode.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png?auto=compress">
      <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png?auto=compress" height="128">
    </picture>
    <h1 align="center">Hashnode</h1>
  </a>
</p>
<p align="center">
  <a href="https://hashnode.com/headless">
    <img src="https://img.shields.io/badge/MADE%20BY%20Hashnode-000000.svg?style=for-the-badge&logo=Hashnode&labelColor=000">
  </a>
  <a href="https://hashnode.com">
    <img alt="" src="https://img.shields.io/badge/LICENSE%20%7C%20MIT-000.svg?style=for-the-badge">
  </a>
  <a href="https://discord.gg/hashnode">
    <img alt="" src="https://img.shields.io/badge/Join%20the%20community-black.svg?style=for-the-badge&logo=discord&labelColor=000000&logoWidth=20">
  </a>
</p>

# Hashnode Blog Starter Kit

Blog Starter Kit lets you instantly deploy a Next.js and Tailwind powered frontend for your Hashnode blog. It consumes [Hashnode's Public APIs](https://apidocs.hashnode.com), and gives you a fully customizable blog that can be deployed anywhere, including a subpath of a custom domain. Combined with [Hashnode's headless mode](https://hashnode.com/headless), it unlocks entirely new possibilities. You can now use Hashnode's [world class editor](https://hashnode.com/neptune) and dashboard to author content and collaborate. And use blog starter kit to customize the frontend to your liking.

## How to deploy

### Step 1

The recommended approach is depoying to Vercel. If you don't have an account already, sign up for a free plan.

- Fork this repo
- Create a new project on Vercel and connect this repo
- It's a monorepo. So, choose the either `packages/blog-starter-kit/themes/enterprise` or `packages/blog-starter-kit/themes/personal` as the root directory while importing on Vercel.
  ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1695083263935/T5bByLxZT.png?w=500&h=800&auto=format)
- Choose `Next.js` as framework preset (just above Root Directory setting).
- Set the following env vars

```
NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT=https://gql.hashnode.com
NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST=engineering.hashnode.com -> Change this to your Hashnode blog URL i.e. handle.hashnode.dev
NEXT_PUBLIC_BASE_URL=/blog -> This could be /blog if you are installing on subpath; otherwise remove this var
NEXT_PUBLIC_MODE=production
```

Once this is deployed, just visit Vercel's auto generated domain to ensure it loads fine. Initially you won't see any posts. But you can always point `NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST` to a different domain such as `engineering.hashnode.com` to visualize.

### Step 2 (subpath installation)

#### Vercel

If your main project is deployed on Vercel, add the following rewrite to `next.config.js`:

```
async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://starter-kit-rose-seven.vercel.app/blog", -> Replace https://starter-kit-rose-seven.vercel.app with your own Vercel deployment URL from step 1
      },
      {
        source: "/blog/:path*",
        destination: "https://starter-kit-rose-seven.vercel.app/blog/:path*", -> Replace https://starter-kit-rose-seven.vercel.app with your own Vercel deployment URL from step 1
      },
    ];
  },
```

Once you deploy your project, the subpath installation should work successfully.

#### Cloudflare

In case you are using Cloudflare in proxy mode (orange cloud on), you can deploy the following worker script and map it to `yourdomain.com/*`:

```
const subpath = '/blog'; // Replace with your subpath
const blogBaseUrl = 'https://blog-woad-six-17.vercel.app'; // Replace with your blog URL from step 1

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
  const url = new URL(request.url)

  if (url.pathname.startsWith(subpath)) {
    // Proxy blog requests
    return proxyBlog(request) 
  } else {
    // Passthrough everything else
    return fetch(request)
  }
}

/**
 * Proxy blog requests
 * @param {Request} request
 */
async function proxyBlog(request) {
  const path = new URL(request.url).pathname;
  return fetch(`${blogBaseUrl}${path}`, request)
}
```

Be sure to replace the values of `subpath` and `blogBaseUrl` in the above snippet. This way cloudflare will proxy all the requests starting with `youdomain.com/blog` to your headless blog, and other requests will hit your origin as usual.

If your main domain is hosted elsewhere, you need to involve engineers from your team to create above rewrites.

## Running Locally

- cd `packages/blog-starter-kit/themes/enterprise` or `packages/blog-starter-kit/themes/personal`
- Copy `.env.example` to `.env.local`
- `pnpm install`
- `pnpm dev`

Visit http://localhost:3000!
