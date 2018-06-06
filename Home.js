import React from 'react'
import { Text, View, Image, StatusBar, Animated, Easing } from 'react-native'

export default class Home extends React.Component {
  state = {
    speurTranslateX: new Animated.Value(0),
  }

  transitionIn() {
    Animated.timing(this.state.speurTranslateX, {
      duration: 500,
      easing: Easing.elastic(),
      toValue: 0,
    }).start()
  }

  transitionOut() {
    Animated.timing(this.state.speurTranslateX, {
      duration: 150,
      easing: Easing.back(),
      toValue: -75,
    }).start()
  }

  render() {
    return (
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
            fontFamily: 'work-sans-extra-bold',
            fontSize: 56,
            marginBottom: 25,
          }}>Hallo!</Text>
          <Text style={{
            color: 'white',
            fontFamily: 'work-sans-extra-light',
            fontSize: 48,
            lineHeight: 57,
            width: 300,
          }}>Zullen we een leuke spørtocht maken?</Text>
        </View>

        <View>
          <Text style={{
            color: 'white',
            fontFamily: 'work-sans-semi-bold',
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

        <Animated.Image source={require('./img/speuren.png')} style={{
          bottom: -30,
          position: 'absolute',
          right: -75,
          transform: [{ translateX: this.state.speurTranslateX }],
        }} />
      </View>
    )
  }
}
