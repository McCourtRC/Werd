import React, { Component } from 'react';
import { View, FlatList, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default class WordSlider extends Component {

    scrollTo = () => {
        this.listViewRef.scrollToIndex({animate: true, index: 2, viewPosition: 0.5});
    }

    render() {
        return (
            <View style={{height: 200, backgroundColor: '#888', marginBottom: 30}}>
                <FlatList 
                    ref={component => this.listViewRef = component}
                    data={[
                        {title:'potato'},
                        {title:'monkey'}, 
                        {title:'octopus'}
                    ]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => <Text style={{width: width, textAlign:'center', fontSize: 30, alignSelf: 'center'}}>{item.title}</Text>}
                    initialScrollIndex={0}
                    showsHorizontalScrollIndicator={false}
                    horizontal= {true}
                    snapToAlignment={"center"}
                    scrollEnabled={false}
                />
            </View>
        )
    }
}