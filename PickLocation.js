import React from 'react'
import { View, TouchableOpacity, Text, Animated, Easing } from 'react-native'
import Button from './components/Button'
import Container from './components/Container'
import Title from './components/Title'
import { MapView } from 'expo'

export default class PickLocation extends React.Component {
  state = {
    mapActive: false,
    mapTranslateX: new Animated.Value(200),
    location: null
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(position => this.setState({
      userLocation: {
        latitude: position.coords.latitude,
        latitudeDelta: 0.04,
        longitude: position.coords.longitude,
        longitudeDelta: 0.04,
      },
    }))
  }

  transitionIn() {
    Animated.timing(this.state.mapTranslateX, {
      duration: 400,
      easing: Easing.elastic(),
      toValue: 0,
    }).start()
  }

  transitionOut() {
    Animated.timing(this.state.mapTranslateX, {
      duration: 150,
      easing: Easing.back(),
      toValue: 200,
    }).start()
  }

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
        <Animated.View style={{
          flexGrow: 1,
          shadowColor: 'black',
          shadowRadius: 10,
          shadowOpacity: 0.1,
          transform: [{ translateX: this.state.mapTranslateX }],
        }}>
          {!this.state.mapActive && (
            <TouchableOpacity onPress={() => this.setMapMode()} style={{
              height: '100%',
              position: 'absolute',
              width: '100%',
              zIndex: 1,
            }}><View></View></TouchableOpacity>
          )}
          
          <MapView
            initialRegion={this.state.userLocation}
            onPress={event => this.setState({ location: event.nativeEvent.coordinate })}
            showsUserLocation={true}
            style={{ flexGrow: 1 }}
          >
            {this.state.location && (
              <MapView.Marker coordinate={this.state.location} />
            )}
          </MapView>
        </Animated.View>
      </View>
    )
  }
}
