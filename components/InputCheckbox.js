import { Component } from 'react'

export default class InputCheckbox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" checked={this.props.remember} onChange={this.props.onChange} />
        <label className="form-check-label"> {this.props.label}</label>
      </div>
    )
  }
}