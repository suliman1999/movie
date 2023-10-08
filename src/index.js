import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Router>
      <App/>
    </Router>
    
    {/* <App/> */}
  </React.StrictMode>
);

