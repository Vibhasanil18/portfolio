import React from 'react';
import './Hero.css';
import profile from '../../assets/profile.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img src={profile} alt='' className='profile-pic' />
      <h1><span>I'm Vibha Sanil,</span> Full Stack Developer based in India.</h1>
      <p>I am a dedicated Full Stack Developer with hands-on experience in developing and maintaining web applications. Skilled in both front-end development using React and back-end development with Django REST Framework, I focus on delivering scalable and user-friendly solutions. My passion for technology drives me to continuously learn and adapt to new tools and techniques.</p>
      <div className='hero-action'>
        {/* Updated Connect With Me button to AnchorLink */}
        <AnchorLink className='hero-connect' href="#contact" offset={50}>
          Connect With Me
        </AnchorLink>
        
  
         {/* My Resume button - change it to a download link */}
         <a
          className='hero-resume'
          href="/certificates/Vibha_Sanil.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Vibha_Sanil.pdf"
        >
          My Resume
        </a>
      </div>
      </div>
    
  );
};

export default Hero;
