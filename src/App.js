import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import React from 'react';
import Navbar from './components/navigation/Navbar';
import Calculator from './components/calculator';
import Home from './components/pages/Home/Home';
import Quote from './components/pages/Quote/Quote';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  </>
);

export default App;
