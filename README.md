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

# Live Demos

- [Personal theme](https://sandeep.dev/blog)
- [Enterprise theme](https://demo.hashnode.com/engineering)
- [Hashnode theme](https://saikrishna.dev/blog)

# Example company blogs built with Headless

- [MindsDB](https://mindsdb.com/blog)
- [Pangea Cloud](https://pangea.cloud/blog)
- [Outerbase](https://outerbase.com/blog)
- [Fern](https://blog.buildwithfern.com/)
- [Fix](https://fix.tt/blog)

## How to deploy

### Step 1

The recommended approach is deploying to Vercel. If you don't have an account already, you can sign up for a free plan.

- Fork this repo
- Create a new project on Vercel and connect this repo
- It's a monorepo, So choose either `packages/blog-starter-kit/themes/enterprise`, `packages/blog-starter-kit/themes/hashnode`, or `packages/blog-starter-kit/themes/personal` as the root directory while importing on Vercel.

  ![selecting the directory to deploy a monorepo](https://cdn.hashnode.com/res/hashnode/image/upload/v1698839884060/O8OoBML5v.PNG?auto=format)

- Choose `Next.js` as framework preset (just above Root Directory setting).
- Set the following environment variables

```
NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT=https://gql.hashnode.com
NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST=engineering.hashnode.com -> Change this to your Hashnode blog URL i.e. handle.hashnode.dev
NEXT_PUBLIC_BASE_URL=/blog -> This could be /blog if you are installing on subpath; otherwise remove this var
NEXT_PUBLIC_MODE=production
```

Once this is deployed, just visit Vercel's auto generated domain to ensure it loads fine. Initially you won't see any posts. But you can always point `NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST` to a different domain such as `engineering.hashnode.com` to visualize.

### Step 2 (optional subpath installation)

Follow the steps below if you would like to install your blog under a custom domain subpath. If not, you can directly map a custom domain to your project on Vercel and have a production-ready blog up and running.

#### Vercel

If your main project is deployed on Vercel, add the following rewrite to `next.config.js` file:

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

> Note: <br>
> - If you are updating your environment variables in Vercel, make sure to manually redeploy to see the changes.
> - Your main project refers to the project you'll have to have your blog subpath on; for example, if you'd like your blog subpath to be `https://portfolio.com/blog`, then your main project would be `https://portfolio.com`. This means that the rewrites function should be added to the codebase of the main project, not the starter kit codebase.

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

After the above step is done, follow these steps to add the worker route:
- Go to `Websites` then click on your website and select `Worker Routes` from the left pane. 
- Click on `Add route` and add `https://yourdomain/*` , then select the worker you just added above and click `Save`.
- Go to `https://yourdomain/yoursubpath` and now you should be able to see your blogs.

Make sure to replace the values of `subpath` and `blogBaseUrl` in the above code snippet. This way, Cloudflare will proxy all the requests starting with `yourdomain.com/blog` to your headless blog, and other requests will hit your origin as usual.

If your main domain is hosted elsewhere, you need to involve engineers from your team to create the above rewrites.

### Step 3

Now that you have deployed the starter kit on your own domain, you need to tell Hashnode not to generate a UI for your blog. You can do that by visiting your blog dashboard -> advanced tab. Scroll down and locate the section "use Hashnode as a headless CMS". Enable it and enter your blog base URL.

![enable headless mode](https://cdn.hashnode.com/res/hashnode/image/upload/v1697486863293/zMMctLjRZ.png?auto=format)

After enabling, enter your blog URL as shown below and save.

![blog base url](https://cdn.hashnode.com/res/hashnode/image/upload/v1697487035077/1sIyw_0v1.png?auto=format)

Congrats 🎉! Hashnode will now treat your blog as a headless blog and send readers directly to the origin.

## Running Locally

- cd into either `packages/blog-starter-kit/themes/enterprise`, or `packages/blog-starter-kit/themes/hashnode` or `packages/blog-starter-kit/themes/personal`
- Copy `.env.example` to `.env.local`
- `pnpm install`
- `pnpm dev`

Visit http://localhost:3000!

## APIs

If you prefer to build your frontend from scratch, you can use our public GraphQL APIs to do so:

- [Docs](https://apidocs.hashnode.com)
- [GraphQL Playground](https://gql.hashnode.com)

## Pricing

**For individual devs:** Hashnode's Headless CMS is free for individual bloggers! Grab our starter kit and start building your blog – no license is needed. 

**For teams and enterprises:** Access to headless mode, multiple team members, real-time collaboration, AI, and enterprise reliability. [Request access and get a quote.](https://forms.hashnode.com/headless-hashnode-teams) We will be in touch within the next 24hrs to get you onboarded.


## Demo Videos

[![Headless Hashnode Demo — With Blog Starter Kit (Deployed to Vercel)](https://cdn.hashnode.com/res/hashnode/image/upload/v1697541065189/5ct0eFWIu.png?auto=format&w=500)](https://youtu.be/5Yuxoqohvrk)

[![Customizing Hashnode Blog Starter Kit using TailwindCSS — Headless Hashnode Demo](https://cdn.hashnode.com/res/hashnode/image/upload/v1697540919799/MWVa0aD78.png?auto=format&w=500)](https://youtu.be/oH8QG8E0Txk)

## Found an issue?

If you have found an issue or bug, please create an [issue](https://github.com/Hashnode/starter-kit/issues).

If it's a quick fix, such as a misspelled word or a broken link, feel free to skip creating an issue. You can create a [pull request](https://github.com/Hashnode/starter-kit/pulls) directly.

## Have feedback for us?

Feel free to create an [issue](https://github.com/Hashnode/starter-kit/issues) with the **feedback** label. Our team will take a look and get back to you as soon as we can!

## Reach out for help

You can discuss ideas, ask questions, and meet other members from the Hashnode community in our [Discord](https://discord.gg/hashnode). You can also create tickets on [our intercom](https://hashnode.com/#support) to find support.

If you like, you can also DM us on [X](https://x.com/hashnode)!
