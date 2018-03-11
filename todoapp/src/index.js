import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <App name="T1ish" />
  </div>,
  document.getElementById("root")
);
registerServiceWorker();