import React from 'react'
import { View, Text, Dimensions } from 'react-native'

export default class Assignment extends React.Component {
  render() {
    const { height, width } = Dimensions.get('window')

    return (
      <View style={{
        backgroundColor: 'white',
        borderRadius: 3,
        bottom: '100%',
        marginBottom: 10,
        left: -(width / 2) + 55,
        padding: 20,
        position: 'absolute',
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 0.1,
        width: width - 60,
      }}><Text>Nieuwe opdracht</Text></View>
    )
  }
}
