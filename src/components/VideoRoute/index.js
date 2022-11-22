import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import {
  VideoLists,
  VideoImage,
  VideoProfile,
  ProfileImage,
  VideoTitle,
  VideoName,
  PublishedDate,
  ViewCount,
  VideoDetails,
  VideoContent,
} from './StyledVideo'

class VideoRoute extends Component {
  render() {
    const {data} = this.props
    const {publishedAt, thumbnailUrl, title, viewCount, channel} = data
    const {name, profileImage} = channel

    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme} = value

          const textColor = !showTheme ? '#181818' : '#ffffff'
          return (
            <VideoLists>
              <VideoImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoProfile>
                <ProfileImage src={profileImage} alt="channel logo" />
                <VideoTitle textColor={textColor}>{title}</VideoTitle>
              </VideoProfile>
              <VideoContent>
                <VideoName>{name}</VideoName>
                <VideoDetails>
                  <ViewCount>{viewCount} ·</ViewCount>
                  <PublishedDate>{publishedAt} </PublishedDate>
                </VideoDetails>
              </VideoContent>
            </VideoLists>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoRoute
