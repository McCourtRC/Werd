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
        this.ref = firebase.firestore().collection('todos')

        this.state = {
            time: 0,
            index: 0,
        }
    }

    words = [
         '3',
         '2',
         '1',
        'potato',
        'monkey',
        'octopus'
    ]

    componentDidMount() {
        this.countDownTimer = setInterval(this.countDown, 1000)

        this.setState({currentWord:this.words[3]})
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
        if(newIndex < this.words.length) {
            this.setState({index: newIndex})
        }
    }

    // MARK: CustomInput Methods
    onSubmitHandler = (word) => {
        let index = this.state.index
        let currentWord = this.words[index]

        // Check end of game
        if( word === currentWord && index === this.words.length - 1) {
            this.stopTimer()
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
                    data={this.words}
                    index={this.state.index}
                />
                <InputView
                    onSubmit={this.onSubmitHandler}
                />
            </View>
        ) 
    }
}