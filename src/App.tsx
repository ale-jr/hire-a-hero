import React from 'react'
import './i18n'
import ReduxProvider from './store/Provider'
import HomePage from './components/pages/Home'
import GlobalStyle from './GlobalStyles'
import ThemeProvider from './themes/Provider'
const App: React.FC = () => {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <GlobalStyle />
        <HomePage />
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default App
