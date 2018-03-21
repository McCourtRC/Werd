import React, { Component } from 'react';
import { View, FlatList, Text, Dimensions } from 'react-native';

import CustomInput from '../components/CustomInput';
import Timer from '../components/Timer';
import WordSlider from '../components/WordSlider';

import { InputStyles, ViewStyles } from '../styles/Styles';

import firebase from 'react-native-firebase';

const { width } = Dimensions.get('window');

export default class Home extends Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection('todos');
    }

    scrollTo = () => {
        this.listViewRef.scrollToIndex({animate: true, index: 2, viewPosition: 0.5});
    }


    render() {
        return (
            <View style={ViewStyles.horizontalCenter}>
                <Timer />
                <WordSlider />
                <CustomInput />
            </View>
        ); 
    }
}