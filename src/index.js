import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Todo from './components/Todo/Todo';
import { Provider } from 'react-redux';
import { store } from './components/app/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <Todo />
    </Provider>
  </React.StrictMode>
);


