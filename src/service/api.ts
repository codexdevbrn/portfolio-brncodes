import axios from "axios";

const gitToken = process.env.REACT_APP_AUTH_KEY

const api =  axios.create({
    baseURL: 'https://api.github.com/',
    headers: {
        Authorization: `Bearer ${gitToken}`
    }
});

export default api;