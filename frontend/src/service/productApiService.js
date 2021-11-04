import axios from 'axios';



export function postLogin(credentials) {
    return axios.post("auth/login", credentials)
}