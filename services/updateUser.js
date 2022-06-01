import {URL_BASE} from './config'
import {helpHttp} from '../helpers/helpHttp'

const api = helpHttp();

async function updateOffice(data, id, token){
   let body = await data;
    let options = {
        body: body,
        headers: {
            "authorization": token,
            "Content-type": "application/json",
        }
    }
    try {
        let res = await api.patch(`${URL_BASE}/offices/${id}`, options)
        if(res.err) throw {error: res.err}
        console.log(res);
        return res
    } catch (error) {
        console.log(error);
    }
}

export {
    updateOffice
}