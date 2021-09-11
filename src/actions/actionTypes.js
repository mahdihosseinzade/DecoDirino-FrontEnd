const ActionTypes = {
    PROJECT: {
        CREATE_PROJECT: 'CREATE_PROJECT',
        GET_PROJECT: 'GET_PROJECT',
    },
    ARTICLE: {
        CREATE_ARTICLE: 'CREATE_ARTICLE',
        GET_ARTICLE: 'GET_ARTICLE'
    },
    MESSAGE: {
        CREATE_MESSAGE: 'CREATE_MESSAGE',
        GET_MESSAGE: 'GET_MESSAGE'
    },
    USER:{
        LOGIN: 'LOGIN',
        VERIFY: 'VERIFY',
        SETINFO: 'SETINFO',
        PROFILE: 'PROFILE',
        LOGOUT: 'LOGOUT',
        IS_LOGGED_IN:'IS_LOGGED_IN'
    },
    ALERT:{
        SUCCESS: 'SUCCESS',
        ERROR: 'ERROR'
    }
};

export default ActionTypes;
