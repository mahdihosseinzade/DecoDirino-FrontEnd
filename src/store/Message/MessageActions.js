import ActionTypes  from '../../actions/actionTypes';
import MessageAPI from "../../api/MessageAPI";

const createMessage =(payload)=>{
    return {
        type: ActionTypes.MESSAGE.CREATE_MESSAGE,
        payload: payload
    }
}

export const createMessageAsync =(message)=>{
    return async (dispatch)=>{
        const response = await MessageAPI.createMessage(message);
        dispatch(createMessage(response.data.data));
        return response ;
    }
}
