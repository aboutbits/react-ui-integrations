import { defaultTheme } from '@aboutbits/react-ui'
import mergeWith from 'lodash.mergewith'
import { twMerge } from 'tailwind-merge'
import { type ReactUIConfig, type ThemeStructure } from '../types'

export const getTheme = (config: ReactUIConfig): ThemeStructure => {
  return mergeThemes(defaultTheme, config.theme || {})
}

export const getThemeAsJson = (config: ReactUIConfig): string => {
  return JSON.stringify(getTheme(config))
}

export const mergeThemes = (base: ThemeStructure, override: ThemeStructure) => {
  return mergeWith({}, base, override, (values, srcValues) => {
    if (typeof values === 'string' && typeof srcValues === 'string') {
      return twMerge(values, srcValues)
    }
  })
}
