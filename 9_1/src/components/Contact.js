import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <nav>
        <ul>
          <li><Link to="us">Contact Us</Link></li>
          <li><Link to="pl">Contact PL</Link></li>
          <li><Link to="de">Contact DE</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Contact;
