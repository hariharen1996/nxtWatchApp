import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.03);
  padding: 15px;
`
export const LogoContainer = styled.div`
  margin: 5px;
`
export const LogoImage = styled.img`
  width: 160px;
  height: 30px;
`
export const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  gap: 15px;
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`

export const NavLinksContainer = styled.div``

export const NavLinks = styled.li`
  list-style: none;
  font-family:"Roboto"
  font-size:14px;
  font-weight:500;
`

export const HeaderButton = styled.button`
  background: none;
  font-size: 14px;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: 600;
  border: none;
`

export const LogoutButton = styled(HeaderButton)`
  padding: 5px 16px;
  border: ${props => props.btnBorder};
  color: ${props => props.btnColor};
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LogoutButtonSm = styled(HeaderButton)`
  padding: 0px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ProfileImage = styled.img`
  width: 25px;
  height: 25px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
