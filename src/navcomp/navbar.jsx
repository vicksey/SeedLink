
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext.jsx"; // Adjust the relative path
import "./Navbar.css";


const Navbar = () => {
 const [scrolled, setScrolled] = useState(false);
 const { user } = useContext(UserContext); // Access user data from context


 useEffect(() => {
   const handleScroll = () => {
     setScrolled(window.scrollY > 50); // Change class when scrolled 50px down
   };


   window.addEventListener("scroll", handleScroll);
   return () => {
     window.removeEventListener("scroll", handleScroll);
   };
 }, []);


 return (
   <nav className={`navbar ${scrolled ? "scrolled" : "default"}`}>
     <div className="logo">SeedLink 🌱</div>
     <ul className="nav-links">
       <li><Link to="/">Home</Link></li>
       <li><Link to="/dashboard">Dashboard</Link></li>
       <li><Link to="/Upload">Upload</Link></li>
       <li><Link to="/community">Community</Link></li>
       {!user ? (
         <li><Link to="/login" className="login-btn">Login</Link></li>
       ) : (
         <li className="user-name">Hello, {user.name}</li>
       )}
     </ul>
   </nav>
 );
};


export default Navbar;