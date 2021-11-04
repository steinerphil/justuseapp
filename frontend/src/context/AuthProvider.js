import {createContext, useState} from "react";
import {postGithubLogin, postLogin} from "../service/loginApiService";
import {useHistory} from "react-router-dom";


export const AuthContext = createContext({})

export default function AuthProvider({children}) {

    const [token, setToken] = useState()
    const history = useHistory()

    const login = (credentials) => {
        postLogin(credentials)
            .then(response => response.data)
            .then(data => {
                setToken(data)
            })
            .then( () => history.push("/"))
            .catch(err => console.log(err))
    }

    function loginWithGithub(code){
        postGithubLogin(code)
            .then(response => response.data)
            .then(token => {
                setToken(token)})
            .then(() => history.push("/"))
            .catch(err => console.log(err))
    }


    return(
        <AuthContext.Provider value={{token, login, loginWithGithub}}>
            {children}
        </AuthContext.Provider>
    )
}