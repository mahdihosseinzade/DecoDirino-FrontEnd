import ActionTypes from '../../actions/actionTypes';
import ArticleAPI from '../../api/ArticleAPI';

const createArticle =(payload)=>{
    return {
        type: ActionTypes.ARTICLE.CREATE_ARTICLE,
        payload: payload
    }
}

export const createArticleAsync =(article)=>{
    return async (dispatch)=>{
        const response = await ArticleAPI.createArticle(article);
        dispatch(createArticle(response.data));
        return response ;
    }
}

const getArticle =(payload)=>{
    return {
        type: ActionTypes.ARTICLE.GET_ARTICLE,
        payload: payload.data
    }
}

export const getArticleAsync =()=>{
    return async (dispatch)=>{
        const response = await ArticleAPI.getArticle()
        dispatch(getArticle(response.data));
        return response ;
    }
}
