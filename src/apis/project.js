import axios from 'axios';
import { baseUrl, version } from './base';

export const getProjects = (params) => axios.get(`${baseUrl}${version}/projects`, { params });

export const getProject = (projectId) => axios.get(`${baseUrl}${version}/projects/${projectId}`);
