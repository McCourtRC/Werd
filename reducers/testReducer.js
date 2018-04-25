import { CHANGE_BG_COLOR } from '../actions/types/testTypes'

const initialState = {
    color: '#000',
}

const testReducer = function (state = initialState, action) {
    switch(action.type) {
        case CHANGE_BG_COLOR:
            return {
                ...state,
                color: action.color
            }
        default:
            return state
    }
}

export { testReducer };