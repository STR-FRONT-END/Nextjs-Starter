# Deployment
**How you build your app will determine where you can deploy to**
- By default, a Next.js app has to be deployed to an environment that supports Node.js
____
### Deploy
- Besure to change the hardcoded API URLS in the fetch calls to use and ENV var for the live URLS
- Install the CLI 
    - `npm npm i -g vercel` or `yarn global add vercel`
- check to see if you have vercel `which vercel`
- login to vercel `vercel login`
- run `vercel` or `vc` to deploy

### No Nodejs
- can deploy to static hosting services. You can use: `next export`

- There are some [gotchas](https://nextjs.org/docs/advanced-features/static-html-export), though.

### ENV
```
HELP_APP_URL=https://shannonreed.dev
API_URL=http://localhost:3000
```