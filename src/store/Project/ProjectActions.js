import ActionTypes from '../../actions/actionTypes';
import ProjectAPI from '../../api/ProjectAPI';

const createProject =(payload)=>{
    return {
        type: ActionTypes.PROJECT.CREATE_PROJECT,
        payload: payload
    }
}

export const createProjectAsync =(project)=>{
    return async (dispatch)=>{
        const response = await ProjectAPI.createProject(project);
        console.log(response.data)
        dispatch(createProject(response.data));
        return response ;
    }
}
