import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-right: 0px;
  gap: 20px;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    align-items: flex-start;
    padding-right: 50px;
  }
`
export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  max-width: 250px;
  min-width: 250px;
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
  margin-top: 30px;
`
