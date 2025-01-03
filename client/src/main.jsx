
import { createRoot } from 'react-dom/client'
import React from 'react';
import { Provider } from 'react-redux';

import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

  <Provider store={store}>
    <App />
  </Provider>
    
  </BrowserRouter>


)
