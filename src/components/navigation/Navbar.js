import { Link } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => (
  <nav className="container-fluid d-flex justify-content-end">
    <div className="container-fluid">
      <h4>Math Magician!</h4>
    </div>
    <Link className="mx-1 fw-bold" to="/">Home</Link>
    <span>|</span>
    <Link className="mx-1 fw-bold" to="/calculator">Calculator</Link>
    <span>|</span>
    <Link className="mx-1 fw-bold" to="/quote">Quote</Link>
  </nav>
);

export default Navbar;
