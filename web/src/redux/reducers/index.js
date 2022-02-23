import {combineReducers} from 'redux';
import { phoneReducer } from './reducers';

 const reducers = combineReducers({
    allPhones: phoneReducer
})

export default reducers;