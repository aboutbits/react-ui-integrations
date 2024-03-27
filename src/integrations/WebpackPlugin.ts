import {
  DefinePlugin,
  type Compiler,
  type WebpackPluginInstance,
} from 'webpack'
import { WebpackPluginOptions } from '../types'
import { getConfig, getConfigFile } from '../utils/configUtils'
import { getThemeAsJson } from '../utils/themeUtils'

const defaultThemeVariable = 'REACTUI_THEME'

export default class ReactUIWebpackPlugin implements WebpackPluginInstance {
  options: WebpackPluginOptions = {}

  constructor(options?: WebpackPluginOptions) {
    if (options) {
      this.options = options
    }
  }

  apply(compiler: Compiler) {
    const configFile = getConfigFile(this.options.configFile)

    const definitions = {
      [this.options.themeVariable ?? defaultThemeVariable]:
        DefinePlugin.runtimeValue(
          () => {
            const config = getConfig(configFile)
            return getThemeAsJson(config)
          },
          configFile
            ? {
                fileDependencies: [configFile],
              }
            : undefined,
        ),
    }

    new DefinePlugin(definitions).apply(compiler)
  }
}
