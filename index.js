import { AppRegistry } from 'react-native';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux'

import React, { Component } from 'react';

class ReduxApp extends Component {
    render(){
        return (
            <Provider store={store}><App /></Provider>
        )
    }
}

AppRegistry.registerComponent('Werd', () => ReduxApp);
