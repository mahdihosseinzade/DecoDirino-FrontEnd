
import EndPoints from "./EndPoints";
import {getToken} from "../utils/functions";
import {axiosAgent} from "./_AxiosInstance";
import Response from "../classes/ResponseClass";

const MessageAPI={

    createMessage: async (message)=>{
        try {

            const res = await axiosAgent.post(EndPoints.MESSAGE.CREATE_MESSAGE,message);
            return new Response({
                isOK:true,
                data:res,
                api:EndPoints.MESSAGE.CREATE_MESSAGE
            });
        }
        catch (error) {
            return new Response({
                isOK:false,
                data:error,
                api:EndPoints.MESSAGE.CREATE_MESSAGE
            })
        }
    }
}

export default MessageAPI;
