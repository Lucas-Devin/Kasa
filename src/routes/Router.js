import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Accueil from "../components/Accueil";
import About from "../components/About";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Error from "../components/Error";
import Accommodation from "../components/Accommodation";

// <Route path="/fiche-logement/:id" element={<Accommodation />} />

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/propos" element={<About />} />
          <Route path="/fiche-logement/:id" element={<Accommodation />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
