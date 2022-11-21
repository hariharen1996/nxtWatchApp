import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
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
import './index.css'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    error: '',
    showError: false,
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = event => {
    if (event.target.checked) {
      this.setState({showPassword: true})
    } else {
      this.setState({showPassword: false})
    }
  }

  successData = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  errorData = errorMsg => {
    this.setState({error: errorMsg, showError: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const loginDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(loginDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok === true) {
      this.successData(data.jwt_token)
    } else {
      this.errorData(data.error_msg)
    }
  }

  render() {
    const {showError, error, username, password, showPassword} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {showTheme} = value

          const loginBg = showTheme ? 'bgDark' : 'bgLight'
          const loginText = showTheme ? 'textDark' : 'textLight'

          return (
            <LoginContainer loginBg={loginBg}>
              <LoginCard>
                <Form onSubmit={this.submitForm}>
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
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                  <LoginLabel htmlFor="username" loginText={loginText}>
                    Password
                  </LoginLabel>
                  <LoginInput
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                  <PasswordCheck>
                    <ShowPasswordInput
                      type="checkbox"
                      id="show"
                      name="showPassword"
                      onChange={this.onShowPassword}
                    />
                    <PasswordLabel htmlFor="show" loginText={loginText}>
                      Show Password
                    </PasswordLabel>
                  </PasswordCheck>
                  <Button type="submit">Login</Button>
                  {showError && <p className="error">*{error}</p>}
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
