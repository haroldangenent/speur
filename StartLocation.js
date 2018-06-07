import React from 'react'
import PickLocation from './PickLocation'

export default class StartLocation extends React.Component {
  transitionIn() {
    this.picker.transitionIn()
  }

  transitionOut() {
    this.picker.transitionIn()
  }

  render() {
    return <PickLocation
      labels={{
        title: 'Wat is je startpunt?',
        shortTitle: 'Startpunt',
      }}
      onDisableSwipe={this.props.onDisableSwipe}
      onEnableSwipe={this.props.onEnableSwipe}
      ref={picker => this.picker = picker} />
  }
}
