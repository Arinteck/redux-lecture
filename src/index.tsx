import * as React from 'react';
import * as ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import App from './components/App/App';
import './index.css';
import {applyMiddleware, createStore} from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/index";
import rootSaga from "./sagas";

axios.defaults.baseURL = 'http://localhost:3010';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root') as HTMLElement
);
