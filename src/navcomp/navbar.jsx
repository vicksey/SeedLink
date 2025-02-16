import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">SeedLink 🌱</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/login" className="login-btn">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
