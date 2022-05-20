import React,{ useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import postsReducer, { getPosts } from './features/posts';

const store = configureStore({
  reducer: {
    posts : postsReducer
  },
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

