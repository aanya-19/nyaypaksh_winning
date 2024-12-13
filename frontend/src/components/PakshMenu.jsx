import React from "react";
import "../styles/Paksh.css";
import { Link, useNavigate } from "react-router-dom";
function Menu() {
  return (
    <main>
          <h2>Paksh</h2>
          <p>Craft Your Poll to Gather Valuable Insights</p>
            <Link to="/poll" className="custom-link">
          <a href="#" className="btn-p">Customize</a>
          </Link>
    </main>
  );
}

export default Menu;
