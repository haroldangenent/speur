import React from 'react'
import PickLocation from './PickLocation'

export default class EndLocation extends React.Component {
  transitionIn() {
    this.picker.transitionIn()
  }

  transitionOut() {
    this.picker.transitionOut()
  }

  render() {
    return <PickLocation
      labels={{
        title: 'Wat is je eindpunt?',
        shortTitle: 'Eindpunt',
      }}
      onDisableSwipe={this.props.onDisableSwipe}
      onEnableSwipe={this.props.onEnableSwipe}
      ref={picker => this.picker = picker} />
  }
}
