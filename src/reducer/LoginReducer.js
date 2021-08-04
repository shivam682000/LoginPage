import {Login} from '../Action/ActionTypes'

const Initial_State_Login={Profile:{email:'',password:''}}

export const LoginReducer = (state=Initial_State_Login, action)=>{
    switch (action.type) {
      case Login: 
        return {...state,Profile:action.payload}
            
        
      default:
          return state
      }
    
  }