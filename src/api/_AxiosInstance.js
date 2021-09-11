import axios from 'axios';
import { domain } from './EndPoints';

export const axiosAgent = axios.create({
    baseURL: domain,
});

axiosAgent.interceptors.response.use(
    (response) => response,

    (error) => {
        console.error(`Axios Error: ${error}`);
        return Promise.reject(error);
    },
);
