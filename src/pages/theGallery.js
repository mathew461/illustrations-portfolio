import React from "react"
import './Layout.css';
import DesktopHeader from '../components/DesktopHeader';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';

const TheGallery = () => {
  return (
    <div>
        <DesktopHeader />
        <Gallery />
    
        <Footer />
    </div>
  )
}

export default TheGallery;