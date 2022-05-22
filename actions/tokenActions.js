import { 
    TOKEN,
    NO_DATA_TOKEN
} from '../types/index'

export const tokenAction = (data)=>(
    {type: TOKEN, payload: data}
)
export const noActionToken = ()=>(
    {type: NO_DATA_TOKEN}
)