import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import loggerMiddleware from '../middleware/loggerMiddleware'

import rootReducer from './rootReducer'


const enhancer = compose(applyMiddleware(
    thunk,
    loggerMiddleware,
))

export default store = createStore(rootReducer, enhancer)
