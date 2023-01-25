import { BrowserRouter as Router, Link } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => (
  <Router>
    <nav className="container-fluid d-flex justify-content-end">
      <div className="container-fluid">
        <h4 data-testid="header">Math Magician!</h4>
      </div>
      <Link className="mx-1 fw-bold" to="/">Home</Link>
      <span>|</span>
      <Link className="mx-1 fw-bold" to="/calculator">Calculator</Link>
      <span>|</span>
      <Link className="mx-1 fw-bold" to="/quote">Quote</Link>
    </nav>
  </Router>
);

export default Navbar;
