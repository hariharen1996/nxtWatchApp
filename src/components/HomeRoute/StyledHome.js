import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-right: 0px;

  background-color: ${props => props.bgColor};
  @media screen and (min-width: 800px) {
    flex-direction: row;
    align-items: flex-start;
  }
`
export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  max-width: 200px;
  min-width: 200px;
  height: 100%;
  @media screen and (max-width: 800px) {
    display: none;
  }
`
export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

export const HomeVideoContainer = styled.div`
  margin-top: 20px;
`

export const HomeVideoItems = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
  padding-left: 0px;
  padding-bottom: 20px;
`

export const VideoFailure = styled.div``
export const FailureImage = styled.img`
  width: 100%;
`
export const FailureHeading = styled.h1``
export const FailureMessage = styled.p``
