import { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      remember: false,
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleChangeRemember = this.handleChangeRemember.bind(this)
    this.submitLogin = this.submitLogin.bind(this)
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
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
    console.log(this.state.email, this.state.password, this.state.remember)
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
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" value={this.state.email} onChange={this.handleChangeEmail} />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" value={this.state.password} onChange={this.handleChangePassword} />
                  </div>
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" checked={this.state.remember} onChange={this.handleChangeRemember} />
                    <label className="form-check-label"> Remember me</label>
                  </div>
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