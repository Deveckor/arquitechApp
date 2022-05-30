import {officeReducer} from './officeReducer'
import { tokenReducer } from './token';
import { userReducer } from './userReducer';
import { combineReducers } from "redux";

const reducer = combineReducers({
    office: officeReducer,
    token: tokenReducer,
    user: userReducer

})

export default reducer;