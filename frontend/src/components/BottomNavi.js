import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';


export default function BottomNavi() {
    const [value, setValue] = useState(0);


    function renderNavigation() {
        if (localStorage.getItem("token")) {
            return (
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Suchen" icon={<SearchIcon/>}/>
                    <BottomNavigationAction label="Favoriten" icon={<ThumbUpTwoToneIcon/>}/>
                    <BottomNavigationAction label="Gemietet" icon={<AccessTimeTwoToneIcon/>}/>
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