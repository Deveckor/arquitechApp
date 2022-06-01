import {USER_DATA, NO_DATA_USER} from '../types'

export const userAction = (data) => (
    {type: USER_DATA, payload: data}
);
export const noAction = () =>({type: NO_DATA_USER});