import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/auth/actions";

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.auth).length > 0;
  const handleLogout = () => {
    localStorage.clear("token");
    dispatch(logout());
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            HOME
          </Link>
        </li>
        {!auth && (
          <li className="nav-item">
            <Link to="login" className="nav-link">
              LOGIN
            </Link>
          </li>
        )}
        <li className="nav-item">
          <Link to="about" className="nav-link">
            ABOUT
          </Link>
        </li>
        {auth && (
          <li className="nav-item">
            <Link to="product" className="nav-link">
              CREATE
            </Link>
          </li>
        )}
        {auth && (
          <li className="nav-item">
            <button onClick={() => handleLogout()} className="btn mx-2 mb-4 nav-link">
              LOGOUT
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
