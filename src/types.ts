import { Theme } from '@aboutbits/react-ui'

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>
}

export type ReactUIConfig = {
  theme?: {
    override?: RecursivePartial<Theme>
    merge?: RecursivePartial<Theme>
  }
}

export type BaseConfigOptions = {
  configFile?: string
}

export type WebpackPluginOptions = {
  themeVariable?: string
} & BaseConfigOptions

export type TailwindPluginOptions = BaseConfigOptions

export type ThemeStructure = { [key: string]: ThemeStructure | string }
