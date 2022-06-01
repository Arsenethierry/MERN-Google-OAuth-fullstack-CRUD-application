import { LockClockOutlined } from '@mui/icons-material';
import { Avatar, Button, Container, Grid, Paper, Typography } from '@mui/material';
import React,{ useState, useEffect } from 'react';
import Input from './Input';
import useStyles from './styles';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { auth } from '../../features/auth';
import { useNavigate } from "react-router-dom"

function Auth() {
    const dispatch = useDispatch()
    const classes = useStyles();
    const navigate = useNavigate()
    const [isSignup,setIsSignup] = useState(false)
    const [showPassword,setShowPassword] = useState(false)

    function handleCallBackResponse(response){
        var token = response.credential
        var results = jwt_decode(response.credential)

        try {
            dispatch(auth({ data: {results,token}})) 

            navigate("/")
        } catch (error) {
           console.log(error) 
        }
    }
    useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
            client_id:"209579667443-pfae01484dehbvbc59057jq5dcfsn7t9.apps.googleusercontent.com",
            callback: handleCallBackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById("signin"),
            { theme: "outline", size:"large" }
        )
    },[handleCallBackResponse])

    const handleSubmit = () =>{

    }
    const handleChange = () =>{

    }
    const switchMode = () => {
        setIsSignup((prev)=>(!prev));
        handleShowPassword(false)
    }
    // const googleSuccess = async(res) =>{
    //     console.log(res)
    // }
    // const googleFailure = (error) =>{
    //     console.log(error)
    //   console.log("google sign in unsuccessfull")  
    // }
    const handleShowPassword = () => setShowPassword((prevShowPassword)=> !prevShowPassword)

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockClockOutlined />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
                <form className='classes.form' onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                <Input name="firstname" label="FIrst Name" handleChange={handleChange} autoFocus half />
                                <Input name="firstname" label="FIrst Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword? "text":"password"} handleShowPassword={handleShowPassword} />
                        {
                            isSignup && <Input name="comfirmpassword" label="Repeat Password" handleChange={handleChange} type="password" />
                        }
                    </Grid>
                    <Button type='submit' fullWidth variant="contained" color="info" className="classes.submit">
                        {isSignup? 'Sign Up':'Sign In'}
                    </Button>
                    {/* <GoogleLogin
                        clientId='209579667443-pfae01484dehbvbc59057jq5dcfsn7t9.apps.googleusercontent.com'
                        render={(renderProps)=>(
                            <Button
                             className={classes.googleButton } 
                             color="info" 
                             fullWidth 
                             onClick={renderProps.onClick} 
                             
                             startIcon={<Icon />}
                             variant="contained"
                             >
                                 Google Sign In
                             </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    /> */}
                    <Grid item>
                        <div id="signin"></div>
                    </Grid>
                    
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup? 'Already have account? Sign In':"Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper> 
        </Container>
    );
}

export default Auth;