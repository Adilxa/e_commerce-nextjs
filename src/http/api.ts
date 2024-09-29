import axios from "axios";

const BASE = "http://localhost:4000/api";

const $api = axios.create({
    baseURL: BASE
})

$api.interceptors.request.use(request => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
        request.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return request;
}, error => {
    return Promise.reject(error);
});

export default $api 