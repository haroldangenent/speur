import React from 'react'
import { View } from 'react-native'

export default ({ children, style }) => (
  <View style={[style, {
    padding: 30,
    paddingBottom: 60,
    paddingTop: 80,
  }]}>{children}</View>
)
