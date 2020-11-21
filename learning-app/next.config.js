const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withNextEnv = nextEnv()
module.exports = withNextEnv()








//PLUGINS
// const config = {}
// module.exports = withMyPlugin(plugin-srguments, config)




// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')


// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     console.log('I am in dev mode')
//     return defaultConfig
//   }
//   return defaultConfig
// } 







