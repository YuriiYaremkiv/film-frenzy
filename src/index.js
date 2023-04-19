import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import { store } from '../src/redux/store';
import './index.scss';

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </Provider>
);
