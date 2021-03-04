import React from 'react'
import ImageCard from './ImageCard';
import './Gallery.css'

import AnimalKingdom1 from '../links-and-images/Abra-Twit-Twoo.png'
import AnimalKingdom2 from '../links-and-images/Admiral-Foxington.png'
import AnimalKingdom3 from '../links-and-images/Doctor-Crow.png'
import AnimalKingdom4 from '../links-and-images/Jack-The-Rabbit.png'
import AnimalKingdom5 from '../links-and-images/King-Porker.png'
import AnimalKingdom6 from '../links-and-images/The-Gallant-Bear.png'

import ChocoboPrototype from '../links-and-images/Chocobo_Prototype.png'
import KillTheBear from '../links-and-images/Kill-the-Bear.png'
import GasmaskCat from '../links-and-images/Gasmask-Cat.png'
import MonkeyAstronaut from '../links-and-images/Monkey-Astronaut.png'
import RebelliousGnome from '../links-and-images/Rebellious-Gnome.png'
import PokemonConcept from '../links-and-images/Pokemon-Concept.png'


const Gallery = () => {
    return (
        <div>
            <div className = "grid">
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


export default Gallery;