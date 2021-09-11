export const domain = 'http://localhost:8000';

const EndPoints = {

    USER_PANEL : {
        LOGIN : `${domain}/user-panel/login/`,
        VERIFY : `${domain}/user-panel/verify/`,
        SETINFO : `${domain}/user-panel/set-info/`,
        PROFILE : `${domain}/user-panel/profile/`,
    },

    PROJECT:{
        CREATE_PROJECT: `${domain}/create-project/`,
        GET_PROJECT: `${domain}/get-project/`
    },

    ARTICLE:{
        CREATE_ARTICLE:`${domain}/create-article/`,
        GET_ARTICLE: `${domain}/get-article/`
    },

    MESSAGE:{
        CREATE_MESSAGE:`${domain}/create-message/`,
        GET_MESSAGE: `${domain}/get-message/`
    }
}

export default EndPoints;
