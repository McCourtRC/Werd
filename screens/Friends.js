import React, { Component } from 'react'
import { Button, Flatlist, Text, TextInput, View } from 'react-native'

import firebase from 'react-native-firebase'

import { connect } from 'react-redux'

import { changeBgColor } from '../actions/testActions'

import { ViewStyles } from '../styles/Styles'

class Friends extends Component {
    constructor(props) {
        super(props)

        this.friendsRef = firebase.firestore().collection("friends")
    }

    getFriends = () => {
        this.friendsRef.doc(this.props.username).get()
            .then((snapshot) => {

            })
    }

    onPressHandler = () => {
        this.props.dispatch(changeBgColor('#555'));
    }

    render() {
        return (
            <View style={{ 
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: this.props.color 
            }}>
                <Button
                    onPress={this.onPressHandler}
                    title="Change Background"
                />
            </View>
        )
    }
}

// const mapStateToProps = ({ testReducer: { color } }) => {
//     return { 
//         color,
//     }
// }
const mapStateToProps = (state) => {
    return { 
        color: state.testReducer.color,
    }
}
export default connect(mapStateToProps)(Friends)

// MARK: MapDispatchToProps
//      If you don't want to call this.props.dispatch(action)
//      Can become bloated in large scale apps
// const mapDispatchToProps = (dispatch) => ({
//     changeBgColor: (color) => dispatch(changeBgColor(color))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Friends)