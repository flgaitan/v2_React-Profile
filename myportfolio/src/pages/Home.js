import React from 'react'
import Header from '../components/Header';
import About from '../components/About';
import MyProjects from '../components/MyProjects';
import ContactForm from '../components/ContactForm';
import Resume from './Resume';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
    <Header/>
    <About/>
    <MyProjects/>
    <ContactForm/>
    <Resume/>
    <Footer/>

    </>

  )
};


export default Home;