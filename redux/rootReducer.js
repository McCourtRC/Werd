import { combineReducers } from 'redux'

import { testReducer } from '../reducers/testReducer'
import { authReducer } from '../reducers/authReducer'

// import more reducers here

const rootReducer = combineReducers({
    testReducer,
    authReducer
})

export default rootReducer





/**
 * state = {
 *  rootReducer: {},
 *  user: {},
 *  
 * 
 * 
 * }
 * 
 * 
 * 
 * 
 * 
 */