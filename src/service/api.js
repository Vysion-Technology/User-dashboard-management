import axios from 'axios';
import { API_NOTIFICAION_MSG, SERVICE_URLS } from '../constants/config';

const API_URL = 'http://localhost:8000';

const axiosInstance = axios.create({
    baseUrl : API_URL,
    timeout : 10000,
    header : {
        "content-type" : "application/json"
    }
})

axiosInstance.interceptors.request.use(
    function (config){
        return config;
    },
    function (error){
         return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (response){
        // stop global loader here
        return processResponse(response);
    },
    function (error){
        // stop global loader here
        return Promise.reject(processError(error));
    }
)

// if success -> return { isSucess:true, data:object}
// if fail -> return { isFailure:true, status:string, msg:string, code:string}

const processResponse = (response) =>{
      if(response?.status === 200){
          return { isSucess:true, data: response.data}
      }
      else{
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }
      }
}

const processError = (error) => {
    if(error.response){
       
        console.log('ERROR IN RESPONSE', error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICAION_MSG.responseFailure,
            code: error.response.status
        }
    }else if(error.request){
        console.log('ERROR IN REQUEST', error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICAION_MSG.requestFailure,
            code: ""
        }
    }
    else{
        console.log('ERROR IN NETWORK', error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICAION_MSG.networkError,
            code: ""
        }
    }
}


const API = {};

for ( const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = (body, showUploadProgress, showDownloadProgress) =>
        axiosInstance({
            method: value.method,
            url: value.url,
            data: body,
            responseType: value.responseType,
            onUploadProgress : function (progressEvent){
                 if(showUploadProgress){
                    let percentageComplete = Math.round((progressEvent.loaded*100)/ progressEvent.total)
                    showUploadProgress(percentageComplete);
                 }
            },
            onDownloadProgress : function (progressEvent){
                if(showDownloadProgress){
                   let percentageComplete = Math.round((progressEvent.loaded*100)/ progressEvent.total)
                   showDownloadProgress(percentageComplete);
                }
           },
        })
}

export {API};