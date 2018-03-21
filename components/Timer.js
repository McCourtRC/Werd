import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { ViewStyles, TextStyles } from '../styles/Styles';

export default class Timer extends Component {
    constructor() {
        super();

        this.state = {
            time: 0
        }
    }

    startCountUp = () => {
        setInterval(()=> {
            this.setState({time: this.state.time + 1})
        }, 100);
    }

    render() {
        return (
                <Text style={TextStyles.timer}>{this.state.time}</Text>
        );
    }
}