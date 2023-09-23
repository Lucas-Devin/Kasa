import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Routes, Route} from "react-router-dom"
import Accueil from "./components/accueil";
import About from "./components/About";

//import Logement from "./Logement";
//import Error from "./Pages/Error";


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Accueil/>}/> 
        <Route path="/propos" element={<About/>}/>
      </Routes>

    </div>
  )
}

export default App;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
