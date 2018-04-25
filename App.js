import React, { Component } from 'react';
import { connect } from 'react-redux'

import firebase, { Firebase } from 'react-native-firebase';

import { SignedIn, SignedOut } from './config/router';

import { setUser } from './actions/authActions'

class App extends Component {
  constructor() {
    super()
    this.unsubscriber = null;
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.props.dispatch(setUser(user))
    })
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber()
    }
  }

  render() {
    if (!this.props.user) {
      return <SignedOut />
    }

    return <SignedIn />
  }
}

const mapStateToProps = (state) => {
  return { 
      user: state.authReducer.user,
  }
}
export default connect(mapStateToProps)(App)

