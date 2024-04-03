import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            horizontalLineHeight: '24px',
            activeBarHeight: 0,
            itemColor: '#71717A',
            itemHoverColor: '#09090B',
            itemSelectedColor: '#09090B'
          },

          Table: {
            headerBg: 'none',
            headerSplitColor: 'none',
            headerColor: '#71717A',
          }
        }
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

