import {URL_BASE} from './config'
import {helpHttp} from '../helpers/helpHttp'

const api = helpHttp();





async function uploadFile(file, bucket){

    let formData = new FormData();
    formData.append('file', file);
    let options = {
        body: formData
    }
    let typeFile = true
    try {
        let res = await api.post(`${URL_BASE}/upload/${bucket}`, options,typeFile)
        if (res.err) throw {error: res}
        let url = res.url.split('?')[0]
        return url


    } catch (error) {
        console.log(error);
    }
}

export {
    uploadFile
}