import {createStore} from 'redux'
import {LoginReducer} from '../reducer/LoginReducer'
export const store = createStore(LoginReducer)