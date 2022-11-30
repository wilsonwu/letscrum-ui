import axios from 'axios';
import store from '@/store';

export const baseUrl = 'https://imoogoo.com/api';
export const version = '/v1';

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common.Authorization = `Bearer ${store.getters.accessToken}`;
