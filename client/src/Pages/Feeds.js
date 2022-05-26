import { Grid } from '@mui/material';
import React,{useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Posts from '../components/Posts/Posts';
import { getPosts } from '../features/posts'
import { useDispatch } from 'react-redux';


function Feeds() {
    const [currentId,setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getPosts())
    },[currentId,dispatch])
    return (
        <>
        <Navbar currentId={currentId} setCurrentId={setCurrentId}/>
        <Grid container spacing={2} >
            <Grid item xs={12} sm={2} sx={{ backgroundColor: '#0A1929' }} >
                <Sidebar />
            </Grid>
            <Grid item xs={12} sm={10} sx={{ backgroundColor: '#132F4C' }} >
                <Posts setCurrentId={setCurrentId}/>
            </Grid>
        </Grid>
        </>
    );
}

export default Feeds;