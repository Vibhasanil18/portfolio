import React, { useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);
        formData.append("access_key", "852b152e-3e74-4609-bc1d-a90c977d36bc");  // Your Web3Forms access key

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                setStatus('✅ Message sent successfully!');
                formRef.current.reset();
            } else {
                setStatus(`❌ Error: ${result.message}`);
            }
        } catch (error) {
            setStatus('⚠️ Something went wrong. Please try again later.');
            console.error('Form submission error:', error);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                {/* Left Side - Contact Information */}
                <div className="contact-info">
                    <h2>Let's Connect</h2>
                    <p>Email: <a href="mailto:vibhasanil1996@gmail.com">vibhasanil1996@gmail.com</a></p>
                    <p>Phone: <a href="tel:+919632217127">+91 9632217127</a></p>

                    <div className="contact-links">
                        <a href="https://github.com/Vibhasanil18" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/vibha-sanil/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="mailto:vibhasanil1996@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="contact-form">
                    <h2>Contact Me</h2>
                    {status && <p className="status-message">{status}</p>}

                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="hidden" name="subject" value="New Contact Form Submission" />
                        <input type="hidden" name="from_website" value="Vibha Sanil Portfolio" />

                        <div className="form-group">
                            <input type="text" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
