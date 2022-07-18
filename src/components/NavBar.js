import React from 'react';
import { FaCoins } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <div className='navbar'>
        <FaCoins className='icon'/>
        <h1>Coin <span className='purple'>Search </span></h1>
      </div>
    </div>
  )
}

export default NavBar