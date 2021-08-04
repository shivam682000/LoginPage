import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import CustomTextInput from './TextInput'
export default class SignUpPage extends React.Component{
    constructor(props){
        super(props)
        
        
    }
    
  render(){
      return(
    <View style={styles.container}>
        <Text style={styles.textLoginpage}>Sign Up</Text>
        <CustomTextInput
           placeholdername={"Email Id"}
        />
        <CustomTextInput
           placeholdername={"User Name"}

        />
        <CustomTextInput
           placeholdername={"Enter Password"}

        />
        
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}>SUBMIT</Text>
        </TouchableOpacity>
    </View>
      )
  }}
  const styles=StyleSheet.create({
      container:{
          flex:1,
          padding:10,
          marginTop:100
      },
      textLoginpage:{
          fontSize:40,
          fontWeight:'bold',
          marginBottom:10
      },
      signuptext:{
        fontSize:30,
        fontWeight:'bold',
        alignSelf:'flex-end',
        marginTop:20
      },
      button:{
          height:50,
          width:'80%',
          backgroundColor:'red',
          justifyContent:'center',
          alignItems:'center',
          borderRadius:10,
          alignSelf:'center',
          marginTop:20
      },
      buttontext:{
        fontSize:30,
        fontWeight:'bold',
        
        
        color:'white'
      },
  })