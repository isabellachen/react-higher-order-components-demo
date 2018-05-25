import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'

import BaseCampGarden from './base-camp-garden'
import LookoutPoint from './look-out-point'
import MistyLake from './misty-lake'
import AbandonedTemple from './abandoned-temple'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      location: ''
    }
  }

  handleOpenModal = (location, event) => {
    this.setState({
      showModal: true,
      location
    })
  }

  handleCloseModal = (event) => {
    this.setState({
      showModal: false
    })
  }

  renderLocationComponent = () => {
    switch (this.state.location) {
      case 'base camp garden':
        return <BaseCampGarden />
      case 'misty lake':
        return <MistyLake />
      case 'lookout point':
        return <LookoutPoint />
      case 'abandoned temple':
        return <AbandonedTemple />
      default: return (<div>No location specified</div>)
    }
  }

  render() {
    return (
      <div>
        <h1>Mission Page</h1>
        <h2>Choose Mission</h2>
        <button onClick={(e) => this.handleOpenModal('base camp garden', e)}>Basecamp Garden</button>
        <button onClick={(e) => this.handleOpenModal('misty lake', e)}>Misty Lake</button>
        <button onClick={(e) => this.handleOpenModal('lookout point', e)}>Lookout Point</button>
        <button onClick={(e) => this.handleOpenModal('abandoned temple', e)}>Abandoned Temple</button>
        <Modal
          isOpen={this.state.showModal}
          ariaHideApp={false}
        >
          <div>
            <button onClick={this.handleCloseModal}>Close Modal</button>
            {this.renderLocationComponent()}
          </div>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state
})

export default connect(mapStateToProps)(App)
