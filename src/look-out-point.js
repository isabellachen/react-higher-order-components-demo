import React, { Component } from 'react'
import Wrapper from './wrapper'
import DropDown from './dropdown'

class LookoutPoint extends Component {
  render () {
    return (
      <div>
        <h1>Lookout Point</h1>
        <div className="sidebar">
          <DropDown
            category="personal"
            options={this.props.options.personal}
            handleDropdownChange={this.props.handleDropdownChange}
          />
          <DropDown
            category="construction"
            options={this.props.options.construction}
            handleDropdownChange={this.props.handleDropdownChange}
          />
        </div>
      </div>
    )
  }
}

export default Wrapper(LookoutPoint)
