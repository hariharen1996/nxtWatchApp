import {Component} from 'react'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiSave} from 'react-icons/bi'
import {
  VideoLists,
  PlayerTitle,
  PlayerDetails,
  PlayerCounts,
  PlayerLikes,
  PlayerDate,
  PlayerLikesData,
  Likes,
  Dislikes,
  Save,
  HorizontalLine,
} from './StyledSpecificVideos'
import ThemeContext from '../../context/ThemeContext'

class SpecificVideos extends Component {
  render() {
    const {data} = this.props
    const {
      channel,
      id,
      description,
      publishedAt,
      thumbnailUrl,
      title,
      viewCount,
      videoUrl,
    } = data
    const {name} = channel

    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme} = value
          const textColor = !showTheme ? '#181818' : '#f1f1f1'
          const iconsColor = !showTheme ? '#606060' : '#64748b'
          return (
            <VideoLists>
              <ReactPlayer url={videoUrl} width="100%" controls />
              <PlayerTitle textColor={textColor}>{title}</PlayerTitle>
              <PlayerDetails>
                <PlayerCounts>
                  <PlayerLikes>
                    {viewCount} <BsDot />
                  </PlayerLikes>
                  <PlayerDate>{publishedAt}</PlayerDate>
                </PlayerCounts>
                <PlayerLikesData>
                  <Likes iconsColor={iconsColor}>
                    <AiOutlineLike /> Likes
                  </Likes>
                  <Dislikes iconsColor={iconsColor}>
                    <AiOutlineDislike /> Dislike
                  </Dislikes>
                  <Save iconsColor={iconsColor}>
                    <BiSave /> Save {name}
                  </Save>
                </PlayerLikesData>
              </PlayerDetails>
              <HorizontalLine />
            </VideoLists>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SpecificVideos
