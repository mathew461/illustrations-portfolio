import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div>
            <Header />
            <form 
                name="contact" 
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input name="name" placeholder="Your Name" type="text"/>
                <button>Send</button>
            </form>
            <Footer />
        </div>
        
    )
}

export default Contact;