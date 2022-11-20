import {Component} from 'react'
import HeaderRoute from '../HeaderRoute/index'
import Sidebar from '../Sidebar/index'
import {HomeContainer, SidebarContainer, HomeContent} from './StyledHome'

class HomeRoute extends Component {
  render() {
    return (
      <>
        <HeaderRoute />
        <HomeContainer>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
          <HomeContent>Content</HomeContent>
        </HomeContainer>
      </>
    )
  }
}

export default HomeRoute
