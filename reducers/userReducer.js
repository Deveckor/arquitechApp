import {USER_DATA, NO_DATA_USER} from '../types'

export const initialState = ({});


export function userReducer(state = initialState, action){
    switch (action.type){
        case USER_DATA:{
            return{user: action.payload};
        }
        case NO_DATA_USER:{
            return initialState;
        }
        default: return state;
    }
}