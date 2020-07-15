import { createTheme } from './createTheme'

export const mainTheme = createTheme({
  colors: {
    default: {
      color: '#FBFEF9',
      contrast: '#000000',
    },
    primary: {
      color: '#2C2C54',
      contrast: '#FFFFFF',
    },
    secondary: {
      color: '#8377D1',
      contrast: '#FFFFFF',
    },
    danger: {
      color: '#E65F5C',
      contrast: '#FFFFFF',
    },
  },
})
