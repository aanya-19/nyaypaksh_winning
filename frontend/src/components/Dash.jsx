import React, {useContext} from "react";
import  "../styles/Dash.css";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
const { judgeName } = useContext(AuthContext);
  return (
    <div className="portal-container">
    <div className="judge-card">

    <div className="judge-photo">
    <i class='bx bx-user' ></i>
    </div>

   
    <div className="judge-details">
      <div className="info-card">
        <h2>Judge Information</h2>
        <div className="info-item">
          <strong>Name:</strong>
          <span>{ judgeName }</span>
        </div>
        <div className="info-item">
          <strong>Judge ID:</strong>
          <span>JD12345</span>
        </div>
        <div className="info-item">
          <strong>Age:</strong>
          <span>45</span>
        </div>
        <div className="info-item">
          <strong>Jurisdiction:</strong>
          <span>Commercial Law</span>
        </div>
        <div className="info-item">
          <strong>Contact Number:+91 7426814253</strong>
          <span></span>
        </div>
        <div className="info-item">
          <strong>Address:</strong>
          <span>12 , Sector 3 , R.K Puram new Delhi - 110023</span>
        </div>
        <div className="info-item">
          <strong>Specialization:</strong>
          <span>Corporate Law, Taxation</span>
        </div>
        <div className="info-item">
          <strong>Experience:</strong>
          <span>15 years</span>
        </div>
      </div>
      <button className="contact-button">Change Personal Info</button>
    </div>
  </div>
  </div>
  );

}

export default Dashboard;
