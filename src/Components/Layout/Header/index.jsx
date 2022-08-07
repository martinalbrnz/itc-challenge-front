import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link to="login" className="nav-link">
            LOGIN
          </Link>
        </li>
        <li className="nav-item">
          <Link to="about" className="nav-link">
            ABOUT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
