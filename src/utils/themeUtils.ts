import { defaultTheme } from '@aboutbits/react-ui'
import mergeWith from 'lodash.mergewith'
import { twMerge } from 'tailwind-merge'
import { type ReactUIConfig, type ThemeStructure } from '../types'

export const getTheme = (config: ReactUIConfig): ThemeStructure => {
  const overridden = overrideTheme(defaultTheme, config.theme?.override || {})
  const merged = mergeTheme(overridden, config.theme?.merge || {})
  return merged
}

export const getThemeAsJson = (config: ReactUIConfig): string => {
  return JSON.stringify(getTheme(config))
}

export const overrideTheme = (
  baseTheme: ThemeStructure,
  newTheme: ThemeStructure
) => {
  return mergeWith({}, baseTheme, newTheme)
}

export const mergeTheme = (
  baseTheme: ThemeStructure,
  newTheme: ThemeStructure
) => {
  return mergeWith({}, baseTheme, newTheme, (baseValues, newValues) => {
    if (typeof baseValues === 'string' && typeof newValues === 'string') {
      return twMerge(baseValues, newValues)
    }
  })
}
