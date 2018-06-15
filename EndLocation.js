import React from 'react'
import PickLocation from './PickLocation'

export default class EndLocation extends React.Component {
  transitionIn(fromRight) {
    this.picker.transitionIn(fromRight)
  }

  transitionOut(toLeft) {
    this.picker.transitionOut(toLeft)
  }

  render() {
    return <PickLocation
      labels={{
        title: 'Wat is je eindpunt?',
        shortTitle: 'Eindpunt',
      }}
      marker={require('./img/end.png')}
      onChange={this.props.onChange}
      setDisableMode={this.props.setDisableMode}
      ref={picker => this.picker = picker} />
  }
}
