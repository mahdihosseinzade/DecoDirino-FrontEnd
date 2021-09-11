import {getToken} from "../utils/functions";
import {axiosAgent} from "./_AxiosInstance";
import EndPoints from "./EndPoints";
import Response from "../classes/ResponseClass";

const ArticleAPI={

    createArticle: async (article)=>{
        try {
            const res = await axiosAgent.post(EndPoints.ARTICLE.CREATE_ARTICLE,article);
            return new Response({
                isOK:true,
                data:res,
                api:EndPoints.ARTICLE.CREATE_ARTICLE
            })
        }
        catch (error) {
            return new Response({
                isOK:false,
                data:error,
                api:EndPoints.ARTICLE.CREATE_ARTICLE
            })
        }
    },

    getArticle:async() =>{
        try {
            const res =await axiosAgent.get(EndPoints.ARTICLE.GET_ARTICLE);
            return new Response({
                isOK:true,
                data:res,
                api:EndPoints.ARTICLE.GET_ARTICLE
            })
        }
        catch (error) {
            return new Response({
                isOK:false,
                data:error,
                api:EndPoints.ARTICLE.GET_ARTICLE
            })
        }
    }
}

export default ArticleAPI;
