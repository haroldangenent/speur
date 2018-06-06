import React from 'react'
import { Text } from 'react-native'

export default ({ children, style }) => (
  <Text style={[{
    color: 'white',
    fontFamily: 'work-sans-extra-bold',
    fontSize: 56,
    marginBottom: 25,
  }, style]}>{children}</Text>
)
