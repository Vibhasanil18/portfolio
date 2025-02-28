import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='Logo'>Vibha</h1>

      <ul className='nav-menu'>
        <li><AnchorLink className="anchor-link" href="#home">Home</AnchorLink></li>
        <li><AnchorLink className="anchor-link" href="#about" offset={50}>About Me</AnchorLink></li>
        <li><AnchorLink className="anchor-link" href="#techstack" offset={50}>Tech Stack</AnchorLink></li>
        <li><AnchorLink className="anchor-link" href="#portfolio" offset={50}>Portfolio</AnchorLink></li>
        <li><AnchorLink className="anchor-link" href="#contact" offset={50}>Get in Touch</AnchorLink></li>
      </ul>

      <div >
      <AnchorLink className="nav-connect" href="#contact" offset={50}>
    Connect With Me
</AnchorLink>

</div>

    </div>
  );
};

export default Navbar;
