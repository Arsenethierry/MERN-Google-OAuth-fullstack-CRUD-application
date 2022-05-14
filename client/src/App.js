import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import Feeds from './Pages/Feeds';
import {theme} from './theme'


function App() {

  return (
    <>
  <ThemeProvider theme={theme}>
    <Feeds />
  </ThemeProvider>   
    </>
  );
}

export default App;
