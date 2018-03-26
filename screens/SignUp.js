import React, { Component } from 'react'
import { Alert, Button, View, TextInput} from 'react-native'

import { InputStyles, ViewStyles } from '../styles/Styles'

import firebase from 'react-native-firebase'

export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.usersRef = firebase.firestore().collection('users')

        this.state = {
            username: null,
            email: null,
            password: null
        }
    }

    signUpUser = (username, email, password) =>  {
        this.usersRef.doc(username).get()
            .then((snapshot) => {
                // user already exists
                if(snapshot.data()) {
                    Alert.alert("Username already exists")
                }
                else {
                    this.authenticate(username, email, password)
                }
            })
            .catch((error) => {
                // user doesnt exist. Sign up new user
                Alert.alert("Error", error.message)
            })
    }

    authenticate = (username, email, password) => {
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .then(()=> {
                this.signUp(username, email)
            })
            .catch((error)=> {
                Alert.alert('Error', error.message)
            })
    }

    signUp = (username, email) => {
        this.usersRef.doc(username).set({
            email: email,
            wpm: 0
        })
        .then(() => {
            Alert.alert('Success', 'you have been signed up!')
        })
        .catch((error) => {
            Alert.alert('Error', error.message)
        })
    }

    onPressSignUp = () => {
        username = this.state.username
        email = this.state.email
        password = this.state.password
        this.signUpUser(username, email, password)
    }

    render() {
        return (
            <View style={ViewStyles.centered}>
                <TextInput style={InputStyles.basic} 
                    onChangeText={(username) => this.setState({username})}
                    placeholder='Username'
                    autoCapitalize='none'
                />
                <TextInput style={InputStyles.basic} 
                    onChangeText={(email) => this.setState({email})}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput style={InputStyles.basic} 
                    onChangeText={(password) => this.setState({password})}
                    placeholder='Password'
                    autoCapitalize='none'
                />
                <Button 
                    title='Sign Up'
                    onPress={this.onPressSignUp}
                />
            </View>
        )
    }
}