import {Component} from 'react'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {HiSave} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {
  CloseBtn,
  PopupNavItems,
  PopupNavLists,
  NavLink,
  NavText,
  HamBurgerButton,
  PopupModal,
} from './StyledPopup'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class HeaderPopup extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme} = value
          const bgColor = !showTheme ? 'bg-dark' : 'bg-light'
          const menuColor = !showTheme ? '#181818' : '#ffffff'
          const iconColor = showTheme ? 'menu-dark' : 'menu-light'

          return (
            <Popup
              className={`popup-content ${bgColor}`}
              modal
              trigger={
                <HamBurgerButton>
                  <GiHamburgerMenu size={25} className={iconColor} />
                </HamBurgerButton>
              }
            >
              {close => (
                <PopupModal>
                  <CloseBtn onClick={() => close()}>
                    <IoMdClose
                      size={25}
                      color="616e7c"
                      className="close-icons"
                    />
                  </CloseBtn>
                  <PopupNavItems>
                    <PopupNavLists>
                      <NavLink to="/" onClick={() => close()}>
                        <AiFillHome iconColor={iconColor} size={25} />
                        <NavText menuColor={menuColor}>Home</NavText>
                      </NavLink>
                      <NavLink to="/trending" onClick={() => close()}>
                        <AiFillFire iconColor={iconColor} size={25} />
                        <NavText menuColor={menuColor}>Trending</NavText>
                      </NavLink>
                      <NavLink to="/gaming" onClick={() => close()}>
                        <SiYoutubegaming iconColor={iconColor} size={25} />
                        <NavText menuColor={menuColor}>Gaming</NavText>
                      </NavLink>
                      <NavLink to="/saved" onClick={() => close()}>
                        <HiSave iconColor={iconColor} size={25} />
                        <NavText menuColor={menuColor}>Saved Videos</NavText>
                      </NavLink>
                    </PopupNavLists>
                  </PopupNavItems>
                </PopupModal>
              )}
            </Popup>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HeaderPopup
