import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div>
            <Header />
            <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <label>Your Name: <input type="text" name="name" placeholder="Your Name" /></label>   
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
            <Footer />
        </div>
    )
}


            
export default Contact;