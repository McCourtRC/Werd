import React, { Component } from 'react';
import { Alert, Button, Stylesheet, View, Text, TextInput } from 'react-native'
import firebase from 'react-native-firebase'



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null
        };
    }

    onPressLogin = () => {
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
            .then((user)=> {
                Alert.alert('Welcome!', 'successfully signed in');
            })
            .catch((error)=> {
                Alert.alert('Error', error.message);
            });
    }
    
    onPressSignUp = () => {
        // firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
        //     .then((user)=> {
        //         Alert.alert('Success', 'you have been signed up')
        //     })
        //     .catch((error)=> {
        //         Alert.alert('Error', error.message);
        //     });

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} 
                    onChangeText={(email) => this.setState({email})}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput style={styles.input} 
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


const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    input: {
        fontSize: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        padding: 10
    }
}
