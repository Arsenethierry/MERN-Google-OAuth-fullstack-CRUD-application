import React from 'react';
import { Avatar, Box, Card, CardHeader, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Group, Home, Storefront } from "@mui/icons-material";


function Sidebar({user}) {

    return (
        <>
        <Box p={2} sx={{ flexGrow:1, display: { xs: "none", sm: "block" } }}>
            <Box alignItems="center" position="fixed" color="white">
                {user? (
                <Card sx={{ width: 290 }}>
                    <CardHeader
                        avatar={
                            <Avatar alt={user?.results.name} src={user?.results.picture} sx={{ width: 56, height: 56 }}/>
                          }
                          
                        />
                        <Divider />
                        <Typography variant="h5" component="div">
                            Welcome {user?.results.name}
                        </Typography>
                </Card>): <div></div>}
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Home sx={{color: "white", fontSize: 30}}/>
                        </ListItemIcon>
                        <ListItemText primary="Homepage" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Group sx={{color: "white", fontSize: 30}}/>
                        </ListItemIcon>
                    <ListItemText primary="Groups" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Storefront sx={{color: "white", fontSize: 30}}/>
                        </ListItemIcon>
                        <ListItemText primary="Marketplace" />
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
        </Box>
        </>
    );
}

export default Sidebar;