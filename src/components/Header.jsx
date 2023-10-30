import '../sass/Header.scss';
import logo from '../LOGO.png';
import { Link, useLocation } from "react-router-dom"

function Header() {
  const location = useLocation();
  return (
    <nav>
        <img src={logo}
            alt="Logo" />
        <ul>
            <li>
                <Link to={"/"}
                    className={location.pathname === "/" ? "active" : ""}>
                    Accueil
                </Link>
            </li>
            <li>
                <Link to={"/propos"}
                    className={location.pathname === "/propos" ? "active" : ""}>
                    A Propos
                </Link>
            </li>
        </ul>
    </nav>
    );
  }

export default Header;
