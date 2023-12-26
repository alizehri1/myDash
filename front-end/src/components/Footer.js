import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <ul>
              <li>
                <Link to='/about'>About Us</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className='copyright'>
        Copyright &copy; {new Date().getFullYear()} E-commerce Dashboard
      </p>
    </footer>
  );
}

export default Footer;
