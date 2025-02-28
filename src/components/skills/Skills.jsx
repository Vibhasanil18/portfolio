import React from 'react';
import './Skills.css';

const certificates = [
    { name: "Full Stack Development Certification", file: "/certificates/fullstack-cert.pdf" },
    { name: "Python for Web Development Certificate", file: "/certificates/IBM.pdf" },
    { name: "Django REST Framework Certification", file: "/certificates/Django.pdf" },
    { name: "React.js Certification", file: "/certificates/React.pdf" },
    { name: "Advanced Web Design Certification", file: "/certificates/Js.pdf" },
    { name: "SQL Certification", file: "/certificates/Sql.pdf" },
];

const Skills = () => {
    return (
        <div  id="techstack" className="skills-page">
            <div className="skills-container">
                <h1>Skills & Certifications</h1>

                {/* Skills Section */}
                <div  className="skills-section">
                    <h2>Technical Skills</h2>
                    <div className="skills-list">
                        {[
                            { skill: "HTML & CSS", level: 70 },
                            { skill: "JavaScript", level: 50 },
                            { skill: "Python & Django", level: 55 },
                            { skill: "React.js", level: 65 },
                            { skill: "MySQL", level: 70 },
                            { skill: "Django Rest Framework", level: 45 },
                        ].map((item, index) => (
                            <div key={index} className="skill">
                                <p>{item.skill}</p>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `${item.level}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certificates Section */}
                <div className="certificates-section">
                    <h2>Certifications</h2>
                    <ul className="certificate-list">
                        {certificates.map((cert, index) => (
                            <li key={index}>
                                <span>{cert.name}</span>
                                <a href={cert.file} download className="download-btn">Download</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;
