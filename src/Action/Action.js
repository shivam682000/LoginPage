import {Login} from './ActionTypes'

export const SignIn = (user)=>{
    return(
        {type:Login, payload:user}
    )
}