// API notification message

export const API_NOTIFICAION_MSG = {
    loading: {
        title: 'Loading....',
        message: 'Data is being loaded, please wait'
    },
    success: {
        title: 'success',
        message: 'Data successfully loaded'
    },
    responseFailure: {
        title: 'error',
        message: 'An error occured during fetching response from server, please try again'
    },
    requestFailure: {
        title: 'error',
        message: 'An error occured while parsing request data'
    },
    networkError: {
        title: 'error',
        message: 'Unable to connect with the server, please check Internet connectivity and try agian'
    }
}


// API service call

export const SERVICE_URLS = {
    userSignup : { url: '/signup', method: 'POST'}
}