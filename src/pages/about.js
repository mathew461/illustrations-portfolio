import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DisplayPic from '../links-and-images/display_pic.jpg';
import './about.css'

const About = () => {
    return (
        <div>
            <Header />
           <br/>
            <img 
                src = {DisplayPic}  
                alt = "This is me" 
                className = "display_pic"
            />
            
            <div class="centre">
                <h2 className = "lower_h2">Bio</h2>
                <p className = "lower_p"><b>Hi There!</b> my name is Mathew Wrigley, I am a freelance illustrator based in the UK, with some knowledge of web development, 3d modelling for Games, concept design, and many other odd and wonderful skills one makes during life in the 21st century.</p>
                <p className = "center_text">◆    ◆    ◆</p>
                <p className = "lower_p"> I studied Computer Games Design at Huddersfield University between 2009-2013, where my colourful work was recognised by prestigious games companies such as The Four Door Lemon, Just Add Water and The Blast Furnace. At the Games Republic Contest in 2013. Myself and my team all won awards for Game Art, Game Technology, and Best Team. </p>
                <p className = "center_text">◆    ◆    ◆</p>        
                <p className = "lower_p">When I’m not spending my time drawing pretty pictures, I am usually off procrastinating, playing video games or pretending I’m having a conversation with my miniature Jack Russell Alfie.</p>
                <p className = "center_text">◆    ◆    ◆</p>
                <p className = "lower_p">Since my time at university I travelled a bit, lived in Toronto Canada, where I spent most of my time learning the complexities of Coffee. After that I travelled Australia, met a kangaroo but now I have returned to my homeland, England and I very much plan to plant my butt firmly down and concentrate on my career.</p>
                <p className = "center_text">◆    ◆    ◆</p>
                <p className = "lower_p">This space is a place for me to showcase my designs, everything you see here I created, even the site itself, I can code too. </p>
                
            </div>
            
            <div class="bottom"></div>
            <Footer />
        </div>
    );
}

export default About;