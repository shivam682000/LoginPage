import * as React from 'react';
import { connect } from 'react-redux';
import {Text,View,StyleSheet} from 'react-native';
class Detail extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log('hello',this.props)
        return(
            <View style={styles.container}>
                
                <Text style={styles.text}>{this.props.email}</Text>
                <Text style={styles.text} >{this.props.password}</Text>
            </View>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log(state)
    return(state.Profile)
  }
export default connect(mapStateToProps)(Detail)
const styles=StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold'
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})