# Navigation
## Link Component
- comes from `next/link`
- only used for client side routing, if you don't want that or are linking to another site, then you should just use an a tag instead
-  must have an a tag as the child of the Link component, but the href lives on the Link
- href prop takes the name of the page as it is in the pages directory
    ```
        <Link href="/notes">
            <a>Notes</a>
        </Link>
    ```

**For dynamic routes, you will need the as prop as well**
```
    <Link href = 'users/[id]' as = { `/users/1` }>
        <a>
          User 1
        </a>
      </Link>
```