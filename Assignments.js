import React from 'react'
import { View, TouchableOpacity, Animated, Easing } from 'react-native'
import Button from './components/Button'
import Container from './components/Container'
import Title from './components/Title'
import SwipeIcon from './components/SwipeIcon'
import { MapView } from 'expo'

export default class Assignments extends React.Component {
  state = {
    mapTranslateX: new Animated.Value(200),
    locations: [],
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

    this.props.setDisableMode(true)
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

  addLocation(coordinate) {
    this.setState({ locations: [...this.state.locations, {
      coordinate
    }] })
  }

  render() {
    return (
      <View style={{ flexGrow: 1 }}>
        <Container style={{
          padding: 20,
          paddingBottom: 10,
          paddingTop: 10,
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <Title style={{
              fontSize: 28,
              lineHeight: 33,
              marginBottom: 0,
            }}>Opdrachten</Title>
            <Button>Klaar</Button>
          </View>
        </Container>
        <Animated.View style={{
          flexGrow: 1,
          shadowColor: 'black',
          shadowRadius: 10,
          shadowOpacity: 0.1,
          transform: [{ translateX: this.state.mapTranslateX }],
        }}>          
          <MapView
            initialRegion={{
              latitude: this.props.startLocation().latitude,
              longitude: this.props.startLocation().longitude,
              latitudeDelta: 0.04,
              longitudeDelta: 0.04,
            }}
            onPress={event => this.addLocation(event.nativeEvent.coordinate)}
            showsUserLocation={true}
            style={{ flexGrow: 1 }}
          >
            <MapView.Marker coordinate={this.props.startLocation()} image={require('./img/marker.png')} style={{ opacity: 0.5 }} />
            <MapView.Marker coordinate={this.props.endLocation()} image={require('./img/end.png')} style={{ opacity: 0.5 }} />

            {this.state.locations.map((location, index) => (
              <MapView.Marker key={index} coordinate={location.coordinate} image={require('./img/marker.png')} draggable />
            ))}
          </MapView>
        </Animated.View>
      </View>
    )
  }
}
