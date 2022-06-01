import { Box, Grid,Stack } from '@mui/material';
import React from 'react';
import Sidebar from '../components/SideBar/Sidebar';
import Posts from '../components/Posts/Posts';



function Feeds({ setCurrentId, user }) {
    
    return (
        <>
        <Box sx={{ backgroundColor: '#0A1929' }}>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar user={user}/>
                <Posts setCurrentId={setCurrentId}/>
            </Stack>
        </Box>
        </>
    );
}

export default Feeds;