import {Component} from 'react'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {HiSave} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {
  SidebarContainer,
  SidebarMenu,
  SidebarItems,
  SidebarLists,
  MenuText,
  SidebarContact,
  ContactHeading,
  Image,
  SocialImage,
  ContactDescription,
  NavLink,
} from './StyledSidebar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Sidebar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme} = value

          const bgColor = showTheme ? '#231f20' : '#ffffff'
          const menuColor = !showTheme ? '#212121' : '#ffffff'
          const iconColor = showTheme ? 'menu-dark' : 'menu-light'
          /* const logoImage = !showTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png' */

          return (
            <SidebarContainer bgColor={bgColor}>
              <SidebarMenu>
                <SidebarItems>
                  {/* <SidebarLists>
                    <LogoImage src={logoImage} alt="website logo" />
                  </SidebarLists> */}
                  <NavLink to="/">
                    <SidebarLists>
                      <AiFillHome className={`icons ${iconColor}`} size={25} />
                      <MenuText menuColor={menuColor}>Home</MenuText>
                    </SidebarLists>
                  </NavLink>

                  <SidebarLists>
                    <AiFillFire className={iconColor} size={25} />
                    <MenuText menuColor={menuColor}>Trending</MenuText>
                  </SidebarLists>
                  <SidebarLists>
                    <SiYoutubegaming size={25} className={iconColor} />
                    <MenuText menuColor={menuColor}>Gaming</MenuText>
                  </SidebarLists>
                  <NavLink to="/saved-videos">
                    <SidebarLists>
                      <HiSave size={25} className={iconColor} />
                      <MenuText menuColor={menuColor}>Saved Videos</MenuText>
                    </SidebarLists>
                  </NavLink>
                </SidebarItems>
              </SidebarMenu>
              <SidebarContact>
                <ContactHeading menuColor={menuColor}>
                  contact us
                </ContactHeading>
                <SocialImage>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialImage>
                <ContactDescription menuColor={menuColor}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactDescription>
              </SidebarContact>
            </SidebarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Sidebar
