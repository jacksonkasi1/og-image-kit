# Open Graph Image Kit Templates

First off, thank you for purchasing our product. Here is the Notion guide:
- https://magic-space.notion.site/Open-Graph-Image-Kit-84ad575a680242d6ba64592b8a7988aa?pvs=4

If you have not given an upvote yet on Product Hunt, please do so here:
- https://www.producthunt.com/posts/og-image-generator

We are excited to have you on board and we are looking forward to seeing what you create with our product. Feel free to reach out to us if you have any questions or need help with anything.

- https://ogimage.org - This product
- https://blogkit.org - Parent product
- https://twitter.com/illyism - DM me on Twitter

## Getting Started

First, clone this repository and install the dependencies. You can use npm, yarn, pnpm, or bun.

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Copy and paste the `.env.local.example` file to `.env.local` and fill in the required environment variables.
When you deploy to Vercel, you can set the values using the Vercel environment variables.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Using the Templates

You can edit the templates by modifying the files in the `app/og/templates` directory. The page auto-updates as you edit the files.

There is a super useful SEO function that you can use to generate the meta tags for your page. It wil automatically use the Open Graph image and Twitter card image for you.

You can use it like this:

```tsx
import { generatePageMeta } from '@lib/seo'
export const metadata = generatePageMeta({
    title: 'My Page Title',
    description: 'My page description',
    // image: '/og/templates/emoji', -> Will use the emoji template instead of the default
    url: '/'
})
```

Again, feel free to reach out to us if you have any questions or need help with anything.

# Free Kit

We have a free kit for you to share with your friends. You can find it here:
- https://magic-space.notion.site/Open-Graph-Image-Kit-Free-Pack-b03215fd1fa04ec4973635e6c503eb36?pvs=4

Alternatively, you can sign up for our affiliate program and earn up to 40% commission on each sale.
- https://store.magicspace.agency/affiliates


## Thanks

Made by [Ilias Ism](https://il.ly) from [Magicspace SEO](https://magicspace.agency).

License: [License](LICENSE.md)
