import picture from './images/PathFinder.png';
import { Link } from 'react-router-dom';
import AuthDetails from './components/AuthDetails';

export default function NavBar() {
  return (
    <>
      <header>
        <nav className="navbar">
          <Link to="/">
            <img className="logo" src={picture} alt="" />
          </Link>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/premium-feature">Premium Feature </Link>
            </li>
            <li>
              <Link to="/how-to-play">How to Play</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact us </Link>
            </li>
          </ul>
          <button className="login-btn">
            <Link className="login-nav-btn" to="/login">
              LOG IN
            </Link>
          </button>
        </nav>
      </header>
    </>
  );
}

