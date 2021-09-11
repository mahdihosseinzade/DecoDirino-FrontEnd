import ActionTypes from '../../actions/actionTypes';

const initialState = {
    isLogin: undefined,
    info: undefined,
};

const UserReducers = (state=initialState,action)=>{
    switch (action.type) {
        case ActionTypes.USER.LOGIN :
            return state;

        case ActionTypes.USER.VERIFY :
            if(action.payload) {
                return {
                    ...state,
                    isLogin : action.payload.isOK,
                    info: action.payload.data.data.info
                }
            }
            return state;

        case ActionTypes.USER.SETINFO :
            return state

        case ActionTypes.USER.PROFILE :
            return {
                ...state ,
                info: action.payload.data
            }

        case ActionTypes.USER.LOGOUT :
            return {
                ...state ,
                isLogin: false
            }

        case ActionTypes.USER.IS_LOGGED_IN :
            if(action.payload === -1)
            {
                return {
                    ...state ,
                    isLogin: false
                }
            }
            else {
                return {
                    ...state ,
                    isLogin: true
                }
            }
        default :
            return state;
    }
}

export default UserReducers;
