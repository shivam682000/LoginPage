import React from 'react';
import { connect } from 'react-redux';
import {SignIn} from '../Action/Action'
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
 class LoginPage extends React.Component{
    constructor(props){
        super(props)
        this.state={email:'',password:''}
        
    }
   _onpress=()=>{
       console.log("hello",this.props.navigation)
       this.props.navigation.navigate('SignUpPage')
   }
   _onchangetext=(email1)=>{
       this.setState({email:email1})
   }
   _onchangetext1=(password1)=>{
    this.setState({password:password1})
}
xyz=()=>{
  this.props.SignIn({email:this.state.email,password:this.state.password})
  this.props.navigation.navigate('Detail')

}
  render(){
    console.log(this.props)
      return(
    <View style={styles.container}>
        <Text style={styles.textLoginpage}>LOGIN PAGE</Text>
        <CustomTextInput
           placeholdername={"Email Id"}
           onchangeText={this._onchangetext}
           value={this.state.email}
        />
        
        <CustomTextInput
           placeholdername={"Enter Password"}
           onchangeText={this._onchangetext1}
           value={this.state.password}
        />
        <TouchableOpacity onPress={this._onpress}>
            <Text style={styles.signuptext}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.xyz}>
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
  const mapStateToProps=(state)=>{
    
    return(state.Profile)
  }
  const ManageDispatchToProps=(dispatch)=>{
    return({
      SignIn:(user)=>dispatch(SignIn(user))
    })
  }
  
  export default connect(mapStateToProps,ManageDispatchToProps)(LoginPage)