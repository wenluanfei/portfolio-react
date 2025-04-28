import React from 'react';
import ReactDOM from 'react-dom/client';  // 注意这里的导入路径
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 使用 React 18 的新 API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
