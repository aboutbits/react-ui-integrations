import type { PluginCreator } from 'tailwindcss/types/config'
import { TailwindPluginOptions } from '../types'
import { getConfig, getConfigFile } from '../utils/configUtils'
import { getThemeAsJson } from '../utils/themeUtils'

export default (options?: TailwindPluginOptions) => {
  const configFilePath = getConfigFile(options?.configFile)

  const tailwindPlugin: PluginCreator = ({ config }) => {
    const reactUIConfig = getConfig(configFilePath)
    const content = config().content

    if ('files' in content) {
      if (configFilePath) {
        content.files.push(configFilePath)
      }
      content.files.push({
        raw: getThemeAsJson(reactUIConfig),
        extension: 'json',
      })
    }
  }

  return tailwindPlugin
}
