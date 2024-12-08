

export default class xmlRequests {

    baseUrl = process.env.REACT_APP_SERVER_URL

    constructor(method, url, body = null, headers = {
        name: "Content-Type",
        value: "application/json"
    }) {
        this.xhr = new XMLHttpRequest();
        this.method = method;
        this.url = url;
        this.body = body;
        this.headers = headers;
    }


    handleRequests = async (callbackFunc, progressCallback) => {

        this.xhr.open(this.method, this.baseUrl + this.url, true);
        this.xhr.setRequestHeader(this.headers.name, this.headers.value);
 
    
        this.xhr.send(this.body);
    
        this.xhr.onprogress = async (e) => {
            // console.log(e.loaded, e.lengthComputable, e.total)
            typeof progressCallback == "function" && await progressCallback(e)
        }

        this.xhr.onload = async () => {

            let response = this.xhr
            if (this.xhr.status === 200) {
                await callbackFunc(response);
            } else {
                await callbackFunc(response);
                console.error('Error:', this.xhr.status);
                // console.log(response);
            }
            
        }

        this.xhr.onerror = function(e) {
            console.error('Error:', e)
        }
    }
}



