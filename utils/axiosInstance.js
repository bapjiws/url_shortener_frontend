import axios from 'axios';

if (process.env.NODE_ENV === 'production') console.log('HOST:', `${process.env.HEROKU_URL}:${process.env.PORT}`);
// const dotEnvVars = require('dotenv').config().parsed;
// console.log('dotEnvVars:', dotEnvVars);
console.log('process.env:', process.env);

export const getAxiosInstance = () => {
    return axios.create({
        // Our proxy server -- mimics all the routes exactly so that it can be substituted w/ a CORS-supporting server.
        // TODO: rename HEROKU_URL into APP_URL
        baseURL: process.env.NODE_ENV === 'production' ? process.env.HEROKU_URL : process.env.PROXY,
        headers: {'Content-Type': 'application/json'}
    });
};