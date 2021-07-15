import React from 'react';
import {Cotext as ResponsiveContext} from 'react-responsive';
import ReactDOM from 'react-dom';
import {renderToString} from 'react-dom/'
import App from './App';

import './services/firebase';

import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
