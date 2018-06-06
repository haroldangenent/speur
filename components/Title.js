import React from 'react'
import { Text } from 'react-native'

export default ({ children }) => (
  <Text style={{
    color: 'white',
    fontFamily: 'work-sans-extra-bold',
    fontSize: 56,
    marginBottom: 25,
  }}>{children}</Text>
)
