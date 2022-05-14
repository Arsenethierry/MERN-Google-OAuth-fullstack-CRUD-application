import { Avatar, Card, IconButton, Typography } from '@mui/material';
import React from 'react';
import { styled } from "@mui/material/styles";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useStyles from './styles';


function Post({post}) {
    const classes = useStyles();
    return (
        <>
        <Card className={classes.card}>
            <CardHeader 
             avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label={post.creator}>
                    R
                </Avatar>
             }
             action={
                <IconButton arial-label="edit">
                    <MoreVertIcon />
                </IconButton>
             }
             title={post.creator}
             subheader="may 1"
             />
            <CardMedia className={classes.media}
                image="https://images.pexels.com/photos/11887829/pexels-photo-11887829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="place"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post.message}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton aria-label="connect">
                    <AddCircleRoundedIcon />
                </IconButton>
            </CardActions>
        </Card>
        </>
    );
}

export default Post;