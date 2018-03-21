import React, { Component } from 'react';
import { Alert, Text, View, TextInput } from 'react-native';

import {InputStyles, ViewStyles} from '../styles/Styles';

export default class CustomInput extends Component {
    constructor() {
        super();
        this.state = {text: ''};
    }

    onSubmit = () => {
        // Clear Input
        this.myInput.setNativeProps({
            text: ''
        });

        // Reset state
        this.setState({text: ''});
    }
    
    render() {
        return (
            <TextInput style={InputStyles.basic}
                ref={component => this.myInput = component}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                onSubmitEditing={this.onSubmit}
                autoCorrect={false}
                autoCapitalize='none'
                // autoFocus={true}
            />
            
        )
    }
}