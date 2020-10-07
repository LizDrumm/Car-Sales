import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import { createStore } from "redux";
import { Provider } from "react-redux";
import { carListReducer } from "./reducers/carListReducer"


const store = createStore(carListReducer);

//SECOND- wrapped provider around app and defined store


const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store ={store}>
    <App />
    </Provider>, rootElement);
