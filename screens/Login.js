import React, { Component } from 'react'
import { Alert, Button, Stylesheet, View, Text, TextInput } from 'react-native'

import { InputStyles, ViewStyles } from '../styles/Styles'

import firebase from 'react-native-firebase'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.usersRef = firebase.firestore().collection('users')

        this.state = {
            email: null,
            password: null
        }
    }
     
    

    isEmail = (email) => {
        re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    loginWithUsername = (username, password) => {
        // get email from username
        this.usersRef.doc(username).get()
            .then((snapshot) => {
                email = snapshot.data().email
                this.authenticate(email, password)
            })
            .catch((error) => {
                Alert("Error", error.message)
            })
    }

    authenticate = (email, password) => {
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
            .then((user)=> {
                Alert.alert('Welcome!', 'successfully signed in')
            })
            .catch((error)=> {
                Alert.alert('Error', error.message)
            })
    }

    onPressLogin = () => {
        email = this.state.email
        password = this.state.password

        if(this.isEmail(email)) {
            this.authenticate(email, password)
        }
        else {
            // Email is Username
            this.loginWithUsername(email, password)
        }
        
    }
    
    onPressSignUp = () => {
        this.props.navigation.navigate("SignUp")
    }

    render() {
        return (
            <View style={ViewStyles.centered}>
                <TextInput style={InputStyles.basic} 
                    onChangeText={(email) => this.setState({email})}
                    placeholder='Username'
                    autoCapitalize='none'
                />
                <TextInput style={InputStyles.basic} 
                    onChangeText={(password) => this.setState({password})}
                    placeholder='Password'
                    autoCapitalize='none'
                />
                <Button 
                    title='Login'
                    onPress={this.onPressLogin}
                />
                <Button 
                    title='Sign Up'
                    onPress={this.onPressSignUp}
                />
            </View>
        )
    }
}

