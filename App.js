import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Font, LinearGradient } from 'expo'

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'work-sans-extra-bold': require('./fonts/WorkSans-ExtraBold.ttf'),
    })

    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <LinearGradient colors={['#ff3c64', '#fa6e55']} start={[0.0, 0.0]} end={[0.75, 0.75]} style={{
        flex: 1,
        padding: 30,
        paddingTop: 80,
      }}>
        <Text style={{
          color: 'white',
          fontFamily: this.state.fontLoaded ? 'work-sans-extra-bold' : null,
          fontSize: 56,
        }}>Hallo!</Text>
      </LinearGradient>
    )
  }
}
