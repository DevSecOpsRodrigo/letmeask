import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './services/firebase';

import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const mobileApp = renderToString(
  <ResponsiveContext.Provider value={{with: 300}}>
    <App />
  </ResponsiveContext.Provider>
);
