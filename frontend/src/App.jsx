import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom"; 
import Navbar from "./components/Navbar"; // Import the Navbar component
import Engine from "./components/ResearchEngine";
import CasePrediction from "./components/Predictive";
import Summary from "./components/Summary";
import HomePage from "./components/HomePage";
import Track from "./components/Track";
import Paksh from "./components/Paksh";
import Dash from "./components/Dash";
import Poll from "./components/Poll";
import Resources from "./components/Resources";
import { AuthProvider } from "./context/AuthContext"; // Import the AuthProvider
import SignUp from "./components/SignUp";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <NavBarWithConditionalRender />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/engine" element={<Engine />} />
            <Route path="/case-prediction" element={<CasePrediction />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/track" element={<Track />} />
            <Route path="/paksh" element={<Paksh />} />
            <Route path="/dash" element={<Dash />} />
            <Route path="/poll" element={<Poll />} />
            <Route path="/know" element={<Resources />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

const NavBarWithConditionalRender = () => {
  const location = useLocation();
  
  // Conditionally render Navbar based on the route
  return location.pathname !== "/signup" && <Navbar />;
};

export default App;
