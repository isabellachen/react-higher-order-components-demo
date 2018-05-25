import React, { Component } from 'react'
import Wrapper from './wrapper'
import DropDown from './dropdown'

class MistyLake extends Component {

    render() {
        return (
            <div>
                <h1>Misty Lake</h1>
                <div className="sidebar">
                    <p>personal items</p>
                    <DropDown
                        category='personal'
                        options={this.props.options.personal}
                        handleDropdownChange={this.props.handleDropdownChange}
                    />
                    <p>research items</p>
                    <DropDown
                        category='research'
                        options={this.props.options.research}
                        handleDropdownChange={this.props.handleDropdownChange}
                    />
                </div>
            </div>
        )
    }
}

export default Wrapper(MistyLake)