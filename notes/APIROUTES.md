## API Routes
- You can ship an API right next to your App with no setup
    - create an api folder in our pages directory
    - anything that is inside this folder, is going to be a route, to an endpoint on the API
    - routes work the same way they do with pages, but instead of building components in those files, we'll create API handlers

### API Handlers
- handlers are based on Connect, which Express.
`pages/api/index.js`
```

// route => http://localhost:3000/api

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ message: 'hello' }))
}
```
- this handler will respond to all requests (GET, PUT, DELETE, etc.) to /api
- We need to split our logic based on the methods (GET, PUT, DELETE, etc.)
- We also need some way to use connect-based middleware, which would make building out these handlers much simpler

#### Add Next-Connect
- turn any handler into an Express-like router that has its own methods on it
- also allow us to use any Connect-based middleware
```
    import nc from 'next-connect';
    import cors from 'cors'

    const handler = nc()
    // use connect based middleware
        .use(cors())
    // express like routing for methods
        .get((req, res) => {
            res.send('Hello world')
    })
        .post((req, res) => {
            res.json({ hello: 'world' })
    })
        .put(async (req, res) => {
            res.end('hello')
    })
    
    export default handler;
```
_____
## Create API routes
| Functionallity        | Method    | Routes          |
| ------------- |:------:| -------------:|
| create note   | POST   | /api/note     |
| update note   | PATCH  | /api/note/:id |
| delete note   | DELETE | /api/note/:id |
| get one note  | GET    | /api/note/:id |
| get all notes | GET    | /api/note    |

#### Store Data In Memory
`src/data/data.js`
```
const notes = []

module.exports = notes
```

____
### Fetching Data
**There are many ways to fetch data with Next.js, You have options,depending on when you need the data and what you're doing with it**
- Next.js injects the fetch function into your environment
    - on server and client
- fetch the data client-side at runtime to react the same way you do now. Hooks, fetch, etc.

***Checkout [swr](https://swr.vercel.app/) and [react-query](https://react-query.tanstack.com/) for your client side data fetching needs.***
### Fetching data ahead time, we have three options
- data fetching functions will only ever run on the server
- To fetch data on prerendering Pages only
##### getStaticProps
- will run at build time, whatever you return as props will be passed into the exported page, actual code won't even be bundled with the client code

```
    const IndexPage = () => {// jsx }
    export default IndexPage

    export async function getStaticProps(context) {
        return {
            props: {}
        }
    }
```
- results are saved into a JSON file and passed as props to the client's component at runtime
- context object is useful when the page is dynamic, it will contain the value of the params
- If a page has a dynamic path [id].jsx and uses `getStaticProps`, it must also use `getStaticPaths` to prerender all the pages at build time into HTML

#### **`getStaticProps` is not run at runtime in the browser, so where do the params come in?**

##### getStaticPaths
- fetchs all the generated paths for  all the unique URLs
- needs to return an object with paths on it, paths will be an array
- once you have props for pramas you can use the params object
```
const IndexPage = () => {// jsx }
            export default IndexPage

            export async function getStaticPaths() {
                // get all the paths for your posts from an API
                // or file system
                const results = await fetch('/api/posts')
                const posts = await results.json()
                const paths = posts.map(post => ({params: {slug: 
                post.slug}}))
                /*
                [
                    {params: {slug: 'get-started-with-node'}},
                    {params: {slug: 'top-frameworks'}}
                ]
                */
                return {paths}
            }

                export async function getStaticProps({ params }) {
                const res = await fetch(`/api/post/${params.slug}`)
                const post = await res.json()
                    return {
                        props: {post}
                    }
            }           
```
###### Use `fallback: true` on your return object for getStaticPaths if you have a big site and don't want to statically prerender all items at once, and instead opt in to render some later at runtime via SSR

##### getServerSideProps
    - will be called at runtime during every request
    - you will have the runtime data like query params, HTTP headers, and the req and res objects from API handlers
    - need to return an object with props
###### Don't use getServerSideProps unless absolutely necessary. Because it computes on every requests, it can be slow.
```
const IndexPage = () => {// jsx }
export default IndexPage

export async function getServerSideProps() {
  const response = await fetch(`https://somedata.com`)
  const data = await response.json()

  return { props: { data } }
}
```

#### When to use what
- **Do you need data at runtime but don't need SSR(Sercer Side Rendering)?** Use client-side data fetching.

- **Do you need data at runtime but do need SSR?** Use `getServerSideProps`

- **Do you have pages that rely on data that is cachable and accessible at build time? Like from a CMS?** Use `getStaticProps`

- **Do you have the same as above but the pages have dynamic URL params?** Use `getStaticProps` and `getStaticPaths`
________

### seed our in-memory DB with some notes
```
const notes = new Array(15)
  .fill(1)
  .map((_, i) => ({
    id: Date.now() + i,
    title: `Note ${i}`
  }))
```

###  fetch some notes from our API
```
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/note/`)
  const {data} = await res.json()
  return {
    props: {notes: data}
  }
}
```

- getServerSideProps: `notes/[id].js`
- getServerSideProps: `notes/index.js`

### Simulate a CMS and fetch the content for the landing page
```
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default ({content}) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>{content.title}</h1>
    </div>
  </div> 
)

export async function getStaticProps() {
  return {
    props: {
      content: {
        title: 'Look at my note app tho'
      }
    }
  }
}
```