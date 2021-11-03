import axios from 'axios';

const getHeader = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
}

export function postLogin(credentials) {
    return axios.post("auth/login", credentials)
}