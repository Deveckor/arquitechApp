import {TOKEN, NO_DATA_TOKEN} from '../types';

let token = typeof window !== 'undefined' ? localStorage.getItem('token'): '';




export const initialState = token

export function tokenReducer(state = initialState, action) {
    switch (action.type) {
        case TOKEN:{
            return  action.payload
        }
        case NO_DATA_TOKEN:{
            return initialState
        }
        default:
            return state;
    }
}