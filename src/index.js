import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'; // Correct import
import { userStore } from './store/store'; // Correct import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={userStore}>
    <App/>
  </Provider>
);