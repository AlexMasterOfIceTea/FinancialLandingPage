import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DarkmodeProvider } from './DarkmodeProvider';

ReactDOM.render(
  <React.StrictMode>
    <DarkmodeProvider>
      <App />
    </DarkmodeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
