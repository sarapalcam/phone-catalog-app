import { ActionTypes } from "../constants/action-types";

const initialState = {
    phones: []
}

export const phoneReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PHONES:
        return {...state, phones:payload}
            
        
        default:
            return state
        }
}