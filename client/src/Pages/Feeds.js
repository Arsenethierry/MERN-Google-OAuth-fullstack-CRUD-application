import { Grid } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Posts from '../components/Posts/Posts';


function Feeds() {
    return (
        <>
        <Navbar />
        <Grid container spacing={2} >
            <Grid item xs={12} sm={2} sx={{ backgroundColor: '#0A1929' }} >
                <Sidebar />
            </Grid>
            <Grid item xs={12} sm={10} sx={{ backgroundColor: '#132F4C' }} >
                <Posts />
            </Grid>
        </Grid>
        </>
    );
}

export default Feeds;