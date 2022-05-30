export const helpHttp = () =>{
    const customFetch = async (endpoint, options, file = false)=>{
        const defaultHeader = {
            accept: 'application/json'
        };
        
        
        options.method = options.method || 'GET';
        options.headers = options.headers 
        ? {...defaultHeader, ...options.headers}
        : defaultHeader;

        if(!file){
            options.body = JSON.stringify(options.body) || false;
        }
        if(!options.body) delete options.body;
      
        

        try {
            let res = await fetch(endpoint, options);
            let json = await res.json();
            if(!res.ok) throw {err: true, status: res.status || "00", statusText: json.message || 'Ocurrió un Error', error: json.error || 'Error....'}
            return json;
        } catch (error) {
            return error
        }
        

    }

    const get = (url, options = {}) => customFetch(url, options);

    const post = (url, options = {}, file) => {
        options.method = 'POST';
        return customFetch(url, options, file)
    };
    const patch = (url, options = {}) =>{ 
        options.method = 'PATCH';
        return customFetch(url, options)
    }

    
    return {
        get, 
        post,
        patch
    }
}
