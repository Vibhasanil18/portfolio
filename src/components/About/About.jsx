import React from 'react';
import './About.css';
import profile from '../../assets/profile.jpg';

const About = () => {
    return (
        <div id="about" className="about-me">
            <div className="about-me-container">
                <div className="about-me-image">
                    <img src={profile} alt="Vibha Sanil" />
                </div>
                <div className="about-me-content">
                    <h1>About Me</h1>
                    <p>
                        Hi, I'm <span className="highlight">Vibha Sanil</span>, a passionate <span className="highlight">Full Stack Developer</span> who transitioned into the tech world after 4.6 years of valuable experience in the non-IT sector.
                    </p>
                    <p>
                        My journey into IT has been driven by my curiosity to understand how things work and my love for solving complex problems. I have hands-on experience working with <span className="highlight">React, Python, Django, REST APIs, and MySQL</span>. From building interactive **frontend interfaces** to developing robust **backend systems**, I love bringing ideas to life.
                    </p>
                    <p>
                        I thrive on creating user-friendly web applications with **clean design** and **efficient functionality**, ensuring the perfect balance between usability and performance.
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

                    <p className="contact-info">
                        📧 <a href="mailto:vibhasanil1996@gmail.com">vibhasanil1996@gmail.com</a> &nbsp;|&nbsp;
                        📞 <a href="tel:+919632217127">+91 9632217127</a> &nbsp;|&nbsp;
                        🌐 <a href="https://github.com/Vibhasanil18" target="_blank" rel="noopener noreferrer">GitHub</a> &nbsp;|&nbsp;
                        🔗 <a href="https://www.linkedin.com/in/vibha-sanil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;



// import React from 'react';
// import './About.css';
// // import Theme from '../../assets/Theme.png';
// import profile from '../../assets/profile.jpg';

// // Add your certificate file paths
// const certificates = [
//     { name: "Full Stack Development Certification", file: "/certificates/fullstack-cert.pdf" },
//     { name: "Python for Web Development Certificate", file: "/certificates/IBM.pdf" },
//     { name: "Django REST Framework Certification", file: "/certificates/Django.pdf" },
//     { name: "React.Js Certification", file: "/certificates/React.pdf" },
//     { name: "Advanced Web Design Certification", file: "/certificates/Js.pdf" },
//     { name: "Advanced Web Design Certification", file: "/certificates/Sql.pdf" },
// ];

// const About = () => {
//     return (
//         <div className='about'>
//             <div className='about-title'>
//                 <h1>About Me</h1>
//                 {/* <img src={Theme} alt='' /> */}
//             </div>
//             <div className='about-sections'>
//                 <div className='about-left'>
//                     <img src={profile} alt='' />
//                 </div>

//                 <div className='about-right'>
//                     <div className='about-para'>
//                         <p>I am a dedicated Full Stack Developer with hands-on experience in designing, developing, and maintaining scalable web applications. My expertise spans front-end development using React and back-end development with Django REST Framework, enabling me to build end-to-end solutions that are both efficient and user-friendly.</p>
//                         <p>With a strong problem-solving mindset and attention to detail, I am passionate about writing clean, maintainable code and collaborating with cross-functional teams to deliver high-quality software solutions. I continuously seek opportunities to expand my technical knowledge and keep up with industry best practices. I am actively looking for opportunities where I can contribute my skills, grow professionally, and be part of impactful projects.</p>
//                     </div>

//                     <div className='about-skills'>
//                         <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
//                         <div className='about-skill'><p>Javascript</p><hr style={{width:"60%"}} /></div>
//                         <div className='about-skill'><p>Python & Django</p><hr style={{width:"70%"}} /></div>
//                         <div className='about-skill'><p>React.js</p><hr style={{width:"60%"}} /></div>
//                         <div className='about-skill'><p>MySQL</p><hr style={{width:"50%"}} /></div>
//                         <div className='about-skill'><p>Django Rest Framework</p><hr style={{width:"50%"}} /></div>
//                     </div>

//                     {/* Certificates Section */}
//                     <div className='about-certificates'>
//                         <h2>Certificates</h2>
//                         <ul>
//                             {certificates.map((cert, index) => (
//                                 <li key={index}>
//                                     {cert.name} 
//                                     <a href={cert.file} download className='download-btn'>Download</a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;
