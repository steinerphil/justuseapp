import {useContext, useEffect} from "react";
import {AuthContext} from "../context/AuthProvider";

export default function Auth ({code}) {

    const { loginWithGithub } = useContext(AuthContext)

    useEffect(() => {
        const codeToJson = {code}
        loginWithGithub(codeToJson)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <h2>logging in...</h2>
    )

}