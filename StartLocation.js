import React from 'react'
import { Text, View, Image, StatusBar, Animated, Easing } from 'react-native'

export default class StartLocation extends React.Component {
  render() {
    return (
      <View style={{
        padding: 30,
        paddingBottom: 60,
        paddingTop: 80,
      }}>
        <Text style={{
          color: 'white',
          fontFamily: 'work-sans-extra-bold',
          fontSize: 56,
          marginBottom: 25,
        }}>Wat is je startpunt?</Text>
      </View>
    )
  }
}
