import { OverrideTheme } from '@aboutbits/react-ui'

export interface ReactUIConfig {
  theme?: OverrideTheme
}

export interface WebpackPluginOptions {
  themeVariable?: string
  configFile?: string
}

export interface TailwindPluginOptions {
  configFile?: string
}

export type ThemeStructure = { [key: string]: ThemeStructure | string }
