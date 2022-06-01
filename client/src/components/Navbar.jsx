import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate,useLocation } from "react-router-dom";

import { AppBar, InputBase, Toolbar, Typography} from "@mui/material";
import styled from '@emotion/styled';
import { Box, IconButton, Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import { AccountCircle } from '@mui/icons-material';
import FormPost from './FormPost';
import { logout } from '../features/auth';


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

function Navbar( { currentId,setCurrentId, user, setUser } ) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogout = ()=>{
        dispatch(logout())

        navigate("/")

        setUser(null)
    }
    useEffect(()=>{
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])
  
    return (
       <AppBar position="sticky">
           <StyledToolbar>
               <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>
                    <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
                        SmartMe
                    </Typography>
                </Link>
                <Search>
                    <InputBase placeholder='Search...' />
                </Search>
                <Link to="aboutus" style={{ textDecoration: 'none', color: 'white' }}>
                    <Typography>
                        About
                    </Typography>
                </Link>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    }}>
                        <Box m={1}>
                            <Tooltip title="Upload">
                                <IconButton>
                                    <FormPost currentId={currentId} setCurrentId={setCurrentId} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="My Account">
                                <Link to="profile">
                                <IconButton>
                                    <AccountCircle sx={{ color: "white" }}/>
                                </IconButton>
                                </Link>
                            </Tooltip>
                            {user?(
                             <Button component="Link" to="auth" variant="contained" color="secondary" sx={{ padding: "2"}} onClick={handleLogout} >
                                 Log Out
                             </Button>
                           ):(
                            <Link to="auth" style={{ textDecoration: 'none', color: 'white' }}>
                            <Button component="Link" to="auth" variant="contained" color="secondary" sx={{ padding: "2"}} >
                                sign in
                            </Button>
                            </Link>
                           )}
                        </Box>
                </Box>  
           </StyledToolbar>
       </AppBar> 
    );
}

export default Navbar;