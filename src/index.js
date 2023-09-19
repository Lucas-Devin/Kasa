import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import {
//  createBrowserRouter,
//  RouterProvider,
//} from "react-router-dom";
//import Root from "./routes/root";
import Banner from './components/Banner';
import Header from './components/Header';

//const router = createBrowserRouter([
//  {
//    path: "/",
//   element: <Root />,
//  },
//]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Banner />
  </React.StrictMode>
);
//<RouterProvider router={router} />

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();