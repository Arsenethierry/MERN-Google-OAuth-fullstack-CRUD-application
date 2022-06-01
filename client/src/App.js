import { ThemeProvider } from '@mui/material/styles';
import React,{ useEffect,useState } from 'react';
import Feeds from './Pages/Feeds';
import {theme} from './theme';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Profile from './Pages/Profile';
import AboutUs from './Pages/AboutUs';
import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar';
import { getPosts } from './features/posts';
import { useDispatch } from 'react-redux';



function App() {
  const [currentId,setCurrentId] = useState(0);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
   

    useEffect(()=>{
      dispatch(getPosts())
    },[currentId,dispatch])

  return (
    <>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Navbar currentId={currentId} setCurrentId={setCurrentId} user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Feeds setCurrentId={setCurrentId} user={user}/>} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>   
    </>
  );
}

export default App;
