import React from 'react'
import { Text, View, Animated, Easing } from 'react-native'
import Container from './components/Container'
import Title from './components/Title'
import SwipeIcon from './components/SwipeIcon'

const imageOffset = 75

export default class Home extends React.Component {
  state = { speurTranslateX: new Animated.Value(0) }

  transitionIn() {
    Animated.timing(this.state.speurTranslateX, {
      duration: 500,
      easing: Easing.elastic(),
      toValue: 0,
    }).start()
  }

  transitionOut() {
    Animated.timing(this.state.speurTranslateX, {
      duration: 150,
      easing: Easing.back(),
      toValue: -imageOffset,
    }).start()
  }

  render() {
    return (
      <Container style={{
        flex: 1,
        justifyContent: 'space-between',
      }}>
        <View>
          <Title>Hallo!</Title>
          <Text style={{
            color: 'white',
            fontFamily: 'work-sans-extra-light',
            fontSize: 48,
            lineHeight: 57,
            width: 300,
          }}>Zullen we een leuke spørtocht maken?</Text>
        </View>

        <View>
          <Text style={{
            color: 'white',
            fontFamily: 'work-sans-semi-bold',
            fontSize: 26,
            lineHeight: 34,
            marginBottom: 15,
            width: 180,
          }}>Swipe om te beginnen</Text>
          <SwipeIcon />
        </View>

        <Animated.Image source={require('./img/speuren.png')} style={{
          bottom: -30,
          position: 'absolute',
          right: -imageOffset,
          transform: [{ translateX: this.state.speurTranslateX }],
        }} />
      </Container>
    )
  }
}
