import { defaultTheme } from '@aboutbits/react-ui'
import mergeWith from 'lodash.mergewith'
import { twMerge } from 'tailwind-merge'
import { type ReactUIConfig, type ThemeStructure } from '../types'

export const getThemeAsJson = (config: ReactUIConfig): string => {
  return JSON.stringify(mergeThemes(defaultTheme, config.theme || {}))
}

export const mergeThemes = (base: ThemeStructure, override: ThemeStructure) => {
  return mergeWith({}, base, override, (values, srcValues) => {
    if (typeof values === 'string' && typeof srcValues === 'string') {
      return twMerge(values, srcValues)
    }
  })
}
