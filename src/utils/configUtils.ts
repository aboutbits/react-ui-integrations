import { type ReactUIConfig } from '../types'
import { find } from './fileUtils'

export const getConfigFile = (file = 'reactui.config.js'): string => {
  const reactUiConfigFilePath = find(file)

  if (reactUiConfigFilePath === null) {
    throw new Error('ReactUI config file not found.')
  }

  return reactUiConfigFilePath
}

export const getConfig = (configFile: string): ReactUIConfig => {
  const fullPath = require.resolve(configFile)
  delete require.cache[fullPath] // retrieve actual file contents for each require
  return require(fullPath)
}
