import React, { Component } from 'react'
import { Alert,Button, FlatList, Text, View } from 'react-native'

import firebase from 'react-native-firebase'

import { ViewStyles } from '../styles/Styles'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.gamesCollection = firebase.firestore().collection('games')
    }
    startGameHandler = () => {
        // get game from firebase
        this.gamesCollection.where("seed", "<=", 1).limit(1).get()
            .then((snapshot)=> {
                let game = snapshot.docs[0].data()
                this.props.navigation.navigate('GameController', { words: game.words })
            })
            .catch((error) => {
                console.log(error)
            })
        
        // launch game
    }

    render() {
        return (
            <View style={ViewStyles.centered}>
                <Button title="Start Game" onPress={this.startGameHandler}/>
            </View>
        )
    }
}