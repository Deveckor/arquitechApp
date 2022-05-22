import {officeReducer} from './officeReducer'
import { tokenReducer } from './token';
import { combineReducers } from "redux";

const reducer = combineReducers({
    office: officeReducer,
    token: tokenReducer
})

export default reducer;