import { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
// import Form from 'react-validation/build/form'
// import Input from 'react-validation/build/input'
// import { required, email } from '../utils/validators'
import InputText from '../components/InputText'
import InputPassword from '../components/InputPassword'
import InputCheckbox from '../components/InputCheckbox'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      remember: false,
      formErrors: {
        email: [],
        password: [],
      }
    }
    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleChangeRemember = this.handleChangeRemember.bind(this)
    this.submitLogin = this.submitLogin.bind(this)
  }

  handleChangeUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleChangeRemember(event) {
    this.setState({
      remember: event.target.checked
    })
  }

  submitLogin(event) {
    event.preventDefault()
    console.log(this.state.username, this.state.password, this.state.remember)
  }

  render() {
    return (
      <div className="container mt-4">
        <Head>
          <title key="headTitle">Login - CJ Property</title>
        </Head>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Login</h3>
                <form method="POST" onSubmit={this.submitLogin} noValidate>
                  <InputText label="Username" value={this.state.username} onChange={this.handleChangeUsername} />
                  <InputPassword label="Password" value={this.state.password} onChange={this.handleChangePassword} />
                  <InputCheckbox label=" Remember me" checked={this.state.remember} onChange={this.handleChangeRemember} />
                  <button className="btn btn-primary" type="submit">Login</button>
                </form>
              </div>
              <div className="card-footer text-muted text-center">
                Not registered yet? <Link href="/signup"><a>Sign up</a></Link>
              </div>
            </div>
            <div className="text-center py-2">
              <small>
                <Link href="#"><a className="text-muted">Forgot your password?</a></Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login