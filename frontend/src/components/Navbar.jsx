import React, { useContext, useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, judgeName, setIsLoggedIn, setJudgeName, setJudgeEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState('en');  // Default language

  const handleLogin = () => {
    navigate("/signup");
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setJudgeName("");
    setJudgeEmail("");
    navigate("/dash");
  };
  const handleDashboard = () => {
    navigate("/dash");
  };

  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    setSelectedLanguage(lang);

    // Reinitialize Google Translate if necessary
    if (window.googleTranslateElementInit) {
      window.googleTranslateElementInit();
    }
  };

  useEffect(() => {
    // Ensure Google Translate is initialized only once
    if (window.googleTranslateElementInit) {
      window.googleTranslateElementInit();
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/home" className="custom-link">Dashboard</Link></li>
        <li><Link to="/engine" className="custom-link">Research</Link></li>
        <li><Link to="/case-prediction" className="custom-link">Prediction</Link></li>
        <li><Link to="/summary" className="custom-link">Summariser</Link></li>
        <li><Link to="/track" className="custom-link">Tracker</Link></li>
        <li><Link to="/know" className="custom-link">Resources</Link></li>
        <li><Link to="/paksh" className="custom-link">Paksh</Link></li>
      </ul>
      <ul className="featuresNav">
        
        {/* Add the Google Translate Element here */}
        <li>
          <div id="google_translate_element"></div>
        </li>
        <li>
          {isLoggedIn ? (
          <div className="navBtns">
            <button onClick={handleDashboard}>{judgeName}</button>
            <button onClick={handleLogout}><i class='bx bx-log-out-circle'></i></button>
          </div>
        ) : (
          <button className="btnnnn"><a href="/signup" >Sign Up</a></button>
          
        )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
