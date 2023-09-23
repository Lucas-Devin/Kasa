import Banner from './Banner';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import '../App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';

function Accueil() {
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <div class="cardcolumn">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <Footer />
  </React.StrictMode>
);
}

export default Accueil;
