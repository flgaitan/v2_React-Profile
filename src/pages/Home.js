import React from 'react'
import About from '../components/About';
import MyProjects from '../components/MyProjects';
import ContactForm from '../components/ContactForm';
import Resume from './Resume';


function Home() {
  return (
    <> 
    <About/>
    <MyProjects/>
    <ContactForm/>
    <Resume/>
    </>

  )
};


export default Home;