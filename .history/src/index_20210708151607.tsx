import React from 'react';
import  {ResponsiveContext} from 'react-responsive/';
import ReactDOM from 'react-dom';
import {renderToString} from 'react-dom/server';
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
