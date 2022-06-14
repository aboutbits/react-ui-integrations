import { BaseConfigOptions } from '../types'
import { getConfig, getConfigFile } from '../utils/configUtils'
import { getTheme as getThemeUtil } from '../utils/themeUtils'

export const getTheme = (options?: BaseConfigOptions) => {
  const configFilePath = getConfigFile(options?.configFile)
  const reactUIConfig = getConfig(configFilePath)
  return getThemeUtil(reactUIConfig)
}
