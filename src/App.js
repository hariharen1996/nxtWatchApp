import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginRoute from './components/LoginRoute/index'
import HomeRoute from './components/HomeRoute/index'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideoRoute from './components/SavedVideoRoute'
import './App.css'

// Replace your code here
class App extends Component {
  state = {showTheme: false, savedVideos: []}

  changeTheme = () => {
    this.setState(prevState => ({
      showTheme: !prevState.showTheme,
    }))
  }

  addVideos = data => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, data],
    }))
  }

  deleteVideos = id => {
    const {savedVideos} = this.state
    const unSaveVideo = savedVideos.filter(item => item.id !== id)
    this.setState({savedVideos: unSaveVideo})
  }

  render() {
    const {showTheme, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          showTheme,
          changeTheme: this.changeTheme,
          savedVideos,
          addVideos: this.addVideos,
          deleteVideos: this.deleteVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideoRoute}
          />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
