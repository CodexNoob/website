import { useState, useEffect } from 'react';
import './student.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menuiconwhite.WEBP'
import {Link as ScrollLink} from 'react-scroll';
import { Link } from 'react-router-dom'


const Navbar = () => {

  const [sticky, setSticky] = useState(false);
   const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
       const handleScroll = () => {
      setSticky(window.scrollY > 500);
      };
      window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    },[]);

    const toggleMenu = ()=>{
      setMobileMenu(prevState => !prevState);
    };
    const closeMenu = () => {
    setMobileMenu(false);
    };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li>
          <Link to='/login' className='btn' onClick={closeMenu}>SIGNOUT</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu_icon' onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
