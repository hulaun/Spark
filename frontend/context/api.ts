import axios, { AxiosRequestConfig } from 'axios';
import { REACT_APP_SERVER_ENDPOINT } from "@env";

const api = axios.create({
  baseURL: REACT_APP_SERVER_ENDPOINT,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((req) => {
  console.log(`api ${req.method} ${req.url}`);
  return req;
});
api.interceptors.response.use((res) => {
  console.log(`api response ${res.status}`);
  console.log(res.data);
  return res;
});

// Optional helper to set token
export const setAuthToken = (token?:string) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

type RequestParams = {
  path: string;
  data?: any;
  options?: AxiosRequestConfig;
  signal?: AbortSignal;
};

export const get = async ({ path, data, options = {}, signal }: RequestParams) => {
  return await api.get(path, {
    ...options,
    params: data, 
    signal,
  });
};

export const post = async ({ path, data, options = {}, signal }: RequestParams) => {
  return await api.post(path, data, {
    ...options,
    signal,
  });
};