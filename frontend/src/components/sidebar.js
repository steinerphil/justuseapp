import Box from '@mui/material/Box';
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
import {useHistory} from "react-router-dom";

const drawerWidth = 180;

export default function Sidebar() {

    const history = useHistory();

    function renderList() {
        if (!localStorage.getItem("token")) {
            return {
                "a": ["Suchen"],
                "b": ["Login"]
            }
        } else {
            return {
                "a": ['Suchen', 'Favoriten', 'Gemietet'],
                "b": ["Account"]
            }
        }
    }

    function handleItemClick(text) {
        switch (text){
            case "Login": return history.push("/login");
            default: return null;
        }
    }


    return (
    <Box sx={{display: 'flex'}}>
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                marginRight: '2px',
                minHeight: '100vh',
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    position: 'relative',
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
                                    "Login": <LockOpenTwoToneIcon/>
                                }[text]
                            }
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    </Box>
);
}
