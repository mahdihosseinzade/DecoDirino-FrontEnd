import axios from 'axios';
import EndPoints from "./EndPoints";
import {axiosAgent} from "./_AxiosInstance";
import Response from "../classes/ResponseClass";
import {getToken} from "../utils/functions";


export async function login(user){

    const options = {
        method : 'post',
        url : EndPoints.USER_PANEL.LOGIN,
        data : {
            phoneNumber : user.phoneNumber
        }
    };

    const res = await axios(options);

    try {
        return new Response({
            isOK:true,
            data:res,
            api:EndPoints.USER_PANEL.LOGIN
        })
    }catch (error){
        return new Response({
            isOK: false,
            data: error.reasons,
            api: EndPoints.USER_PANEL.LOGIN
        })
    }
}

export async function verify(user){

    const res = await axiosAgent.post(EndPoints.USER_PANEL.VERIFY ,user);
    try {
        return new Response({
            isOK:true,
            data:res,
            api:EndPoints.USER_PANEL.VERIFY
        })
    }catch (error){
        return new Response({
            isOK: false,
            data: error.reasons,
            api: EndPoints.USER_PANEL.VERIFY
        })
    }
}

export async function setInfo(user){

    const token = getToken();

    console.log(user)
    console.log("1111")
    const options = {
        method : 'put',
        url : EndPoints.USER_PANEL.SETINFO,
        headers:{
            'x-auth-token' : token
        },
        data : {
            phoneNumber : user.phoneNumber,
            name:user.name,
            lastName:user.lastName,
            userName:user.userName,
            email:user.email,
            gender:user.gender,
            accept_rule:user.acceptRule,
            avatar:user.avatar,
            access:user.access
        }
    };

    const res = await axios(options)
    console.log("serInfo")
    console.log(res)

    try {
        return new Response({
            isOK:true,
            data:res,
            api:EndPoints.USER_PANEL.SETINFO
        })
    }catch (error){
        return new Response({
            isOK: false,
            data: error.reasons,
            api: EndPoints.USER_PANEL.SETINFO
        })
    }



}

export async function profile(){
    const token = getToken();

    const config = {
        headers : {
            'x-auth-token' : token
        }
    }

    try {
        const response = await axiosAgent.get(EndPoints.USER_PANEL.PROFILE,config)

        return new Response({
            isOK: true,
            data: response,
            api: EndPoints.USER_PANEL.PROFILE
        })
    } catch (error) {
        return new Response({
            isOK: false,
            data: error.response,
            api: EndPoints.USER_PANEL.PROFILE
        })
    }
}


const UserAPI = {
    login,verify,setInfo,profile
};
export default UserAPI;
