import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import { Box, Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';



function Posts({setCurrentId}) {
    const posts = useSelector((state)=> state.posts.posts);
 return(
     <Box flex={4} p={{xs:0,md:2}} sx={{ backgroundColor: '#001E3C' }}>
        {!posts.length ? <CircularProgress/>:(
            <Grid container alignItems="stretch" spacing={2} sx={{padding: "5px"}}>
            {posts.map((post) =>(
            <Grid key={post._id} item xs={12} sm={6} md={4} lg={3}>
                <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
            ))}
        </Grid>
        )}
     </Box>
 );
};

export default Posts;