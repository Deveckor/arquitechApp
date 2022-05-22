import {
    CREATE_DATA_OFFICE,
    READ_ALL_DATA_OFFICE,
    UPDATE_DATA_OFFICE,
    POST_DATA_OFFICE,
    NO_DATA_OFFICE
} from "../types";

export const initialState = {
    office:[]
};

export function officeReducer(state= initialState, action){
    switch (action.type){
        case READ_ALL_DATA_OFFICE:{
            return{ 
                ...state,
                dt: action.payload.map((data) => data)
            }
        }
        case CREATE_DATA_OFFICE:{
           
            return{ 
                

                    ...state,
                    office: action.payload
                
            }
        }
        case UPDATE_DATA_OFFICE:{
            let newData = state.dt.map((el)=> 
             el.id === action.payload.id ? action.payload : el
            )
            return{ 
                ...state,
                dt: newData
            };
        };
        case POST_DATA_OFFICE:{
            return{ 
                ...state,
                dt:[...state.dt, action.payload]
            }
        }
        case NO_DATA_OFFICE:
            return initialState;
        default: 
            return state;
        
    }
}

