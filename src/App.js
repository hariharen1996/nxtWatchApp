import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginRoute from './components/LoginRoute/index'
import HomeRoute from './components/HomeRoute/index'
import ThemeContext from './context/ThemeContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {showTheme: false}

  changeTheme = () => {
    this.setState(prevState => ({
      showTheme: !prevState.showTheme,
    }))
  }

  render() {
    const {showTheme} = this.state
    return (
      <ThemeContext.Provider value={{showTheme, changeTheme: this.changeTheme}}>
        <Switch>
          <Route path="/login" component={LoginRoute} />
          <Route path="/" component={HomeRoute} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
