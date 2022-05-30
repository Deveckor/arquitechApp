
import {tokenAction, noActionToken} from '../actions/tokenActions'
import {helpHttp} from '../helpers/helpHttp'
import {URL_BASE} from './config'


let api = helpHttp()
let endPoint = '';
export default async function login(data, dispatch, from = false, password, setTokenUser) {
    const {email} = data
    console.log(password);
    if(from){
        endPoint = '/offices/login'
        
    } else {
        endPoint = '/clients/login'
        
    }
    let options = {
        body: {
             email,
             password
        }, 
        headers: { 
            "content-type": "application/json"
          }
    }
    try {
        let res = await api.post(`${URL_BASE}${endPoint}`, options)
        console.log(res);
        if (res.err) throw {res}
        localStorage.setItem('token', res.data.token)
        setTokenUser(res.data.token)
        dispatch(tokenAction(res.data.token))
        console.log(res);
        return true
    } catch (error) {
        console.log(error);
        noActionToken()
        return true
    }
    

}