import React from 'react';
import './About.css';
import profile from '../../assets/profile.jpg';

const About = () => {
    return (
        <div id="about" className="about-me">
            <div className="about-me-container">
                <div className="about-me-image">
                    <img src={profile} alt="Vibha Sanil - Profile" />
                </div>
                <div className="about-me-content">
                    <h1>About Me</h1>
                    <p>
                        Hi, I'm <span className="highlight">Vibha Sanil</span>, a passionate <span className="highlight">Full Stack Developer</span> 
                        who transitioned into the tech world after 4.6 years of valuable experience in the non-IT sector.
                    </p>
                    <p>
                        My journey into IT has been driven by my curiosity to understand how things work and my love for solving complex problems. 
                        I have hands-on experience working with <span className="highlight">React, Python, Django, REST APIs, and MySQL</span>. 
                        From building interactive <strong>frontend interfaces</strong> to developing robust <strong>backend systems</strong>, I love bringing ideas to life.
                    </p>
                    <p>
                        I thrive on creating user-friendly web applications with <strong>clean design</strong> and <strong>efficient functionality</strong>, 
                        ensuring the perfect balance between usability and performance.
                    </p>

                    <h2>Tech Stack</h2>
                    <div className="tech-stack">
                        <div className="tech-category">
                            <h3>Frontend</h3>
                            <ul>
                                <li>React.js</li>
                                <li>JavaScript (ES6+)</li>
                                <li>HTML5 & CSS3</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                        <div className="tech-category">
                            <h3>Backend</h3>
                            <ul>
                                <li>Python</li>
                                <li>Django & Django REST Framework</li>
                                <li>MySQL</li>
                                <li>API Development & Integration</li>
                            </ul>
                        </div>
                    </div>

                    

                </div>
            </div>
        </div>
    );
};

export default About;
