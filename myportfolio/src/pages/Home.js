import React from 'react'
import Header from '../components/Header';
import About from '../components/About';
import MyProfile from '../components/MyProfile';
import ContactForm from '../components/ContactForm';
import Resume from './Resume';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
    <Header/>

    <About/>
    <MyProfile/>
    <ContactForm/>
    <Resume/>

    <Footer/>

    </>

  )
};


export default Home;