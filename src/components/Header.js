import '../App.css';
import logo from '../LOGO.png';

function Header() {
    return (
      <div className="Header">
        <img src={logo} alt="logo Kasa"></img>
           <div className="nav">
              <p>Accueil</p>
              <p>A Propos</p>
           </div>
      </div>
    );
  }

export default Header;
