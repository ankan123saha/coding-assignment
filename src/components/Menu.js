import React from 'react';
import {NavLink} from 'react-router-dom'

const Menu = () => {

  return (
    <nav>
      <ul className='menu'>
          <li><NavLink className="nav-item" to="/">Payloads</NavLink></li>
          <li><NavLink className="nav-item" to="/history">History</NavLink></li>
        </ul>
    </nav>
  );
};

export default Menu;
