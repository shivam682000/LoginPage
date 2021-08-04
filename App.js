

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {store} from './src/store/store'
import {Provider} from 'react-redux'
import Main from './src/component/Main'
export default class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
      <Main/>
      </Provider>
    )
  }
}

