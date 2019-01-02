import { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',
    }
    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword1 = this.handleChangePassword1.bind(this)
    this.handleChangePassword2 = this.handleChangePassword2.bind(this)
    this.submitSignup = this.submitSignup.bind(this)
  }

  handleChangeUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.email
    })
  }

  handleChangePassword1(event) {
    this.setState({
      password1: event.target.password1
    })
  }

  handleChangePassword2(event) {
    this.setState({
      password2: event.target.password2
    })
  }

  submitSignup(event) {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div className="container mt-4">
        <Head>
          <title key="headTitle">Signup - CJ Property</title>
        </Head>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Sign Up</h3>
                <form method="POST" onSubmit={this.submitSignup} noValidate>
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" value={this.state.username} onChange={this.handleChangeUsername} />
                    <small className="form-text text-muted">
                      Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
                    </small>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" value={this.state.email} onChange={this.handleChangeEmail} />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" value={this.state.password1} onChange={this.handleChangePassword1} />
                    <small class="form-text text-muted">
                      <ul>
                        <li>Your password can't be too similar to your other personal information.</li>
                        <li>Your password must contain at least 8 characters.</li>
                        <li>Your password can't be a commonly used password.</li>
                        <li>Your password can't be entirely numeric.</li>
                      </ul>
                    </small>
                  </div>
                  <div className="form-group">
                    <label>Password Confirmation</label>
                    <input type="password" className="form-control" value={this.state.password2} onChange={this.handleChangePassword2} />
                    <small class="form-text text-muted">
                      Enter the same password as before, for verification.
                    </small>
                  </div>
                  <button type="submit" className="btn btn-primary">Create an account</button>
                </form>
              </div>
              <div className="card-footer text-muted text-center">
                Already have an account? <Link href="/login"><a>Login</a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup