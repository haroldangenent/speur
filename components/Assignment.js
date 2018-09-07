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
        marginBottom: 20,
        left: -(width / 2) + 55,
        padding: 20,
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 0.1,
        width: width - 60,
      }}>
        <Text>Nieuwe opdracht</Text>
        <View style={{
          bottom: 0,
          borderStyle: 'solid',
          borderLeftWidth: 10,
          borderRightWidth: 10,
          borderTopWidth: 12,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderTopColor: 'white',
          left: (width / 2) - 40,
          position: 'absolute',
          transform: [{ translateY: 12 }],
        }} />
      </View>
    )
  }
}
