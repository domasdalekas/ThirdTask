import {adReducer} from "./adReducer";
import {combineReducers} from 'redux'

export default combineReducers({
    ads:adReducer
});