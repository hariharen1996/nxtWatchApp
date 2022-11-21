import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.bgColor};
`
export const SidebarMenu = styled.div`
  align-self: flex-start;
  margin: 10px;
`
export const SidebarItems = styled.ul`
  padding-left: 0px;
`
export const SidebarLists = styled.li`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  width: 100%;
  cursor: pointer;
`
export const MenuText = styled.p`
  color: ${props => props.menuColor};
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  &:hover {
    color: #ff0000;
    transition: 0.4s;
  }
`
export const SidebarContact = styled.div`
  align-self: flex-start;
  margin: 10px;
`
export const ContactHeading = styled.h1`
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  text-transform: uppercase;
  color: ${props => props.menuColor};
  font-weight: 500;
`
export const SocialImage = styled.div`
  display: flex;
`

export const Image = styled.img`
  width: 25px;
  height: 25px;
  margin: 5px;
  align-self: flex-start;
`

export const ContactDescription = styled.p`
  font-size: 13px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.menuColor};
  line-height: 1.4;
`
