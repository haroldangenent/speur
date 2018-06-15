import React from 'react'
import { Animated, Easing } from 'react-native'

export default class AnimatedImage extends React.Component {
  state = { translateX: new Animated.Value(0) }

  transitionIn() {
    Animated.timing(this.state.translateX, {
      duration: 500,
      easing: Easing.elastic(),
      toValue: 0,
    }).start()
  }

  transitionOut() {
    Animated.timing(this.state.translateX, {
      duration: 150,
      easing: Easing.back(),
      toValue: this.props.offset.right,
    }).start()
  }

  render() {
    return <Animated.Image source={this.props.source} style={{
      bottom: this.props.offset.bottom,
      position: 'absolute',
      right: this.props.offset.right,
      transform: [{ translateX: this.state.translateX }],
    }} />
  }
}
