import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import App from './App';
import NotFoundPage from './NotFoundPage';
import Dashboard from './components/pages/Dashboard';
import reportWebVitals from './reportWebVitals';
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  { path: "/", element: <App/>},
  { path: "Dashboard", element: <Dashboard/> },
  { path: "Orders", element: <Dashboard/> },
  { path: "Products", element: <Dashboard/> },
  { path: "customers", element: <Dashboard/> },
  { path: "*", element: <NotFoundPage/> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
