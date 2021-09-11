import ActionTypes from "../../actions/actionTypes";

const initialState ={
    Projects:null
}
const ProjectReducers = (state=initialState , action)=>{
    switch (action.type){
        case ActionTypes.PROJECT.CREATE_PROJECT:
            return {
                ...state ,
                Projects: action.payload
            }

        case ActionTypes.PROJECT.GET_PROJECT:
            return {
                ...state ,
                Projects: action.payload.data
            }

        default :
            return state ;
    }
}

export default ProjectReducers;
