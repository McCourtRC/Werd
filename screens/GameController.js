import React, { Component } from 'react'
import {Alert,Button,View, FlatList, Text, Dimensions } from 'react-native'

import TimerView from '../components/TimerView'
import WordSliderView from '../components/WordSliderView'
import InputView from '../components/InputView'

import { ViewStyles } from '../styles/Styles'

import firebase from 'react-native-firebase'

export default class GameController extends Component {
    constructor(props) {
        super(props)
        this.scoresRef = firebase.firestore().collection('scores')
        this.wordList = ['3','2','1'].concat(this.props.navigation.state.params.words)

        this.state = {
            time: 0,
            index: 0,
        }
    }

    componentDidMount() {
        this.countDownTimer = setInterval(this.countDown, 1000)
        this.setState({currentWord:this.wordList[3]})

    }

    componentWillUnmount() {
        // If game is still running, incomplete
        if( this.timer ) {
            this.stopTimer()
        }
    }

    finishGame = () => {
        // submit score

        this.props.navigation.goBack();
    }

    quit = () => {
        this.stopTimer()

        // mark unfinished game

        this.props.navigation.goBack();
    }

    // MARK: Timer Methods
    startTimer = () => {
        this.timer = setInterval(()=> {
            this.setState({time: this.state.time + 1})
        }, 100)
    }
    stopTimer = () => {
        clearInterval(this.timer)
    }

    resetTimer = () => {
        this.setState({time: 0})
    }

    // MARK: WordSlider Methods
    countDown = () => {
        // Count down 3 times
        if(this.state.index === 2) {
            // Start game
            clearInterval(this.countDownTimer)
            this.startTimer()
        }
        this.setState({index: this.state.index + 1})
    }

    nextWord() {
        let newIndex = this.state.index + 1
        if(newIndex < this.wordList.length) {
            this.setState({index: newIndex})
        }
    }

    // MARK: CustomInput Methods
    onSubmitHandler = (word) => {
        let index = this.state.index
        let currentWord = this.wordList[index]

        // Check end of game
        if( word === currentWord && index === this.wordList.length - 1) {
            this.stopTimer()
            Alert.alert("Done!", "You scored " + this.state.time, [{text: "Return", onPress: this.finishGame}])
        }
        // Check word is correct
        else if( word === currentWord ) {
            // next word
            this.nextWord()
        }
        else {
            // WRONG WORD: Input automatically resets
        }
    }


    // MARK: Render
    render() {
        return (
            <View style={ViewStyles.horizontalCenter}>
                <TimerView time={this.state.time}/>
                <WordSliderView
                    data={this.wordList}
                    index={this.state.index}
                />
                <InputView
                    onSubmit={this.onSubmitHandler}
                />
            </View>
        ) 
    }
}