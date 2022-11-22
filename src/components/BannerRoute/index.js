import {Component} from 'react'
import {GrFormClose} from 'react-icons/gr'
import {
  BannerContainer,
  BannerLogoContainer,
  BannerBtn,
  BannerText,
  LogoImage,
} from './StyledBanner'
import './index.css'

class BannerRoute extends Component {
  state = {close: true}

  closeBanner = () => {
    this.setState({close: false})
  }

  render() {
    const {close} = this.state
    const logoImg =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

    return (
      close && (
        <BannerContainer data-testid="banner">
          <BannerLogoContainer>
            <LogoImage src={logoImg} alt="nxt watch logo" />
            <GrFormClose
              onClick={this.closeBanner}
              size={20}
              cursor="pointer"
              data-testid="close"
            />
          </BannerLogoContainer>
          <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
          <BannerBtn type="button">get it now</BannerBtn>
        </BannerContainer>
      )
    )
  }
}

export default BannerRoute
