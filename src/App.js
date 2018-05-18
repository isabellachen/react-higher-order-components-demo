import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'



class App extends Component {
  constructor () {
    super()
    this.state = {
      showModal: false
    }
  }

  handleOpenModal = () => {
    this.setState({
      showModal: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <div>
        <h1>Mission Page</h1>
        <h2>Choose Mission</h2>
        <button onClick={this.handleOpenModal}>Base Camp Garden</button>
        <button onClick={this.handleOpenModal}>Misty Lake</button>
        <button onClick={this.handleOpenModal}>Look Out Point</button>
        <button onClick={this.handleOpenModal}>Abandoned Temple</button>
        <Modal
          isOpen={this.state.showModal}
          ariaHideApp={false}
        >
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </Modal>
      </div>
    );
  }
}

export default App
