import React, { Component } from 'react'

class Triangle extends Component<any, any> {
  componentDidMount() {
    ;(this.refs.triangle as any).setAttribute('style', this.props.output)
  }

  componentDidUpdate() {
    ;(this.refs.triangle as any).setAttribute('style', this.props.output)
  }

  render() {
    return (
      <div className="triangle-wrapper">
        <div ref="triangle" className="triangle"></div>
      </div>
    )
  }
}

export default Triangle
