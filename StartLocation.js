import React from 'react'
import { Text } from 'react-native'
import Container from './components/Container'
import Title from './components/Title'

export default class StartLocation extends React.Component {
  render() {
    return (
      <Container>
        <Title>Wat is je startpunt?</Title>
      </Container>
    )
  }
}
