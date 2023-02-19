import axios from "axios";

const gitToken = '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'

const api =  axios.create({
    baseURL: 'https://api.github.com/',
    headers: {
        Authorization: `Bearer ${gitToken}`
    }
});

export default api;