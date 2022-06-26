import axios from "axios";

const customerApi = axios.create({
    baseURL: 'https://proxy.codebuilderpro.com/api',
});

/*
const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});*/


export default customerApi;
