import React from "react"
import './Layout.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';

const TheGallery = () => {
  return (
    <div>
        <Header />
        <Gallery />
    
        <Footer />
    </div>
  )
}

export default TheGallery;