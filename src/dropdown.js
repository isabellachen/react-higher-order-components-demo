import React, { Component } from 'react'

class DropDown extends Component {

    renderDropdownList = () => {
        return this.props.options.map(item => {
            return (<option key={item}>{item}</option>)
        })
    }

    render () {
        return (
            <ul>
                <select value={this.props.category} 
                    onChange={(event) => this.props.handleDropdownChange(this.props.category, event)}
                >
                    <option>SELECT</option>
                    {this.renderDropdownList()}
                </select>
            </ul>
        )
    }
}

export default DropDown