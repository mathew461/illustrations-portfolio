import React from "react"
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import './index.css';

const indexPage = () => {
  return (
    <div>
        <Header />
        <Gallery />
    
        <Footer />
    </div>
  )
}

export default indexPage;