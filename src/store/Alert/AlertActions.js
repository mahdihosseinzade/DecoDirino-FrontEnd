import ActionTypes from "../../actions/actionTypes";

export const successAlert =(message)=>{
    return {
        type:ActionTypes.ALERT.SUCCESS,
        message
    }

}

export const errorAlert =(message)=>{
    return {
        type:ActionTypes.ALERT.ERROR,
        message
    }

}
