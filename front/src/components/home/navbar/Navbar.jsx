import React from 'react';
import iconCerrar from '../../../assets/cerrar.png';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate= useNavigate()
  const manda=()=>{
    navigate(`/`)
  }
  return (
    <nav className='navbar'>
      <span className='logo'>TeleMed</span>
      <img src={iconCerrar} alt='icono' onClick={manda} className='icon-navbar' />
    </nav>
  );
};

export default Navbar;
