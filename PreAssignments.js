import React from 'react'
import { View } from 'react-native'
import Container from './components/Container'
import AnimatedImage from './components/AnimatedImage'
import Title from './components/Title'
import Subtitle from './components/Subtitle'
import SwipeIcon from './components/SwipeIcon'

export default class PreAssignments extends React.Component {
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
          <Title>Leuk!</Title>
          <Subtitle>Nu nog wat opdrachten of hints toevoegen</Subtitle>
        </View>

        <SwipeIcon />

        <AnimatedImage
          source={require('./img/assignments.png')}
          offset={{ bottom: -50, right: -40 }}
          ref={image => this.image = image}
        />
      </Container>
    )
  }
}
