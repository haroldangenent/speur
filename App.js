import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import { Font, LinearGradient } from 'expo'
import SwipeableViews from 'react-swipeable-views-native'

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
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

        <SwipeableViews>
          <View style={{
            flex: 1,
            justifyContent: 'space-between',
            padding: 30,
            paddingBottom: 60,
            paddingTop: 80,
          }}>
            <View>
              <Text style={{
                color: 'white',
                fontFamily: this.state.fontsLoaded ? 'work-sans-extra-bold' : null,
                fontSize: 56,
                marginBottom: 25,
              }}>Hallo!</Text>
              <Text style={{
                color: 'white',
                fontFamily: this.state.fontsLoaded ? 'work-sans-extra-light' : null,
                fontSize: 48,
                lineHeight: 57,
                width: 300,
              }}>Zullen we een leuke spørtocht maken?</Text>
            </View>

            <View>
              <Text style={{
                color: 'white',
                fontFamily: this.state.fontsLoaded ? 'work-sans-semi-bold' : null,
                fontSize: 26,
                lineHeight: 34,
                marginBottom: 15,
                width: 180,
              }}>Swipe om te beginnen</Text>
              <View style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
                <Image source={require('./img/swipe-left.png')} style={{
                  marginRight: 15,
                }} />
                <Image source={require('./img/hand.png')} />
              </View>
            </View>

            <Image source={require('./img/speuren.png')} style={{
              bottom: -30,
              position: 'absolute',
              right: -75,
            }} />
          </View>
          <View style={{
            padding: 30,
            paddingBottom: 60,
            paddingTop: 80,
          }}>
            <Text style={{
              color: 'white',
              fontFamily: this.state.fontsLoaded ? 'work-sans-extra-bold' : null,
              fontSize: 56,
              marginBottom: 25,
            }}>Wat is je startpunt?</Text>
          </View>
        </SwipeableViews>
      </LinearGradient>
    )
  }
}
