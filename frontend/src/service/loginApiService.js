import axios from 'axios';



export function postLogin(credentials) {
    return axios.post("auth/login", credentials)
}

export function postGithubLogin(code) {
    return axios
        .post('auth/github', code)
}

export function getClientId() {
    return axios.get("/auth/config").then(response => response.data)
}