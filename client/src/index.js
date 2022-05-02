import React from 'react';
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

store.dispatch(getPosts())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

