import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { ViewStyles } from '../styles/Styles'

export default class Friends extends Component {
    render() {
        return (
            <View style={ViewStyles.centered}>
                <Text>Friends</Text>
            </View>
        )
    }
}