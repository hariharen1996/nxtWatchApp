import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import {
  LoginContainer,
  LoginCard,
  LogoImage,
  LoginLabel,
  LoginInput,
  Form,
  Button,
  ShowPasswordInput,
  PasswordLabel,
  PasswordCheck,
} from './StyledLogin'

class LoginRoute extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme} = value

          const loginBg = showTheme ? 'bgDark' : 'bgLight'
          const loginText = showTheme ? 'textDark' : 'textLight'

          return (
            <LoginContainer loginBg={loginBg}>
              <LoginCard>
                <Form>
                  <LogoImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                  <LoginLabel htmlFor="username" loginText={loginText}>
                    Username
                  </LoginLabel>
                  <LoginInput
                    type="text"
                    id="username"
                    placeholder="Username"
                  />
                  <LoginLabel htmlFor="username" loginText={loginText}>
                    Password
                  </LoginLabel>
                  <LoginInput
                    type="text"
                    id="password"
                    placeholder="Password"
                  />
                  <PasswordCheck>
                    <ShowPasswordInput
                      type="checkbox"
                      id="show"
                      name="showPassword"
                    />
                    <PasswordLabel htmlFor="show" loginText={loginText}>
                      Show Password
                    </PasswordLabel>
                  </PasswordCheck>
                  <Button type="button">Login</Button>
                </Form>
              </LoginCard>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default LoginRoute
