import React from 'react'
import { View, TouchableOpacity, Animated, Easing } from 'react-native'
import Button from './components/Button'
import Container from './components/Container'
import Title from './components/Title'
import SwipeIcon from './components/SwipeIcon'
import { MapView } from 'expo'

export default class PickLocation extends React.Component {
  state = {
    mapActive: false,
    mapTranslateX: new Animated.Value(200),
    location: null
  }

  componentWillMount() {
    if (!this.props.initialRegion) {
      navigator.geolocation.getCurrentPosition(position => this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
      }))
    }
  }

  transitionIn(fromRight) {
    const start = () => 
      Animated.timing(this.state.mapTranslateX, {
        duration: 400,
        easing: Easing.elastic(),
        toValue: 0,
      }).start()

    if (fromRight) {
      this.setState({ mapTranslateX: new Animated.Value(-200) }, start)
    } else {
      start()
    }
  }

  transitionOut(toLeft) {
    const start = toValue =>
      Animated.timing(this.state.mapTranslateX, {
        duration: 150,
        easing: Easing.back(),
        toValue,
      }).start()

    if (toLeft) {
      start(200)
    } else {
      start(-200)
    }
  }

  setLocation(location) {
    this.setState({ location })

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(location)
    }
  }

  setMapMode(active = true) {
    this.setState({ mapActive: active })

    if (active) {
      this.props.setDisableMode(true)
    } else {
      this.props.setDisableMode(false)
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
            } : {}}>{this.state.mapActive ? this.props.labels.shortTitle : this.props.labels.title}</Title>
            {this.state.mapActive && (
              <Button onPress={() => this.setMapMode(false)}>Ok</Button>
            )}
          </View>

          {!this.state.mapActive && this.state.location && (
            <SwipeIcon />
          )}
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
            initialRegion={(this.props.initialRegion || this.state.userLocation) && {
              ...(this.props.initialRegion || this.state.userLocation),
              latitudeDelta: 0.04,
              longitudeDelta: 0.04,
            }}
            onPress={event => this.setLocation(event.nativeEvent.coordinate)}
            showsUserLocation={true}
            style={{ flexGrow: 1 }}
          >
            {this.props.otherMarkers && this.props.otherMarkers.map((location, index) => (
              <MapView.Marker key={index} coordinate={location} image={require('./img/marker.png')} />
            ))}
            {this.state.location && (
              <MapView.Marker coordinate={this.state.location} image={this.props.marker || require('./img/marker.png')} draggable />
            )}
          </MapView>
        </Animated.View>
      </View>
    )
  }
}
