# Customizing Next.js config
**If you want to change the build system's behavior, extend Next.js's features, or add ENV variables, you can do this easily in the `next-config.js` file**

### Either export an object or function:

#### Object
```
module.exports = {
  webpack: {
    // webpack config properties
  },
  env: {
    MY_ENV_VAR: process.env.SECRET
  }
}
```

#### Function
- allow you to change the configuration based on what nextjs is doing
```
const { PHASE_PRODUCTION_SERVER } = require('next/constants')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      ...defaultConfig,
      webpack: {
        plugins: [new BundleAnalyzerPlugin()]
      }
    }
  }

  return defaultConfig
} 
```
**You can check out all the different [phases](https://github.com/vercel/next.js/blob/canary/packages/next/next-server/lib/constants.ts#L1-L4) of Next.js**