import React from 'react';
import 'react-responsive/dist/react-responsive';
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
  <Rea value={{with: 300}}>
    <App />
  </ResponsiveContext.Provider>
);
