import React, { Component } from 'react'
import Wrapper from './wrapper'
import DropDown from './dropdown'

class AbandonedTemple extends Component {
  render () {
    return (
      <div>
        <h1>Abandoned Temple</h1>
        <div className="sidebar">
          <p>personal items</p>
          <DropDown
            category="personal"
            options={this.props.options.personal}
            handleDropdownChange={this.props.handleDropdownChange}
          />
          <p>defense items</p>
          <DropDown
            category="defense"
            options={this.props.options.defense}
            handleDropdownChange={this.props.handleDropdownChange}
          />
        </div>
      </div>
    )
  }
}

export default Wrapper(AbandonedTemple)
