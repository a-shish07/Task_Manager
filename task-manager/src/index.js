import React from 'react';
import { createRoot } from 'react-dom/client'; // For React 18
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);