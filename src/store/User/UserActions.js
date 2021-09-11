import ActionTypes from '../../actions/actionTypes';
import UserAPI from "../../api/UserAPI";
import {createCookie} from "../../utils/functions";

const loginAction = (payload) => {
    return {
        type: ActionTypes.USER.LOGIN,
        payload: payload
    }
}
export const loginActionAsync = (loginData) => {
    return async (dispatch) => {
        const response = await UserAPI.login(loginData)
        dispatch(loginAction(response.isOK))
        return response
    }
}


const verifyAction = (payload) => {
    return {
        type: ActionTypes.USER.VERIFY,
        payload: payload
    }
}
export const verifyActionAsync = (verifyData) => {

    return async (dispatch) => {
        const response = await UserAPI.verify(verifyData);
        console.log(response)
        if (response.isOK){
            createCookie('x-auth-token',response.data.data.token,1);
        }
        dispatch(verifyAction(response))
        return response
    }
}

const setInfoAction = () => {
    return {
        type: ActionTypes.USER.SETINFO,
    }
}
export const setInfoActionAsync = (info) => {
    console.log("asy")
    return async (dispatch) => {
        const response = await UserAPI.setInfo(info)
        dispatch(setInfoAction(response))
        return response
    }
}

const profileAction = (payload) => {
    return {
        type: ActionTypes.USER.PROFILE,
        payload: payload
    }
}
export const profileActionAsync = () => {
    return async (dispatch) => {
        const response = await UserAPI.profile()
        dispatch(profileAction(response.data))
        return response
    }
}

export const isLoginAction = (payload) => {
    return {
        type: ActionTypes.USER.IS_LOGGED_IN,
        payload: payload
    }
}

export const logoutAction = () => {
    return {
        type: ActionTypes.USER.LOGOUT
    }
}
