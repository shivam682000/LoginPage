import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput
} from 'react-native';

export default class customTextInput extends React.Component{
    constructor(props){
        super(props)

    }
  render(){
    return(
      <TextInput
          style={styles.input}
          placeholder={this.props.placeholdername}
          onChangeText={this.props.onchangeText}
          value={this.props.value}
      />
    )
  }
}
const styles=StyleSheet.create({
    input:{
      width:'100%',
      height:60,
      borderWidth:1,
      marginTop:20,
      borderRadius:10,
      paddingLeft:20,
      justifyContent:'center',
      fontSize:20,
      fontWeight:'bold'
    }
})
