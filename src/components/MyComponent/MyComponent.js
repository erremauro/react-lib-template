import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './MyComponent.css'

class MyComponent extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  static defaultProps = {
    // define your default props values here
  };

  render() {
    return (
      <div className='MyComponent'>
        {this.props.children}
      </div>
    )
  }
}

export default MyComponent
