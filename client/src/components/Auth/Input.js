import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import React from 'react';

function Input({ name,label,autoFocus,type,handleChange,handleShowPassword, half }) {
    return (
        <Grid item xs={12} sm={ half ? 6 : 12}>
            <TextField 
            name={name}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            InputProps={name === 'password' ? {
                endAdorment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                            {type === 'password' ? <Visibility /> : <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                )
            }: null}
            />
        </Grid>
    );
}

export default Input;