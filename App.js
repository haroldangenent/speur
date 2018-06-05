import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Font } from 'expo'

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
      <View style={{
        backgroundColor: '#fff',
        padding: 30,
        paddingTop: 80,
      }}>
        <Text style={{
          fontFamily: this.state.fontLoaded ? 'work-sans-extra-bold' : null,
          fontSize: 56,
        }}>Hallo!</Text>
      </View>
    )
  }
}
