import React from 'react'
import Header from '../components/Header';
import About from '../components/About';
import ContactForm from '../components/ContactForm';
import Resume from './Resume';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
    <Header/>

    <About/>
    <ContactForm/>
    <Resume/>

    <Footer/>

    </>

  )
};


export default Home;