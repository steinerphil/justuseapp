import {createContext, useState} from "react";
import {postLogin} from "../service/productApiService";
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

    return(
        <AuthContext.Provider value={{token, login}}>
            {children}
        </AuthContext.Provider>
    )
}