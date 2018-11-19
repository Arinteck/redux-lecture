import * as React from 'react';
import * as ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/App/App';
import './index.css';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/index";

axios.defaults.baseURL = 'http://localhost:3010';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root') as HTMLElement
);
