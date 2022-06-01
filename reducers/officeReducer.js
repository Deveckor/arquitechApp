import {
    CREATE_DATA_OFFICE,
    READ_ALL_DATA_OFFICE,
    UPDATE_DATA_OFFICE,
    POST_DATA_OFFICE,
    NO_DATA_OFFICE
} from "../types";

export const initialState = {
<<<<<<< HEAD
    office:{

    }
=======
    office:[]
>>>>>>> 776ccb8a2f1e89049ae95e03c8a46884cf9fb120
};

export function officeReducer(state= initialState, action){
    switch (action.type){
        case READ_ALL_DATA_OFFICE:{
            return{ 
                ...state,
                office: action.payload.map((data) => data)
            }
        }
        case CREATE_DATA_OFFICE:{
           
            return{ 
                

                    ...state,
<<<<<<< HEAD
                    office : action.payload
=======
                    office: action.payload
>>>>>>> 776ccb8a2f1e89049ae95e03c8a46884cf9fb120
                
            }
        }
        case UPDATE_DATA_OFFICE:{
            let newData = state.office.map((el)=> 
             el.id === action.payload.id ? action.payload : el
            )
            return{ 
                ...state,
                office: newData
            };
        };
        case POST_DATA_OFFICE:{
            return{ 
                ...state,
                office: action.payload
            }
        }
        case NO_DATA_OFFICE:
            return initialState;
        default: 
            return state;
        
    }
}

