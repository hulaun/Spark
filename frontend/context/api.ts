import axios from 'axios';

export const api = axios.create({
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