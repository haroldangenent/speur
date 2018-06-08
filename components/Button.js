import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { colors } from '../variables'

export default ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{
    backgroundColor: 'white',
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 7,
  }}>
    <Text style={{
      color: colors.orange,
      fontFamily: 'work-sans-semi-bold',
    }}>{children.toUpperCase()}</Text>
  </TouchableOpacity>
)
