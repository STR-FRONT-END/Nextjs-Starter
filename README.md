This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# [Nextjs-Starter](https://hendrixer.github.io/nextjs-course/)

## The easy way
You can use `creat-next-app` to get started very quickly.

**npm**
```shell
npx create-next-app
```

**yarn**
```shell
yarn create next-app
```

This will install a boilerplate app and all of its dependencies. The project's `package.json` will have all the needed scripts ready for you as well.


## The still pretty easy way
We can set up a Next.js app from scratch. That's actually what we'll be doing in this course. In the desired directory already initialized with git and a package.json:

**npm**
```shell
npm i next react react-dom --save
```

**yarn**
```shell
yarn add next react react-dom
```

Next, we need to add some helpful scripts to our `package.json`

```json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

So what do these commands do?

`next`       Will start Next.js in dev mode with hot reloading.

`next build` Will build your project and ready it for production.

`next start` Will start your built app, used in production.


> 🧠&nbsp;&nbsp;**remember**: Next.js is a full-stack framework, by default, it needs to be hosted on a platform that supports Node.js

Next.js is full of goodies, and we won't be covering every single corner of it. We will be going over everything you need and more. This course aims to teach you what Next.js is and how you can get the best from it. 

**So here's what we'll be covering**:

- [ ] What is Next.js
- [ ] How does Next.js compare to React.js
- [ ] When would you use Next.js
- [ ] Getting started
- [ ] Creating pages and components
- [ ] SEO
- [ ] Static and dynamic routing
- [ ] Navigating
- [ ] Styling
- [ ] API routes
- [ ] Fetching data
- [ ] Prerendering
- [ ] Deployment
- [ ] JAMstack
- [ ] `js or jsx`