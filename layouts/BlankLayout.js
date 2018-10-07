import { Component } from 'react'

export default class BlankLayout extends Component {
  constructor(props) {
    super(props)
    this.content = null
  }

  render() {
    return (
      <div className="container mt-4">
        {this.content}
      </div>
    )
  }
}