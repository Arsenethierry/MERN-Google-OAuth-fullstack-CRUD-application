import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Group, Home, Storefront } from "@mui/icons-material";

function Sidebar() {
    return (
        <Box position="fixed" flex={1} p={2} sx={{ display: { xs: "none", sm: "block" }, color: "white"  }} >
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
    );
}

export default Sidebar;