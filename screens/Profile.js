import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

import firebase from 'react-native-firebase'

import { ViewStyles } from '../styles/Styles'

export default class Home extends Component {

    onPressLogout = () => {
        firebase.auth().signOut()
      }

    render() {
        return(
            <View style={ViewStyles.centered}>
                <Button 
                    title='Logout'
                    onPress={this.onPressLogout}
                />
            </View>
        )
        
    }
}