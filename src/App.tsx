import React from 'react'
import './i18n'
import ReduxProvider from './store/Provider'
const App: React.FC = () => {
  return (
    <ReduxProvider>
      <h1>I'm a beautiful App</h1>
    </ReduxProvider>
  )
}

export default App
