import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';

function Nav() {
  function activeStyle({ isActive }) {
    return {
      textDecoration: isActive ? 'underline' : undefined,
      fontSize: isActive ? '24px' : undefined,
    };
  }
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <NavLink to='/' style={activeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
