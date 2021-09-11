import ActionTypes from "../../actions/actionTypes";

const initialState = {
    AlertType:null,
    AlertMessage:null
}
export const AlertsReducer = (state = initialState, action)=> {

    switch (action.type) {
        case ActionTypes.ALERT.SUCCESS:
            return { ...state , AlertType : 'success' , AlertMessage : action.message };
        case ActionTypes.ALERT.ERROR:
            return { ...state , AlertType : 'error' , AlertMessage : action.message };

        default:
            return state;
    }
}

export default AlertsReducer;
