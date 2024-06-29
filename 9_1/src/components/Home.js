import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li>
            <Link to="/contact">Contact</Link>
            <ul>
              <li><Link to="/contact/us">Contact Us</Link></li>
              <li><Link to="/contact/pl">Contact PL</Link></li>
              <li><Link to="/contact/de">Contact DE</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
