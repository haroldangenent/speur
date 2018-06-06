import React from 'react'
import { View } from 'react-native'

export default ({ children, style }) => (
  <View style={[{
    padding: 30,
    paddingBottom: 60,
    paddingTop: 80,
  }, style]}>{children}</View>
)
