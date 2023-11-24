import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsLetter</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/Business" className="nav-link active" aria-current="page">Business</Link>
              </li>
              <li className="nav-item">
                <Link to="/Entertainment" className="nav-link">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link to="/Health" className="nav-link">Health</Link>
              </li>
              <li className="nav-item">
                <Link to="Science" className="nav-link active" aria-current="page">Science</Link>
              </li>
              <li className="nav-item">
                <Link to="/Sports" className="nav-link">Sports</Link>
              </li>
              <li className="nav-item">
                <Link to="/Technology" className="nav-link active" aria-current="page">Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
