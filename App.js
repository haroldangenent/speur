import React from 'react'
import { Text, View, Image, StatusBar, Animated, Easing } from 'react-native'
import { Font, LinearGradient } from 'expo'
import SwipeableViews from 'react-swipeable-views-native'
import Home from './Home'
import StartLocation from './StartLocation'

export default class App extends React.Component {
  components = []
  state = { fontsLoaded: false }
  screens = [Home, StartLocation]

  transition(index, indexLatest) {
    if (typeof this.components[indexLatest].transitionOut === "function") { 
      this.components[indexLatest].transitionOut()
    }

    if (typeof this.components[index].transitionIn === "function") { 
      this.components[index].transitionIn()
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'work-sans-extra-bold': require('./fonts/WorkSans-ExtraBold.ttf'),
      'work-sans-semi-bold': require('./fonts/WorkSans-SemiBold.ttf'),
      'work-sans-extra-light': require('./fonts/WorkSans-ExtraLight.ttf'),
    })

    this.setState({ fontsLoaded: true })
  }

  render() {
    return (
      <LinearGradient colors={['#ff3c64', '#fa6e55']} start={[0.0, 0.0]} end={[0.75, 0.75]} style={{ flex: 1 }}>
        <StatusBar hidden={true} />

        {this.state.fontsLoaded && (
          <SwipeableViews onChangeIndex={(index, indexLatest) => this.transition(index, indexLatest)}>
            {this.screens.map((Component, index) => (
              <Component key={index} ref={component => this.components.push(component)} />
            ))}
          </SwipeableViews>
        )}
      </LinearGradient>
    )
  }
}
