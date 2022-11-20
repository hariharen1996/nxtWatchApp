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
          const bgColor = showTheme ? '#181818' : '#ffffff'
          const menuColor = !showTheme ? '#181818' : '#ffffff'
          const iconColor = showTheme ? 'menu-dark' : 'menu-light'

          return (
            <Popup
              className="popup-content"
              modal
              trigger={
                <HamBurgerButton menuColor={menuColor}>
                  <GiHamburgerMenu size={25} />
                </HamBurgerButton>
              }
            >
              {close => (
                <PopupModal bgColor={bgColor}>
                  <CloseBtn onClick={() => close()} menuColor={menuColor}>
                    <IoMdClose size={25} />
                  </CloseBtn>
                  <PopupNavItems>
                    <PopupNavLists>
                      <NavLink to="/" onClick={() => close()}>
                        <AiFillHome className={iconColor} size={25} />
                        <NavText menuColor={menuColor}>Home</NavText>
                      </NavLink>
                      <NavLink to="/trending" onClick={() => close()}>
                        <AiFillFire className={iconColor} size={25} />
                        <NavText menuColor={menuColor}>Trending</NavText>
                      </NavLink>
                      <NavLink to="/gaming" onClick={() => close()}>
                        <SiYoutubegaming className={iconColor} size={25} />
                        <NavText menuColor={menuColor}>Gaming</NavText>
                      </NavLink>
                      <NavLink to="/saved" onClick={() => close()}>
                        <HiSave className={iconColor} size={25} />
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
