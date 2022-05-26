import { Avatar, Card, IconButton, Typography } from '@mui/material';
import React from 'react';
import moment from 'moment';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useDispatch } from 'react-redux';
import { deletePost } from '../../../features/posts';
import useStyles from './styles';


function Post({ post, setCurrentId }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
        <Card className={classes.card}>
            <CardHeader 
             avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label={post.creator}>
                    {post.creator.charAt(0)}
                </Avatar>
             }
             action={
                <IconButton 
                arial-label="edit"
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                    <MoreVertIcon />
                </IconButton>
                
             }
             
             title={post.creator}
             subheader={moment(post.createdAt).fromNow()}
             />
            <CardMedia className={classes.media}
                image={post.selectedFile ? post.selectedFile:"https://images.pexels.com/photos/11887829/pexels-photo-11887829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                alt={post.title}
            />
            <CardContent>
                <Typography variant='body2' component="h2" color="textSecondary" >{post.tags.map((tag)=>`#${tag} `)}</Typography>
                <Typography variant="body2" className={classes.title}>
                    {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {post.message}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="connect">
                    <AddCircleRoundedIcon />
                </IconButton>
            </CardActions>
        </Card>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={()=> setCurrentId(post._id)}>Edit</MenuItem>
        <MenuItem onClick={()=> dispatch(deletePost(post._id))}>Delete</MenuItem>
        <MenuItem onClick={handleClose}>Like</MenuItem>
      </Menu>
        </>
    );
}

export default Post;