import { OverrideTheme } from '@aboutbits/react-ui'

export type ReactUIConfig = {
  theme?: OverrideTheme
}

export type BaseConfigOptions = {
  configFile?: string
}

export type WebpackPluginOptions = {
  themeVariable?: string
} & BaseConfigOptions

export type TailwindPluginOptions = BaseConfigOptions

export type ThemeStructure = { [key: string]: ThemeStructure | string }
