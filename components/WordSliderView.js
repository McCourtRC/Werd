import React, { Component } from 'react'
import { Alert,Button, View, FlatList, Text, Dimensions } from 'react-native'
import PropTypes from 'prop-types'

const { width } = Dimensions.get('window')

export default class WordSliderView extends Component {
    
    componentDidUpdate(PrevProps, PrevState) {
        if(PrevProps.index !== this.props.index) {
            this.listViewRef.scrollToIndex({animate: true, index: this.props.index})
        }
    }

    render() {
        return (
            <View style={{height: 200, backgroundColor: '#888', marginBottom: 30}}>
                <FlatList 
                    ref={component => this.listViewRef = component}
                    data={this.props.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => <Text style={{width: width, textAlign:'center', fontSize: 30, alignSelf: 'center'}}>{item}</Text>}
                    showsHorizontalScrollIndicator={false}
                    horizontal= {true}
                    snapToAlignment={"center"}
                    scrollEnabled={false}
                />

            </View>
        )
    }
}

WordSliderView.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
    index: PropTypes.number.isRequired

}