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

## Create API routes
| Functionallity        | Method    | Routes          |
| ------------- |:------:| -------------:|
| create note   | POST   | /api/note     |
| update note   | PATCH  | /api/note/:id |
| delete note   | DELETE | /api/note/:id |
| get one note  | GET    | /api/note/:id |
| get all notes | GET    | /api/note    |
