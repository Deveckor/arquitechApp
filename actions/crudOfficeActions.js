import {
    CREATE_DATA_OFFICE,
    READ_ALL_DATA_OFFICE,
    UPDATE_DATA_OFFICE,
    POST_DATA_OFFICE,
    NO_DATA_OFFICE
} from "../types";

export const createAction = (data) => (
     
    {type: CREATE_DATA_OFFICE, payload: data}
    );
export const readAllAction = (data) => ({type: READ_ALL_DATA_OFFICE, payload: data});
export const updateAction = (data) => ({type: UPDATE_DATA_OFFICE, payload: data});
export const loginAction = (data) => ({type: POST_DATA_OFFICE, payload: data});

export const noAction = () => ({type: NO_DATA_OFFICE});