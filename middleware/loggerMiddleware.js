const loggerMiddleware = store => next => action => {
    console.log("ACTION:", action.type, action)
    
    next(action)
}

export default loggerMiddleware