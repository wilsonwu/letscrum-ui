import axios from 'axios';
import { version } from './base';

export const postSignIn = (params) => axios.post(`${version}/signin`, params);

export const getVersion = () => axios.get(`${version}/version`);
