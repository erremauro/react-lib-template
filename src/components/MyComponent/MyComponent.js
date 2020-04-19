import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MyComponent.css';

class MyComponent extends Component {
  static propTypes = {
    // define your prop types here
  };

  static defaultProps = {
    // define your default props values here
  };

  render() {
    return(
      <div className="MyComponent">
        <h1># MyComponent</h1>
      </div>
    )
  }
}

export default MyComponent;