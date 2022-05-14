import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import PublishIcon from '@mui/icons-material/Publish';
import Typography from '@mui/material/Typography';
import { IconButton, Paper, TextField, Tooltip } from '@mui/material';
import useStyles from './formStyle'
import FileBase from 'react-file-base64'



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

export default function FormPost() {
    const classes = useStyles()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
          Create Post
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Paper className='classes.paper'>
        <form  className={`${classes.root} ${classes.form}`} autoComplete='off'>
        <TextField name='creator' variant='outlined' label='Creator' fullWidth value='creator' />
        <TextField name='creator' variant='outlined' label='Creator' fullWidth value='creator' />
        <TextField name='creator' variant='outlined' label='Creator' fullWidth value='creator' />
        <TextField name='creator' variant='outlined' label='Creator' fullWidth value='creator' />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} /></div>
        <Button className={classes.buttonSubmit}  variant='contained' color='info' size='large' type='submit' fullWidth>Submit</Button>
        <Button variant='contained' color='secondary' size='small' fullWidth>Clear</Button>
        </form>
    </Paper>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
