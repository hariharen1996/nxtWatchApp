import styled from 'styled-components'

export const VideoLists = styled.div``
export const PlayerTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.textColor};
  margin: 10px;
  margin-top: 20px;
`
export const PlayerDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const PlayerCounts = styled.div`
  margin: 10px;
`
export const PlayerLikesData = styled.div`
  margin: 10px;
`
export const PlayerLikes = styled.span`
  color: #616e7c;
  font-weight: 500;
  font-size: 17px;
  font-family: 'Roboto';
`
export const PlayerDate = styled(PlayerLikes)``
export const Likes = styled.button`
  background: none;
  border: none;
  outline: none;
  margin: 5px;
  color: ${props => props.iconsColor};
  font-size: 16px;
  font-family: 'Roboto';
  text-align: center;
  cursor: pointer;
  margin-top: 5px;
`
export const Dislikes = styled(Likes)``
export const Save = styled(Likes)``

export const HorizontalLine = styled.hr`
  width: 90%;
  color: #909090;
  margin-left: 10px;
  margin-right: 10px;
`
