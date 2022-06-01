import React,{ useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import postsReducer from './features/posts';
import authReducer from './features/auth';

const store = configureStore({
  reducer: {
    posts : postsReducer,
    auth : authReducer
  },
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

