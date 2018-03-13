import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import firebase from 'react-native-firebase';

export default class Home extends Component {

    onPressLogout = () => {
        firebase.auth().signOut();
      }

    render() {
        return(
            <View>
                <Button 
                    title='Logout'
                    onPress={this.onPressLogout}
                />
            </View>
        )
        
    }
}