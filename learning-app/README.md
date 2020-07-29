This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

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
___

Next.js comes with some styling conventions baked in, and they're pretty good. Because Next.js uses React, you can also use any other mechanism that works with React to style your apps.

> 👍🏾&nbsp;&nbsp;**tip** You might have to extend Next.js tp support your styling approach. More on that later.

When it comes to styling, you have global styles and component styles. For global CSS, you have to import them at the entry point of your app. Wait, where is the entrance to my Next.js app? It's actually created for you, but you can and have to create your own now that you want global styles.

Create an `pages/_app.jsx` file and add this:

```jsx
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

This automatically gets created for you by default with the same code. In the `_app.jsx` you can import any CSS file, and the styles will be global now.

```jsx
import 'flexbox.css'
import '../mystyles.css'
```

Now, when you don't want global CSS, Next.js supports [css modules](https://github.com/css-modules/css-modules). This will scope your CSS, avoiding collisions.

> 🕳 &nbsp;&nbsp;**deep dive**: a unique class name is created every import to reuse the same CSS class names

You can import a CSS module file anywhere in your app. To create a CSS module, you have to use a special syntax in the file name.

`styles.module.css`

This makes CSS modules a perfect solution to styling components.

```text
components
  button.jsx
  button.module.css
```

> 👍🏾 &nbsp;&nbsp;**tip** You can use a CSS pre-processor by extending Next.js. We'll cover that later.

I prefer to use a different solution when styling all my React apps, which we're going to use today. 


https://github.com/vercel/next-plugins/tree/master/packages/next-sass

https://github.com/zeit/next-plugins/tree/master/packages/next-css

https://github.com/vercel/next.js/tree/canary/examples/with-styled-components

-[] Creating CSS modules



____
The following section is not entirely specific to Next.js and takes on how I prefer to style my React apps. I recommend checking out to this branch if you don't want to copy and paste or follow this section.

[theme ui](https://theme-ui.com) is a library that allows you to create theme objects and use them in your components. It also handles scoping and injecting the CSS into your app—pretty dope stuff.

> 📏 &nbsp;&nbsp;**TLDR;** create an object representing a theme and use that theme for all your components

Let's get our app looking like an app. First, install some things.

**npm**
```shell
npm i theme-ui @theme-ui/presets --save
```
**yarn**
```shell
yarn add theme-ui @theme-ui/presets
```

Next, we'll create a theme. Make a file on the root of your app.

```text
theme.js
```

Now add this theme:
```js
import { roboto } from '@theme-ui/presets'

const theme = {
  ...roboto,
  containers: {
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
    },
    page: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    }
  },
  styles: {
    ...roboto.styles
  }
}

export default theme
```
This object uses a preset theme with some extras I added. Throw in a `console.log(theme)` to see what's in there. 

Next we'll create a Navigation component at `src/components/nav.jsx`

```jsx
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

const Nav = () => (
  <header sx={{height: '60px', width: '100vw', bg: 'primary', borderBottom: '1px solid', borderColor: 'primary'}}>
    <nav sx={{display: 'flex', alignItems: 'center',  justifyContent: 'space-between', variant: 'containers.page', height: '100%'}}>
      <Link href="/">
        <a sx={{fontWeight: 'bold', fontSize: 4, cursor: 'pointer'}}>Note App</a>
      </Link>

      <Link href="/notes">
        <a sx={{color: 'text', fontSize: 3, cursor: 'pointer'}}>notes</a>
      </Link>

    </nav>
  </header>
)

export default Nav
```

A few subtle but **powerful** things here. First, lets talk about this:

```jsx
/** @jsx jsx */
import { jsx } from 'theme-ui'
```

Ummm, what is that, and how does this component render JSX without importing React? That comment is something called `JSX pragma`. Its a hint to the compiler how to compile this file. The comment combined with the JSX import from `theme-ui` tells the compiler, babel, in this case, of what JSX tool to use to handle JSX in this file. It's the same reason you had to import React in your JSX files.

We need the theme-ui JSX to use the `sx` prop on all of our components. The `sx` prop allows us to add inline styles to components using CSS properties and values and values from our theme object that we created. It's **BEAUTIFUL** 💋.


And now, our pages.

```jsx
// pages/index.jsx
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default () => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>This is a really dope note taking app.</h1>
    </div>
  </div> 
)

```

```jsx
// pages/notes/index.jsx
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default () => {
  const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `This is my note ${i}`}))

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>My Notes</h1>

      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {notes.map(note => (
          <div sx={{width: '33%', p: 2}}>
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <a sx={{textDecoration: 'none', cursor: 'pointer'}}>
                <div sx={{variant: 'containers.card',}}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
```

```jsx
// pages/[id].jsx
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {id} </h1>
    </div>
  )
}
```


We now need to wrap our app in the Theme UI provider. We have two options:
* wrap every page individually
* wrap the root component

Because we want to use Theme UI in our entire app, its safe to wrap the root. So in the `pages/_app.jsx` file: 

```jsx
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Nav from '../src/components/nav'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>      
    </ThemeProvider>
  )
}
```


Theme UI is profound, and we barely scratched the surface. I highly recommend checking it out. 

> 👍🏾&nbsp;&nbsp;**tip**: Checkout [Baseweb](https://baseweb.design/) from Uber which is similar to Theme UI

> 🌲 &nbsp;&nbsp;**branch**: `git checkout styling`