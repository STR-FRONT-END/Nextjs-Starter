# Routing with Pages
**need to interact with a router directly to create pages**
- any file in the folder/directory called `pages` wil be a route
-  file names determine the route name or pattern
-  whatever component is exported is the actual page
    1. Create a folder/directory called /pages
        - this folder can be on the root or in the src folder but not both
        - pages on the root will take precedence
    2. Create a `index.js` file in the pages directory
        - Create a component and export it
            ```
                import React from 'react';

                    const Page = () => {
                        return (
                            <div>
                                Index Page
                            </div>
                        )
                    }

                export default Page
            ```
    3. Run: `npm run dev` or `yarn dev`
**That's it Simple As PIE!!!!!!!!**
_____

## Routes Paths 
- add folders to the pages directory to create a paths like `routing/examples`
- **adding a index.js file in the folder will tell Nextjs that this component will be the index route for this path**
- `pages` ➡️ `routing` ➡️ `index.js`, navigating to `/routing` will render `pages/routing/index.js`

## Dynamic Routes
**Dynamic routes that will not be built at build time but instead at run time on the server**
- dynamic route files should look like this`[id].js`
    - id is the name of the parameter
    - the brackets is the syntax to create a dynamic route using file name conventions in the pages directory
    - `pages` ➡️ `routing` ➡️ `[id].js` navigating to `/routing/anything` will render `pages/routing/[id].js`
    ```
        import React from 'react';


        const Notes = () => {
            return (
                <div>
                    <h1>Note Page</h1>
                </div>
            )
        }

        export default Notes
    ```

### Access the id param with `next/router`
- Functional Component: use `useRouter()`, is a hook that comes from `next/route`
    - will give us the router and we can inspect it
    - comes for free with Next.js.
    - param name on the query object is the same name as the param name in the file for that page
- Class Component: use `withRouter()`, comes from `next/route`
- Comes with a free 404 page
```
    import React from 'react'
    import { useRouter } from 'next/router'

    export default () => {
        const router = useRouter()
        const { id }= router.query

        return (
            <h1>Note: {id} </h1>
        )
    }
```
_____
## Catch-all Routes
- allows us to define catch-all routes for when we're too lazy to make a page for each one
- the value will be an array of the params in order
    - create a file in a  directory and name it like this `[...params].js`, `pages/users/[...params].js`
        - the ellipsis `...`, will represent and route that matches `pages/users/hdkdk` or `pages/users/hdkdk/1233y7/wisi/anything/anything`
        - if `pages/users/hdkdk/1233y7/wisi/anything/anything` params will be an array `['hdkdk', '1233y7', 'wisi', 'anything', 'anything',]`
        ```
                import React from 'react';
                import { useRouter } from 'next/router'

                const UsersPage = () => {
                    const router = useRouter()
                    const { params }= router.query
                    console.log(params);
                
                    return (
                        <h1>Users: {params} </h1>
                    )
                }

                export default UsersPage
        ```

## Optional Catch-all Route
- allows you want to include the parent path in your catch-all route
- Just add another set of [ ] over your catch-all
-  params value on the router.query for the parent path will just be an empty object {}
- create a file in a  directory and name it like this `[[...params]].js`, `pages/users/[[...params]].js`
**useful for when you have a bunch of pages that have pretty similar if not identical layouts and style but have different content and need their own URL. Such things like docs and wikis are a perfect use case**

_____
### Non-pages
**So pages are special, but what about when you just need a component? Next.js doesn't have any conventions or opinions about that. The community usually creates a /src/components folder where all the components live**