import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';



function Posts({setCurrentId}) {
    const posts = useSelector((state)=> state.posts.posts);
 return(
     !posts.length ? <CircularProgress/> : (
        <Grid container alignItems="stretch" spacing={2}>
            {posts.map((post) =>(
            <Grid key={post._id} item xs={12} sm={3} md={3}>
                <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
            ))}
        </Grid>)
 );
};

export default Posts;