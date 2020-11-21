# Customizing Next.js config
**If you want to change the build system's behavior, extend Next.js's features, or add ENV variables, you can do this easily in the `next-config.js` file**
## Configuration
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
### Plugins
**Plugin without arguments**
```
  // next.config.js
  const withOffline = require('next-offline')
  const config = {
    // your next config
  }

  module.exports = withOffline(config)
```

- most plugins follow the withPluginName format
- usually take your custom Next.js config

**Plugin with arguments**
```
    // next.config.js
    const withPlugins = require('next-compose-plugins')
    const withOffline = require('next-offline')
    const withReactSvg = require('next-react-svg')
    const config = {
      env: {
        MY_ENV: process.env.MY_ENV
      }
    }

    module.exports = withPlugins([
      withOffline,
      [withReactSvg, {
        // config for reactSvgPlugin
      }]
    ], config)
```

#### env plugin that makes it super simple to use env vars in our app
- `npm i next-env dotenv-load --dev`
- `yarn add next-env dotenv-load --dev`
- create a .env file on the root and add some envs
- In your next.config.js file:
```
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withNextEnv = nextEnv()
module.exports = withNextEnv()
```
  - `dotenvLoad()`: looks for the .env file, grabs every environment variable and inject it into the environment
  - `const withNextEnv = nextEnv()`: creates the plugin with the environments loaded into it automatically

**Go to the Nav component and add an a tag to link to the external app.**
```
// src/components/nav.jsx
<a sx={{
    color: 'text',
    fontSize: 3,
    cursor: 'pointer'
  }}
  href={process.env.HELP_APP_URL}
>
  Help
</a>
```
**[PlugIns](https://github.com/vercel/next-plugins)
_____
## Adding TypeScript
