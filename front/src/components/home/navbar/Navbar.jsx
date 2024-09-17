import React from 'react';
import iconCerrar from '../../../assets/cerrar.png';
import './navbar.css';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <span className='logo'>TeleMed</span>
      <img src={iconCerrar} alt='icono' className='icon-navbar' />
    </nav>
  );
};

export default Navbar;
