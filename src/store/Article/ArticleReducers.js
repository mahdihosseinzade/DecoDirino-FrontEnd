import ActionTypes from "../../actions/actionTypes";

const initialState ={
    Articles:null
}
const ArticleReducers = (state=initialState , action)=>{
    switch (action.type){
        case ActionTypes.ARTICLE.CREATE_ARTICLE:
            return {
                ...state ,
                Articles: action.payload
            }

        case ActionTypes.ARTICLE.GET_ARTICLE:
            return {
                ...state ,
                Articles: action.payload
            }
        default :
            return state;
    }
}

export default ArticleReducers;
