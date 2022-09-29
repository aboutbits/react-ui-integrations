import fs from 'fs'
import path from 'path'

export default function resolveConfigPath(configFile: string) {
  try {
    const configPath = path.resolve(configFile)
    fs.accessSync(configPath)
    return configPath
  } catch (err) {}

  return null
}
