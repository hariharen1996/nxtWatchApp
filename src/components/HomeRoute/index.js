import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import HeaderRoute from '../HeaderRoute/index'
import Sidebar from '../Sidebar/index'
import ThemeContext from '../../context/ThemeContext'
import {HomeContainer, SidebarContainer, HomeContent} from './StyledHome'
import BannerRoute from '../BannerRoute'

class HomeRoute extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme} = value
          const bgColor = showTheme ? '#181818' : '#f9f9f9'
          return (
            <>
              <HeaderRoute />
              <HomeContainer data-testid="home" bgColor={bgColor}>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                <HomeContent>
                  <BannerRoute />
                </HomeContent>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HomeRoute
