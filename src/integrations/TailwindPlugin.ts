import { type TailwindPluginFn } from 'tailwindcss/plugin'
import { TailwindPluginOptions } from '../types'
import { getConfig, getConfigFile } from '../utils/configUtils'
import { getThemeAsJson } from '../utils/themeUtils'

export default (options?: TailwindPluginOptions) => {
  const configFilePath = getConfigFile(options?.configFile)

  const tailwindPlugin: TailwindPluginFn = ({ config }) => {
    const reactUIConfig = getConfig(configFilePath)

    config().content.files.push(configFilePath, {
      raw: getThemeAsJson(reactUIConfig),
      extension: 'json',
    })
  }

  return tailwindPlugin
}
