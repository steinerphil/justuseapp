import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import {useHistory} from "react-router-dom";


export default function BottomNavi() {
    const history = useHistory()

    function handleItemClick(newValue) {
        switch (newValue){
            case 0: return history.push("/products/overview");
            case 1: break;
            case 2: break;
            case 3: return  history.push("/administration")
            default: return null;
        }
    }

    function renderNavigation() {
        if (localStorage.getItem("token")) {
            return (
                <BottomNavigation
                    showLabels
                    onChange={(event, newValue) => {
                        handleItemClick(newValue);
                    }}
                >
                    <BottomNavigationAction label="Suchen" icon={<SearchIcon/>}/>
                    <BottomNavigationAction label="Favoriten" icon={<ThumbUpTwoToneIcon/>}/>
                    <BottomNavigationAction label="Gemietet" icon={<AccessTimeTwoToneIcon/>}/>
                    <BottomNavigationAction label="Settings" icon={<SettingsTwoToneIcon/>}/>
                </BottomNavigation>
            )
        }
        return (
            <></>
        )
    }

    return (
        <Box sx={{pb: 7, zIndex: 1}}>
            <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
                {renderNavigation()}
            </Paper>
        </Box>
    );
}