import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import {useHistory} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/AuthProvider";
import styled from "styled-components/macro";

const drawerWidth = 180;

export default function Sidebar() {

    const history = useHistory();
    const {logout} = useContext(AuthContext)

    function renderList() {
        if (!localStorage.getItem("token")) {
            return {
                "a": ["Suchen"],
                "b": ["Login"]
            }
        } else {
            return {
                "a": ['Suchen', 'Favoriten', 'Gemietet'],
                "b": ["Account", "Logout"]
            }
        }
    }

    function handleItemClick(text) {
        switch (text){
            case "Login": return history.push("/login");
            case "Logout": return logout();
            default: return null;
        }
    }


    return (
<WhiteBox>
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                marginRight: '2px',
                minHeight: '100vh',
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    marginTop: "75px",
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Divider/>
            <List>
                {
                    renderList().a.map((text, index) => (
                            <ListItem button key={text} onClick={() => (handleItemClick(text))}>
                                <ListItemIcon>
                                    {
                                        {
                                            "0": <SearchIcon/>,
                                            "1": <ThumbUpTwoToneIcon/>,
                                            "2": <AccessTimeTwoToneIcon/>
                                        }[index]
                                    }
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItem>
                        )
                    )}
            </List>
            <Divider/>
            <List>
                {renderList().b.map((text) => (
                    <ListItem button key={text} onClick={() => (handleItemClick(text))}>
                        <ListItemIcon>
                            {
                                {
                                    "Account": <AccountCircleTwoToneIcon/>,
                                    "Login": <LockOpenTwoToneIcon/>,
                                    "Logout": <LockTwoToneIcon/>,
                                }[text]
                            }
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </Drawer>
</WhiteBox>
);
}

const WhiteBox = styled.div`
background-color: white
`
