import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Button from './components/Button'
import Container from './components/Container'
import Title from './components/Title'
import { MapView } from 'expo'

export default class StartLocation extends React.Component {
  state = { mapActive: false }

  setMapMode(active = true) {
    this.setState({ mapActive: active })

    if (active) {
      this.props.onDisableSwipe()
    } else {
      this.props.onEnableSwipe()
    }
  }

  render() {
    return (
      <View style={{ flexGrow: 1 }}>
        <Container style={this.state.mapActive ? {
          padding: 20,
          paddingBottom: 10,
          paddingTop: 10,
        } : {
          flexBasis: '50%',
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <Title style={this.state.mapActive ? {
              fontSize: 28,
              lineHeight: 33,
              marginBottom: 0,
            } : {}}>{this.state.mapActive ? 'Startpunt' : 'Wat is je startpunt?'}</Title>
            {this.state.mapActive && (
              <Button onPress={() => this.setMapMode(false)}>Ok</Button>
            )}
          </View>
        </Container>
        <View style={{
          flexGrow: 1,
          shadowColor: 'black',
          shadowRadius: 10,
          shadowOpacity: 0.1,
        }}>
          {!this.state.mapActive && (
            <TouchableOpacity onPress={() => this.setMapMode()} style={{
              height: '100%',
              position: 'absolute',
              width: '100%',
              zIndex: 1,
            }}><View></View></TouchableOpacity>
          )}
          <MapView style={{ flexGrow: 1 }} />
        </View>
      </View>
    )
  }
}
