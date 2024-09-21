import { useState, useEffect } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
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
        <li><ScrollLink ink to='hero' smooth={true} offset={0} duration={500} onClick={closeMenu}>HOME</ScrollLink></li>
        <li><ScrollLink to='programs' smooth={true} offset={-260} duration={500} onClick={closeMenu}>PROGRAM</ScrollLink></li>
        <li><ScrollLink to='about' smooth={true} offset={-150} duration={500} onClick={closeMenu}>ABOUT US</ScrollLink></li>
        <li><ScrollLink to='campus' smooth={true} offset={-260} duration={500} onClick={closeMenu}>CAMPUS</ScrollLink></li>
        <li><ScrollLink to='feedback' smooth={true} offset={-150} duration={500} onClick={closeMenu}>FEED BACK</ScrollLink></li>
        <li><ScrollLink to='contact' smooth={true} offset={-150} duration={500} onClick={closeMenu}>CONTACT US</ScrollLink></li>
        <li>
          <Link to='/login' className='btn' onClick={closeMenu}>Log in</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu_icon' onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;