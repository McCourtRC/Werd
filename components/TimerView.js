import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { ViewStyles, TextStyles } from '../styles/Styles'

export default class TimerView extends Component {
    render() {
        return (
                <Text style={TextStyles.timer}>{this.props.time}</Text>
        )
    }
}

TimerView.propTypes = {
    time: PropTypes.number.isRequired
}
