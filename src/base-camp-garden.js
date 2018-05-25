import React, { Component } from 'react'
import Wrapper from './wrapper'
import DropDown from './dropdown'

class BaseCampGarden extends Component {


    render () {
        return ( 
            <div>
                <h1>Base Camp Garden</h1>
                <div className="sidebar">
                    <DropDown 
                        category='personal'
                        options={this.props.options.personal}
                        handleDropdownChange={this.props.handleDropdownChange}
                    />
                </div>
            </div>
        )
    }
}

export default Wrapper(BaseCampGarden)