This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
_____
### Prerequisites
- Some, but not much, React knowledge is recommended
- know your way around JavaScript and the Browser
You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
### By the End you should be able to
- create an app using Next.js 
- have a foundation to learn more advanced topics

### Why Nexjs?
**React is used as the view library of choice but with react you can not quickly build a modern app You need routing, a build system, a way to style things, performance, etc 😰**

_____
## What is Next.js
- full-stack framework for modern apps that was created by the Vercel team
- Very **opinionated**, has well thought out conventions baked in that make alot of decisions for you
  - **Some things you get for free**
    - Dev build system
    - Production build system
    - Prerendering
      - SSR
      - Build time
      - Static
    - Routing
    - API routes (wow, really?)

_____


# Getting Started
## With Create Next App
**Create a boilerplate app**
- **npm:** `npx create-next-app`

- **yarn:** `yarn create next-app`
_____


## Next.js app from scratch 
- in the desired directory already initialized with git and a package.json:
- create a `.gitignore` file
- create `package.json` **npm init -y** 
- install nextjs, reactjs and react-dom
  - **npm:** `npm i next react react-dom --save`

  - **yarn:** `yarn add next react react-dom`
- add  scripts to `package.json`
  - `next` Will start Next.js in dev mode with hot reloading.
  - `next build` Will build your project and ready it for production.
  - `next start` Will start your built app, used in production.
    ```json
      "scripts": {
        "dev": "next",//developing
        "build": "next build",//production
        "start": "next start"//production
      }
    ```

_____
- [ Routing ]()




## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

___

> 🧠&nbsp;&nbsp;**remember**: Next.js is a full-stack framework, by default, it needs to be hosted on a platform that supports Node.js 

**So here's what we'll be covering**:


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













_________
Do you only need a single page app?
Use Create React App

Do you need a static site, like a blog, that's also a SPA?
Use Next.js or Gatsby.

Need SSR, an API, and all the above?
Use Next.js