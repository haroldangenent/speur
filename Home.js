import React from 'react'
import { Text, View } from 'react-native'
import Container from './components/Container'
import Title from './components/Title'
import Subtitle from './components/Subtitle'
import AnimatedImage from './components/AnimatedImage'
import SwipeIcon from './components/SwipeIcon'

export default class Home extends React.Component {
  transitionIn(fromRight) {
    this.image.transitionIn(fromRight)
  }

  transitionOut(toLeft) {
    this.image.transitionOut(toLeft)
  }

  render() {
    return (
      <Container style={{
        flex: 1,
        justifyContent: 'space-between',
      }}>
        <View>
          <Title>Hallo!</Title>
          <Subtitle>Zullen we een leuke spørtocht maken?</Subtitle>
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

        <AnimatedImage
          source={require('./img/speuren.png')}
          offset={{ bottom: -30, right: -75 }}
          ref={image => this.image = image}
        />
      </Container>
    )
  }
}
