import React,{ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../features/posts';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import PublishIcon from '@mui/icons-material/Publish';
import { IconButton, Paper, TextField, Tooltip } from '@mui/material';
import useStyles from './formStyle';
import FileBase from 'react-file-base64';
import { useEffect } from 'react';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function FormPost({ currentId,setCurrentId }) {

  const classes = useStyles()
  const [open, setOpen] = useState(false);
  const [postData, setPostData] = useState({ creator: "", title: "", message: "", tags: "", selectedFile: "" });
  const post = useSelector((state)=> (currentId ? state.posts.posts.find((p)=> p._id === currentId):null));
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const Clear = ()=>{
    setPostData({  creator: "", title: "", message: "", tags: "", selectedFile: "" })
  }

  useEffect(()=>{
    if(post) setPostData(post);
  },[post])
  
  const handleSubmit = async (e)=>{
    e.preventDefault();

    if(currentId){
      dispatch(updatePost(currentId,postData))
      Clear()
    }else{
      dispatch(createPost(postData))
      Clear()
    }
  }

  return (
    <div>
        <Tooltip title="Upload">
            <IconButton onClick={handleClickOpen}>
                <PublishIcon sx={{ color: "white" }}/>
            </IconButton>
        </Tooltip>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {currentId ? `Editing "${post.title}"`: 'Creating a post'}
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Paper className='classes.paper'>
        <form  className={`${classes.root} ${classes.form}`} autoComplete='off' noValidate onSubmit={handleSubmit} >
        <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData, creator: e.target.value})} />
        <TextField name='creator' variant='outlined' label='title' fullWidth value={postData.title} onChange={(e)=> setPostData({...postData, title: e.target.value})} />
        <TextField name='creator' variant='outlined' label='message' fullWidth value={postData.message} onChange={(e)=> setPostData({...postData, message:e.target.value })} />
        <TextField name='creator' variant='outlined' label='include coma for multiple tags' fullWidth value={postData.tags} onChange={(e)=> setPostData({...postData,tags: e.target.value.split(',')})} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 })=> setPostData({...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit}  variant='contained' color='info' size='large' type='submit' fullWidth>Submit</Button>
        <Button variant='contained' color='secondary' size='small' fullWidth onClick={Clear} >Clear</Button>
        </form>
    </Paper>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
