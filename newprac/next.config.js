const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
      console.log("I am in Dev Mode");
    return defaultConfig
  }

  return defaultConfig
} 