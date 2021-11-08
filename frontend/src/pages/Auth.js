import {useContext, useEffect} from "react";
import {AuthContext} from "../context/AuthProvider";
import {Backdrop, CircularProgress} from "@mui/material";

export default function Auth ({code}) {

    const { loginWithGithub } = useContext(AuthContext)

    useEffect(() => {
        const codeToJson = {code}
        loginWithGithub(codeToJson)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}

        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )

}