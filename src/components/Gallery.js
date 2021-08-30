import React from 'react'
import ImageCard from './ImageCard';
import './Gallery.css'

import AnimalKingdom1 from '../links-and-images/Abra-Twit-Twoo.png'
import AnimalKingdom2 from '../links-and-images/Admiral-Foxington.png'
import AnimalKingdom3 from '../links-and-images/Doctor-Crow.png'
import AnimalKingdom4 from '../links-and-images/Jack-The-Rabbit.png'
import AnimalKingdom5 from '../links-and-images/King-Porker.png'
import AnimalKingdom6 from '../links-and-images/The-Gallant-Bear.png'
import OfficeTable from '../links-and-images/Programmers-Blog-WB.png'
import ChocoboPrototype from '../links-and-images/Chocobo_Prototype.png'
import KillTheBear from '../links-and-images/Kill-the-Bear.png'
import GasmaskCat from '../links-and-images/Gasmask-Cat.png'
import MonkeyAstronaut from '../links-and-images/Monkey-Astronaut.png'
import RebelliousGnome from '../links-and-images/Rebellious-Gnome.png'
import PokemonConcept from '../links-and-images/Pokemon-Concept.png'


class Gallery extends React.Component {

    componentDidMount() {
                // This is the Lightbox code from the HTML version of this site. It works perfect there, but here seems to be causing problems.                              
                const lightbox = document.createElement('div')
                lightbox.id = 'lightbox'
                document.body.appendChild(lightbox)
        
                const images = document.querySelectorAll('img')
                images.forEach(image => {
                    image.addEventListener('click', e => {
                        lightbox.classList.add('active')
                        const img = document.createElement('img')
                        img.src = image.src
                        while (lightbox.firstChild) {
                            lightbox.removeChild(lightbox.firstChild)
                        }
                        lightbox.appendChild(img)
                    })
                });
        
                lightbox.addEventListener('click', e => {
                    if (e.target !== e.currentTarget) return
                    lightbox.classList.remove('active')
                })
                //End of Lightbox Code
    }

    render() {
        return (
            <div>
                <div className = "grid">
                    <ImageCard src = {OfficeTable}/>
                    <ImageCard src = {ChocoboPrototype}/>
                    <ImageCard src = {AnimalKingdom1}/> 
                    <ImageCard src = {MonkeyAstronaut}/>
                    <ImageCard src = {AnimalKingdom2}/>  
                    <ImageCard src = {AnimalKingdom3}/> 
                    <ImageCard src = {RebelliousGnome}/> 
                    <ImageCard src = {AnimalKingdom4}/> 
                    <ImageCard src = {AnimalKingdom5}/> 
                    <ImageCard src = {PokemonConcept}/> 
                    <ImageCard src = {AnimalKingdom6}/>
                    <ImageCard src = {KillTheBear}/> 
                    <ImageCard src = {GasmaskCat}/>  
                </div>
            </div>
        );
    }
}

export default Gallery;