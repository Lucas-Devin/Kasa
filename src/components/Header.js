import '../App.css';
import logo from '../LOGO.png';

function Header() {
    return (
      <div className="Header">
        <img src={logo} alt="logo Kasa"></img>
           <div className="nav">
              <p>A Propos</p>
              <p>Accueil</p>
           </div>
      </div>
    );
  }

export default Header;
