import React from 'react'
import './Navbar.scss'
import { AiOutlineMenu } from 'react-icons/ai';


function Navbar() {
  const toggleMenu = ()=>{
    const navbar = document.querySelector('.nav');
    navbar?.classList.toggle('active')
  }
  return (
    <header className='header'>
        <h1 className='logo'>
            <a href="#" target="_blank">Al seny DIALLO</a>
        </h1>
        <button onClick={toggleMenu} className='menu-toggler'>
          <AiOutlineMenu />
        </button>
        <nav className='nav'>
            <ul className='nav__links'>
              <li className='nav__links-item'>Home</li>
              <li className='nav__links-item'>About</li>
              <li className='nav__links-item'>Skills</li>
              <li className='nav__links-item'>Works</li>
              <li className='nav__links-item nav__links--btn'>Contact</li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar