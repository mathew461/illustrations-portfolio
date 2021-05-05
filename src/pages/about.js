import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DisplayPic from '../links-and-images/display_pic.jpg';
import './about.css'

const About = () => {
    return (
        <div>
            <Header />
            <img 
                src={DisplayPic}  
                alt="This is me" 
                class="display_pic"
            />
            
            <div class="centre">
                <h2 class="lower_h2">Bio</h2>
                <p class = "lower_p">Mathew Wrigley is a freelance illustrator specializing in character design, games design [think of more to specialize in] At an early age he was drawing and creating, prompting an interest in the fine arts in high school and college and went on to study Computer Games Design at University.</p>
                <p class = "lower_p">Most of Mathew's work begins by sketching ideas in an art book, and then they are enhanced into illustrations via using Adobe software such as Illustrator and Photoshop.</p>
                <p class = "lower_p">-Please feel free to contact Mathew for commissions and inquiries-</p>
                <h2 class="lower_h2">Awards</h2>
                <p class = "lower_p">2013 – Games Republic Contest, for University Team Project. –Judges included popular games companies such as: The Four Door Lemon, Just Add Water and The Blast Furnace.</p>
                <p class = "lower_p">Mathew's Team won three awards, such as </p>
                <li class = "lower_p">First place for Game Art</li>
                <li class = "lower_p">Third Place for Game Technology</li>
                <li class = "lower_p">Third Place for Teamwork</li>
            </div>
            
            <div class="bottom"></div>
            <Footer />
        </div>
    );
}

export default About;