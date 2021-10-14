import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'
import PropTypes from 'prop-types';

const HelloWorldSquare = requireNativeComponent('HelloWorldSquare', HelloWorldSquareView)

export default class HelloWorldSquareView extends Component {
  render () {
    return <HelloWorldSquare {...this.props} />
  }
}

HelloWorldSquareView.propTypes = {
  exampleProp: PropTypes.string
}