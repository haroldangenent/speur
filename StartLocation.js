import React from 'react'
import PickLocation from './PickLocation'

export default class StartLocation extends React.Component {
  transitionIn(fromRight) {
    this.picker.transitionIn(fromRight)
  }

  transitionOut(toLeft) {
    this.picker.transitionOut(toLeft)
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
