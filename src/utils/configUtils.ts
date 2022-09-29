import { type ReactUIConfig } from '../types'
import resolveConfigPath from './fileUtils'

export const getConfigFile = (file = 'reactui.config.js'): string | null => {
  return resolveConfigPath(file)
}

export const getConfig = (configFile: string | null): ReactUIConfig => {
  if (configFile === null) {
    return {}
  }

  const fullPath = require.resolve(configFile)
  delete require.cache[fullPath] // retrieve actual file contents for each require

  return require(fullPath)
}
