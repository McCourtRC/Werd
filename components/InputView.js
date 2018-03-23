import React, { Component } from 'react'
import { Alert, Text, View, TextInput } from 'react-native'

import {InputStyles, ViewStyles} from '../styles/Styles'

export default class InputView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    submitHandler = () => {
        // Clear Input
        this.myInput.setNativeProps({
            text: ''
        })

        // Reset state
        this.props.onSubmit(this.state.text)
        this.setState({text: ''})
    }
    
    render() {
        return (
            <TextInput style={InputStyles.basic}
                ref={component => this.myInput = component}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                blurOnSubmit={false}
                onSubmitEditing={this.submitHandler}
                autoCorrect={false}
                autoCapitalize='none'
                autoFocus={true}
            />
            
        )
    }
}