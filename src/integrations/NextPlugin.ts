import { type NextConfig } from 'next'
import { WebpackPluginOptions } from '../types'
import ReactUIWebpackPlugin from './WebpackPlugin'

export default (
  nextConfig: NextConfig = {},
  pluginOptions?: WebpackPluginOptions,
): NextConfig => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.plugins.push(new ReactUIWebpackPlugin(pluginOptions))

      return typeof nextConfig.webpack === 'function'
        ? nextConfig.webpack(config, options)
        : config
    },
  } as NextConfig)
}
