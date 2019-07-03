import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import SigninForm from '../forms/SigninForm'
import SignupForm from '../forms/SignupForm'
import ConfirmationForm from '../forms/ConfirmationForm'
import { userSignup, userSignin, confirmUser } from '../../actions/userActions'
import styled from 'styled-components'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const mapStateToProps = store => {
  return {
    currentUser: store.users.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  userSignup: event => dispatch(userSignup(event)),
  userSignin: event => dispatch(userSignin(event)),
  confirmUser: event => dispatch(confirmUser(event))
})

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root')

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      activeModal: null
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.setActiveModal = this.setActiveModal.bind(this)
  }
  openModal () {
    this.setState({ modalIsOpen: true })
  }
  closeModal () {
    this.setState({ modalIsOpen: false })
  }
  setActiveModal (modalName) {
    this.setState({ activeModal: modalName })
  }
  render () {
    return (
      <HeaderWrapper>
        <h1>BENSON</h1>
        <span>
          <button
            className='sign_button'
            onClick={e => {
              this.setActiveModal('signin')
              this.openModal()
            }}
          >
            Signin
          </button>
          <button
            className='sign_button'
            onClick={e => {
              this.setActiveModal('signup')
              this.openModal()
            }}
          >
            Signup
          </button>
        </span>

        {this.state.modalIsOpen && this.state.activeModal === 'signin' && (
          <div>
            <Modal
              isOpen={this.state.activeModal === 'signin'}
              onRequestClose={this.closeModal}
              style={customStyles}
            >
              <SigninForm
                userSignin={this.props.userSignin}
                closeModal={this.closeModal}
                setActiveModal={this.setActiveModal}
              />
            </Modal>
          </div>
        )}

        {this.state.modalIsOpen && this.state.activeModal === 'signup' && (
          <div>
            <Modal
              isOpen={this.state.activeModal === 'signup'}
              onRequestClose={this.closeModal}
              style={customStyles}
            >
              <SignupForm
                userSignup={this.props.userSignup}
                closeModal={this.closeModal}
                setActiveModal={this.setActiveModal}
              />
            </Modal>
          </div>
        )}
        {!this.state.modalIsOpen && this.state.activeModal === 'confirm' && (
          <div>
            <Modal
              isOpen={this.state.activeModal === 'confirm'}
              onRequestClose={this.closeModal}
              style={customStyles}
            >
              <ConfirmationForm
                confirmUser={this.props.confirmUser}
                currentUser={this.props.currentUser}
                closeModal={this.closeModal}
                setActiveModal={this.setActiveModal}
              />
            </Modal>
          </div>
        )}
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/ -1;
  span {
    margin-left: auto;
  }
`
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
