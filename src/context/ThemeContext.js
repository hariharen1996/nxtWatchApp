import React from 'react'

const ThemeContext = React.createContext({
  showTheme: false,
  changeTheme: () => {},
})

export default ThemeContext
