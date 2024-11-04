import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './Redux/store.tsx'
import { Provider } from 'react-redux';
import './components/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
