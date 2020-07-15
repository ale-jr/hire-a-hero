import Color from 'color'
import { ContextualColors, ColorScheme, Colors } from './types'
import { DefaultTheme } from 'styled-components'

type ThemeConfiguration = {
  colors: Record<ContextualColors, { color: string; contrast: string }>
}
const DARKEN_OR_LIGHTEN_FACTOR = 0.3
const generateColorScheme = (color: string, contrast: string): ColorScheme => {
  const mainColor = Color(color)
  return {
    contrast,
    main: color,
    dark: mainColor.darken(DARKEN_OR_LIGHTEN_FACTOR).hex(),
    light: mainColor.lighten(DARKEN_OR_LIGHTEN_FACTOR).hex(),
  }
}

export const createTheme = ({ colors }: ThemeConfiguration): DefaultTheme => {
  const themeColors = Object.keys(colors).reduce<Colors>(
    (themeColors, colorKey) => {
      const { color, contrast } = colors[colorKey as ContextualColors]
      const generatedColor = generateColorScheme(color, contrast)
      return { ...themeColors, [colorKey]: generatedColor } as Colors
    },
    {} as Colors,
  )

  return {
    colors: themeColors,
  }
}
