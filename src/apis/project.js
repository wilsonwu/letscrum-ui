import axios from 'axios';

const version = '/v1';

export const getProjects = (params) => axios.get(`${version}/projects`, { params });

export const getProject = (projectId) => axios.get(`${version}/projects/${projectId}`);
