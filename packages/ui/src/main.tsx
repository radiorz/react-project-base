<<<<<<< HEAD
import React from 'react';
import ReactDom from 'react-dom/client';
=======
// import '@ant-design/v5-patch-for-react-19';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
>>>>>>> dde3efdbe2e694e70d5f2dd23e9aa6af3e3a0311
import './index.css';
import App from './App.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';

ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
