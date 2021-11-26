import {createContext, useState} from "react";
import {postGithubLogin, postLogin} from "../service/loginApiService";
import {useHistory} from "react-router-dom";


export const AuthContext = createContext({})

export default function AuthProvider({children}) {

    const [token, setToken] = useState(null);
    const history = useHistory();


    const login = (credentials) => {
        postLogin(credentials)
            .then(response => response.data)
            .then(data => {
                setToken(data)
                localStorage.setItem('token', data)
            })
            .then(() => history.goBack())
            .catch(err => console.log(err))
    }

    function loginWithGithub(code) {
        postGithubLogin(code)
            .then(response => response.data)
            .then(token => {
                setToken(token)
                localStorage.setItem('token', token)
            })
            .then(() => history.push("/"))
            .catch(err => console.log(err))
    }

    function logout() {
        setToken(null);
        localStorage.clear()
        history.push("/")
    }


    return (
        <AuthContext.Provider value={{token, login, loginWithGithub, logout}}>
            {children}
        </AuthContext.Provider>
    )
}