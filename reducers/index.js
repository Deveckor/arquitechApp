import {officeReducer} from './officeReducer'
import { combineReducers } from "redux";

const reducer = combineReducers({
    office: officeReducer
})

export default reducer;