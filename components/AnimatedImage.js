import React from 'react'
import { Animated, Easing } from 'react-native'

export default class AnimatedImage extends React.Component {
  state = { translateX: new Animated.Value(0) }

  transitionIn(fromRight) {
    const start = () => {
      Animated.timing(this.state.translateX, {
        duration: 500,
        easing: Easing.elastic(),
        toValue: 0,
      }).start()
    }

    if (fromRight) {
      start()
    } else {
      this.setState({ translateX: new Animated.Value(200) }, start)
    }
  }

  transitionOut(toLeft) {
    const start = toValue => {
      Animated.timing(this.state.translateX, {
        duration: 150,
        easing: Easing.back(),
        toValue: toValue,
      }).start()
    }

    if (toLeft) {
      start(200)
    } else {
      start(this.props.offset.right)
    }
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
