import React from 'react'
import { Text, View } from 'react-native'
import { container } from './styles'

export default class StartLocation extends React.Component {
  render() {
    return (
      <View style={container}>
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
