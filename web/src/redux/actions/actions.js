import  { ActionTypes } from "../constants/action-types";

export const setPhones = (phones) => {
    return {
        type: ActionTypes.SET_PHONES,
        payload: phones
    }
};