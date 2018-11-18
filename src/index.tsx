import * as React from 'react';
import * as ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/App/App';
import './index.css';

axios.defaults.baseURL = 'http://localhost:3010';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
