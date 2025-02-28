import React from 'react';
import './MyWork.css';


const projects = [
    {
        title: "Human Resource Management System (HRM)",
        technologies: ["React", "Django", "XAMPP MySQL", "Django REST Framework", "API.js", "Serialization", "CORS Headers"],
        description: "A dynamic HRM system with real-time employee data management, leave requests, authentication, and seamless frontend-backend communication.",
        githubLink: "https://github.com/Vibhasanil18/HRM"
    },
    {
        title: "DineDiary – Meal Planning and Grocery Management Application",
        technologies: ["Django", "Python", "Razorpay", "MySQL", "Bootstrap", "HTML", "CSS", "XAMPP"],
        description: "A meal planning app with nutrition tracking, grocery list generation, and Razorpay integration for premium subscriptions. Includes email automation on login.",
        githubLink: "[LINK]"
    },
    {
        title: "House Hub Project",
        technologies: ["HTML", "CSS", "Bootstrap"],
        description: "A responsive web app centralizing house-related tasks, featuring reusable components and an intuitive interface optimized for performance.",
        githubLink: "https://github.com/Vibhasanil18/Housing",
        liveLink: "https://vibhasanil18.github.io/Housing/"
    },
    {
        title: "Office Management System",
        technologies: ["Django", "Python", "Bootstrap", "HTML", "CSS", "SQLite"],
        description: "A comprehensive system for employee and department management with CRUD functionality, using SQLite for data storage and a responsive Bootstrap interface.",
        githubLink: "https://github.com/Vibhasanil18/Office-Management-System"
    },
    {
        title: "Restaurant Landing Page",
        technologies: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"],
        description: "A responsive landing page for a restaurant using React, featuring dynamic and reusable components, optimized for cross-device compatibility and performance.",
        githubLink: "https://github.com/Vibhasanil18/React-resturant-landing-page",
        liveLink: "https://vibhasanil18.github.io/React-resturant-landing-page/"
    },
    {
        title: "E-commerce Website",
        technologies: ["Django", "Python", "Razorpay", "Bootstrap", "HTML", "CSS", "SQLite", "XAMPP"],
        description: "Developed a fully functional eCommerce platform with Razorpay for payments, email notifications for order updates, image upload for product listings, and optimized 3-table join for data management.",
        githubLink: "[LINK]"
    }
];

const MyWork = () => {
    return (
        <div  id="portfolio" className='mywork'>
            <div className='mywork-title'>
                <h1>My Latest Work</h1>
               
            </div>

            <div className='mywork-container'>
                {projects.map((project, index) => (
                    <div className='project-card' key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className='project-technologies'>
                            {project.technologies.map((tech, idx) => (
                                <span key={idx}>{tech}</span>
                            ))}
                        </div>
                        <div className='project-links'>
                            {project.liveLink && (
                                <a href={project.liveLink} target='_blank' rel='noopener noreferrer' className='project-btn'>
                                    Live Demo
                                </a>
                            )}
                            <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className='project-btn'>
                                View on GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyWork;
