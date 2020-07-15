import React from 'react'
import { ThemeProvider } from 'styled-components'
import { mainTheme } from './themes'

const Provider: React.FC = ({ children }) => (
  <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
)

export default Provider
