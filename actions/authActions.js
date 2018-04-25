import firebase from 'react-native-firebase'
import * as types from './types/authTypes'

// MARK: Actions
export const loginWithEmailAndPassword = (email, password) => (dispatch) => {
        dispatch(loginRequested)
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
            .then((user)=> {
                dispatch(setUser(user))
                dispatch(loginSuccess)
            })
            .catch((error)=> {
                dispatch(loginError)
            })
}

export const requestUsername = (username) => (dispatch) => {
    dispatch(usernameRequested)
    const usersRef = firebase.firestore().collection('users')
    usersRef.doc(username).get()
            .then((snapshot) => {
                // user already exists
                if(snapshot.data()) {
                    dispatch(usernameAlreadyExists)
                }
                else {
                    this.authenticate(username, email, password)
                }
            })
            .catch((error) => {
                // user doesnt exist. Sign up new user
                dispatch(usernameError)
            })
}


// ES6 Shorthand: implied return MUST be wrapped in () when returning object

const loginRequested = () => ({type: types.LOGIN_REQUESTED})
const loginSuccess = () => ({type: types.LOGIN_SUCCESS})
const loginError = () => ({type: types.LOGIN_ERROR})

export const setUser = (user) => ({type: types.SET_USER, user})

const usernameRequested = () => {type: types.USERNAME_REQUESTED}
const usernameSuccess = () => {type: types.USERNAME_SUCCESS}
const usernameAlreadyExists = () => {type: types.USERNAME_ALREADY_EXISTS}
const usernameError = () => {type: types.USERNAME_ERROR}

const signUpRequested = () => {type: types.SIGN_UP_REQUESTED}
const signUpSuccess = () => {type: types.SIGN_UP_SUCCESS, user}
const signUpError = () => {type: types.SIGN_UP_ERROR}
