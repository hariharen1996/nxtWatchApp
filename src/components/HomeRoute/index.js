import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import HeaderRoute from '../HeaderRoute/index'
import Sidebar from '../Sidebar/index'
import ThemeContext from '../../context/ThemeContext'
import {
  HomeContainer,
  SidebarContainer,
  HomeContent,
  HomeVideoItems,
  HomeVideoContainer,
  VideoFailure,
  FailureImage,
  FailureHeading,
  FailureMessage,
} from './StyledHome'
import BannerRoute from '../BannerRoute'
import VideoRoute from '../VideoRoute/index'

const apiStatusTypes = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'LOADING',
}

class HomeRoute extends Component {
  state = {
    searchResults: [],
    searchInput: '',
    apiStatus: apiStatusTypes.initial,
  }

  componentDidMount() {
    this.getSearchResults()
  }

  getSearchResults = async () => {
    this.setState({apiStatus: apiStatusTypes.loading})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchInput}`,
      options,
    )
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.videos.map(videoData => ({
        id: videoData.id,
        channel: {
          name: videoData.channel.name,
          profileImage: videoData.channel.profile_image_url,
        },
        publishedAt: videoData.published_at,
        thumbnailUrl: videoData.thumbnail_url,
        title: videoData.title,
        viewCount: videoData.view_count,
      }))
      this.setState({
        searchResults: updatedData,
        apiStatus: apiStatusTypes.success,
      })
    } else {
      this.setState({apiStatus: apiStatusTypes.failure})
    }
  }

  renderSuccess = () => {
    const {searchResults} = this.state
    return (
      <>
        <HomeVideoItems>
          {searchResults.map(data => (
            <VideoRoute key={data.id} data={data} />
          ))}
        </HomeVideoItems>
      </>
    )
  }

  renderLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailure = () => (
    <ThemeContext.Consumer>
      {value => {
        const {showTheme} = value
        const failureImage = showTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return (
          <VideoFailure>
            <FailureImage src={failureImage} alt="failure view" />
            <FailureHeading>Oops! Something Went Wrong</FailureHeading>
            <FailureMessage>
              We are having some trouble to complete your request. Please try
              again.
            </FailureMessage>
          </VideoFailure>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusTypes.success:
        return this.renderSuccess()
      case apiStatusTypes.failure:
        return this.renderFailure()
      case apiStatusTypes.loading:
        return this.renderLoading()
      default:
        return null
    }
  }

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
                  <HomeVideoContainer>{this.renderStatus()}</HomeVideoContainer>
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
