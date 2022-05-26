import React from 'react';
import { Box, List, ListItem, ListItemButton, IconButton, ListItemIcon, Tooltip } from '@mui/material';
import { Publish, AccountCircle } from '@mui/icons-material';
import FormPost from './FormPost'
import {
    AppBar, InputBase, Toolbar, Typography
} from "@mui/material";
import styled from '@emotion/styled';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});
const Search = styled("div")(({ theme })=>({
    backgroundColor: "#b1afb6",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

function Navbar( { currentId,setCurrentId } ) {
    return (
       <AppBar position="sticky">
           <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
                    AltLinks 
                </Typography>
                <Search>
                    <InputBase placeholder='Search...' />
                </Search>
                    <Typography>
                        AltLinks 
                    </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    }}>
                    <Tooltip title="Upload">
                        <IconButton>
                            <Publish sx={{ color: "white" }}/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Upload">
                        <IconButton>
                            <FormPost currentId={currentId} setCurrentId={setCurrentId} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="My Account">
                        <IconButton>
                            <AccountCircle sx={{ color: "white" }}/>
                        </IconButton>
                    </Tooltip>
                </Box>  
           </StyledToolbar>
       </AppBar> 
    );
}

export default Navbar;