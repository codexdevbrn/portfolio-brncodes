import axios from "axios";

const gitToken = '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';

const api =  axios.create({
    baseURL: 'https://api.github.com/',
    headers: {
        Authorization: `Bearer ${gitToken}`
    }
});

export default api;