import ActionTypes from "../../actions/actionTypes";

const initialState ={
    Message:null
}
const MessageReducers = (state=initialState , action)=>{
    switch (action.type){
        case ActionTypes.MESSAGE.CREATE_MESSAGE:
            return {
                ...state ,
                Message: action.payload
            }

        case ActionTypes.MESSAGE.GET_MESSAGE:
            return {
                ...state ,
                Message: action.payload
            }
        default :
            return state ;
    }
}

export default MessageReducers;

