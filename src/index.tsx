import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './index-allStyles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import SuccessPage from 'pages/success/SuccessPage';
import Policy from 'pages/policy/Policy';
import Oferta from 'pages/oferta/Oferta';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Page404 />,
  },
  {
    path: '/success',
    element: <SuccessPage />,
  },
  {
    path: '/privacy-policy',
    element: <Policy />,
  },
  {
    path: '/oferta',
    element: <Oferta />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
