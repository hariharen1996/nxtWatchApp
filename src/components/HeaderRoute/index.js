import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {
  RiLightbulbFlashFill,
  RiLightbulbFlashLine,
  RiLogoutBoxRFill,
  RiLogoutBoxRLine,
} from 'react-icons/ri'
import HeaderPopup from '../HeaderPopup/index'
import {
  HeaderContainer,
  LogoContainer,
  LogoImage,
  NavItems,
  NavLinks,
  HeaderButton,
  LogoutButton,
  LogoutButtonSm,
  ProfileImage,
  NavLinksContainer,
} from './StyledHeader'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class HeaderRoute extends Component {
  render() {
    const logoutApp = () => {
      const {history} = this.props
      Cookies.remove('jwt_token')
      history.replace('/login')
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme, changeTheme} = value

          const onChangeTheme = () => {
            changeTheme()
          }

          const bgColor = showTheme ? 'bgLight' : 'bgDark'
          const btnBorder = !showTheme
            ? '1px solid #3f36e5'
            : '1px solid #ffffff'
          const btnColor = !showTheme ? '#3f36e5' : '#ffffff'
          const logoImage = !showTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          return (
            <>
              <HeaderContainer className={bgColor}>
                <LogoContainer>
                  <LogoImage src={logoImage} alt="website logo" />
                </LogoContainer>
                <NavLinksContainer>
                  <NavItems>
                    <NavLinks>
                      <HeaderButton
                        type="button"
                        data-testid="theme"
                        onClick={onChangeTheme}
                      >
                        {!showTheme ? (
                          <RiLightbulbFlashFill
                            size={25}
                            className="theme-icon"
                          />
                        ) : (
                          <RiLightbulbFlashLine
                            size={25}
                            className="theme-icon icon"
                          />
                        )}
                      </HeaderButton>
                    </NavLinks>
                    <NavLinks>
                      <ProfileImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                        alt="profile"
                      />
                    </NavLinks>
                    <NavLinks>
                      <HeaderPopup />
                    </NavLinks>
                    <NavLinks>
                      <LogoutButton
                        type="button"
                        btnColor={btnColor}
                        btnBorder={btnBorder}
                        onClick={logoutApp}
                      >
                        Logout
                      </LogoutButton>
                    </NavLinks>
                    <NavLinks>
                      <LogoutButtonSm type="button" onClick={logoutApp}>
                        {showTheme ? (
                          <RiLogoutBoxRLine size={25} className="icon-light" />
                        ) : (
                          <RiLogoutBoxRFill size={25} className="icon-dark" />
                        )}
                      </LogoutButtonSm>
                    </NavLinks>
                  </NavItems>
                </NavLinksContainer>
              </HeaderContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(HeaderRoute)
