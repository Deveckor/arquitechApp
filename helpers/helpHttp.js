export const helpHttp = () =>{
    const customFetch = async (endpoint, options)=>{
        const defaultHeader = {
            accept: 'application/json'
        };
        // const controller = new AbortController();
        // options.signal = controller.signal
        
        options.method = options.method || 'GET';
        options.headers = options.headers 
        ? {...defaultHeader, ...options.headers}
        : defaultHeader;
       
        options.body = JSON.stringify(options.body) || false;
        
        if(!options.body) delete options.body;
        console.log(options);
        // setTimeout(()=> controller.abort(), 3000);
        

        try {
            let res = await fetch(endpoint, options);
            let json = await res.json();
            console.log(json);
            if(!res.ok) throw {err: true, status: res.status || "00", statusText: res.message || 'Ocurrió un Error'}
            return json;
        } catch (error) {
            return error
        }
        

    }

    const get = (url, options = {}) => customFetch(url, options);

    const post = (url, options = {}) => {
        options.method = 'POST';
        return customFetch(url, options)
    };

    
    return {
        get, 
        post
    }
}
