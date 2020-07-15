export type ColorScheme = {
  main: string
  light: string
  dark: string
  contrast: string
}
export type ContextualColors = 'default' | 'primary' | 'secondary' | 'danger'

export type Colors = Record<ContextualColors, ColorScheme>
