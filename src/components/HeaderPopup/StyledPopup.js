import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HamBurgerButton = styled.button`
  background: none;
  width: 42px;
  height: 35px;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const PopupModal = styled.div`
  width: 100%;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  @media screen and (min-width: 768px) {
    max-width: 1110px;
  }
`
export const CloseBtn = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: none;
  margin-top: 20px;
  outline: none;
  cursor: pointer;
`
export const PopupNavItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding-left: 0px;
`
export const PopupNavLists = styled.li`
  list-style: none;
`
export const NavLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #181818;
  text-decoration: none;
  margin-bottom: 32px;
  gap: 15px;
`
export const NavText = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  margin: 0px;
  margin-left: 8px;
`
