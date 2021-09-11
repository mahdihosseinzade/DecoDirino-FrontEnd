
import EndPoints from "./EndPoints";
import {axiosAgent} from "./_AxiosInstance";

const ProjectAPI={

    createProject: async (project)=>{
        try {
            const res = await axiosAgent.post(EndPoints.PROJECT.CREATE_PROJECT,project);
            return new Response({
                isOK:true,
                data:res,
                api:EndPoints.PROJECT.CREATE_PROJECT
            })
        }
        catch (error) {
            return new Response({
                isOK:false,
                data:error,
                api:EndPoints.PROJECT.CREATE_PROJECT
            })
        }
    }

    //getProject
}

export default ProjectAPI;
