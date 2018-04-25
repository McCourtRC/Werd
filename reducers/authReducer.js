import { combineReducers } from 'redux'
import * as types from '../actions/types/authTypes'

const initialState = {
    user: null,
}

const authReducer = function(state = initialState, action) {
    switch(action.type) {
        case types.LOGIN_REQUESTED:
            return {
                ...state
            }
        case types.LOGIN_SUCCESS: 
            return {
                ...state
            }
        case types.LOGIN_ERROR:
            return {
                ...state
            }
            
        case types.SET_USER: 
        return {
            ...state,
            user: action.user
        }
        default:
            return state
    }
}

export { authReducer } 