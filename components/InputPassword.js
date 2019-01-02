import { Component } from 'react'

export default class InputPassword extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="form-group">
        <label>{this.props.label}</label>
        <input type="password" className="form-control" value={this.props.value} onChange={this.props.onChange} />
      </div>
    )
  }
}