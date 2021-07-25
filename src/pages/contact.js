import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './contact.css';
import './Layout.css';

const Contact = () => {
    return (
        <div>
            <Header />
            <form 
                className="form"
                name="contact" 
                method="POST" 
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <input type="text" class="form-control" name="name" placeholder="Your Name" required />   
                </p>
                <p>
                    <input type="email" class="form-control" name="email" placeholder="Your Email" required />
                </p>
                <p>
                    <textarea className="form-control__1" name="message" placeholder="Message" required ></textarea>
                </p>
                <p>
                    <button type="submit" className="form-control form-submit">Send</button>
                </p>
            </form>
            <Footer />
        </div>
    )
}


            
export default Contact;