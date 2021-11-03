import {createContext, useState} from "react";
import {postLogin} from "../service/productApiService";


export const AuthContext = createContext({})

export default function AuthProvider({children}) {

    const [token, setToken] = useState()

    const login = (credentials) => {
        postLogin(credentials)
            .then(response => response.data)
            .then(data => {
                setToken(data)
            })
            .catch(err => console.log(err))
    }

    return(
        <AuthContext.Provider value={{token, login}}>
            {children}
        </AuthContext.Provider>
    )
}