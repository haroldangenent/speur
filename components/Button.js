import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{
    backgroundColor: 'white',
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 7,
  }}>
    <Text style={{
      color: '#fa6e55',
      fontFamily: 'work-sans-semi-bold',
    }}>{children.toUpperCase()}</Text>
  </TouchableOpacity>
)
