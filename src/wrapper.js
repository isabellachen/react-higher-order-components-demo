import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions'

export default function (ComposedComponent, componentInfo) {
  class Wrapper extends Component {
        options = {
          personal: ['food pack', 'journal', 'air tank'],
          research: ['microscope', 'video recorder', 'ion detector'],
          defense: ['static shield', 'laser gun', 'nano suit'],
          construction: ['soldering iron', 'nano carbon tubes', 'photovoltaic cells'],
        }

        handleDropdownChange = (category, event) => {
          switch (category) {
          case 'personal':
            this.props.addPersonalItem(event.target.value)
            break
          case 'research':
            this.props.addResearchItem(event.target.value)
            break
          case 'defense':
            this.props.addDefenseItem(event.target.value)
            break
          case 'construction':
            this.props.addConstructionItem(event.target.value)
            break
          default: console.log('no category')
          }
        }

        render () {
          return (
            <ComposedComponent
              {...{ options: this.options }}
              {...{ handleDropdownChange: this.handleDropdownChange }}
              {...this.props}
            />
          )
        }
  }

  const mapStateToProps = (state) => ({
    items: state,
  })

  const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actions, dispatch),
  })

  return connect(mapStateToProps, mapDispatchToProps)(Wrapper)
}