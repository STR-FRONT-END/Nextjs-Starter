# Styles
- There are **global styles** and **component styles**
- **Global Styles** have to be imported at the entry point of your app
    - entry point???.....you can and have to create your own now that you want global styles

- Create an `pages/_app.jsx` file
    - add the following code
            ```
                export default function App({ Component, pageProps }) {
                    return <Component {...pageProps} />
                }
            ```

**⬆️⬆️⬆️This automatically gets created for you by default⬆️⬆️⬆️**
- in order to add any global css we need to create the file
- import `css` file into `_app.js`, if you import anywhere else you will get an error
-  don't want global CSS, Next.js supports [css modules](https://github.com/css-modules/css-modules).
___

## CSS Modules
- You can import a CSS module file anywhere in your app
- dynamically creates a class for every import, that is scoped for each file that has the import
- you have to use a special syntax in the file name
    - `styles.module.css`



### Theme 
```
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
      <a sx={{color: 'text', fontSize: 3, cursor: 'pointer'}} href={process.env.HELP_APP_URL}>My GitHub</a>
    </nav>
  </header>
)

export default Nav
```
- **Theme UI uses a custom create element function and [JSX pragma](https://theme-ui.com/guides/jsx-pragma/) comments to allow you to style elements with values from your theme using the sx prop.**
- `/** @jsx jsx */`
    - tells the jsx transformer, what function to use to transform your jsx into plain javascript
    - without it the functionality of the library might break
    - allow us to use `sx`