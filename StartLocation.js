import React from 'react'
import PickLocation from './PickLocation'

export default class StartLocation extends React.Component {
  transitionIn() {
    this.picker.transitionIn()
  }

  transitionOut() {
    this.picker.transitionOut()
  }

  render() {
    return <PickLocation
      labels={{
        title: 'Wat is je startpunt?',
        shortTitle: 'Startpunt',
      }}
      onChange={this.props.onChange}
      setDisableMode={this.props.setDisableMode}
      ref={picker => this.picker = picker} />
  }
}
