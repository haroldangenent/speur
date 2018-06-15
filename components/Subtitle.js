import React from 'react'
import { Text } from 'react-native'

export default ({ children, style }) => (
  <Text style={[{
    color: 'white',
    fontFamily: 'work-sans-extra-light',
    fontSize: 48,
    lineHeight: 57,
    width: 300,
  }, style]}>{children}</Text>
)
