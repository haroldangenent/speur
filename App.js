import React from 'react'
import { StatusBar } from 'react-native'
import { Font, LinearGradient } from 'expo'
import SwipeableViews from 'react-swipeable-views-native'
import Home from './Home'
import StartLocation from './StartLocation'
import EndLocation from './EndLocation'
import PreAssignments from './PreAssignments'
import { colors } from './variables'

export default class App extends React.Component {
  components = [
    { View: Home },
    {
      View: StartLocation,
      props: {
        onChange: startLocation => this.setState({ startLocation })
      },
    },
    {
      View: EndLocation,
      props: {
        onChange: endLocation => this.setState({ endLocation }),
        startLocation: () => this.state.startLocation,
      },
      validate: () => this.state.startLocation
    },
    {
      View: PreAssignments,
      validate: () => this.state.endLocation
    },
  ]
  screens = []
  state = {
    disableMode: false,
    fontsLoaded: false,
    endLocation: false,
    startLocation: false,
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
      <LinearGradient colors={[colors.pink, colors.orange]} start={[0.0, 0.0]} end={[0.75, 0.75]} style={{ flex: 1 }}>
        <StatusBar hidden={true} />

        {this.state.fontsLoaded && (
          <SwipeableViews disabled={this.state.disableMode} onChangeIndex={(index, indexLatest) => this.transition(index, indexLatest)}>
            {this.components.filter(({ validate }) => !validate || validate()).map(({ View, props }, index) => (
              <View
                key={index}
                setDisableMode={disableMode => this.setState({ disableMode })}
                ref={component => this.screens[index] = component}
                {...props}
              />
            ))}
          </SwipeableViews>
        )}
      </LinearGradient>
    )
  }

  transition(index, indexLatest) {
    if (typeof this.screens[indexLatest].transitionOut === "function") { 
      this.screens[indexLatest].transitionOut(index - indexLatest < 0)
    }

    if (typeof this.screens[index].transitionIn === "function") { 
      this.screens[index].transitionIn(index - indexLatest < 0)
    }
  }
}
