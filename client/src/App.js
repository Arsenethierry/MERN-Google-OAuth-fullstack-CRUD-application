import { ThemeProvider } from '@mui/material/styles';
import React,{ useEffect } from 'react';
import Feeds from './Pages/Feeds';
import {theme} from './theme';
import { getPosts } from './features/posts'
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])
  return (
    <>
  <ThemeProvider theme={theme}>
    <Feeds />
  </ThemeProvider>   
    </>
  );
}

export default App;
