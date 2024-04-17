import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './DropDown';

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleDropdown = () => {
    setIsOpen(!isOpen);
 };

 const closeDropdown = () => {
    setIsOpen(false);
 };

 return (
    <nav>
      <div className="navbar-logo">
        <i className="fas fa-home"></i>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/learn">Learning</Link>
          </li>
          <Dropdown />
        </ul>
      </div>
    </nav>
 );
};

export default Navbar;
