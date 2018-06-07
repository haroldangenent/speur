import React from 'react'
import { View, Image } from 'react-native'

export default ({ children, style }) => (
  <View style={{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  }}>
    <Image source={require('../img/swipe-left.png')} style={{
      marginRight: 15,
    }} />
    <Image source={require('../img/hand.png')} />
  </View>
)
