import React from 'react'
import Navbar from '../components/Navbar';
import About from '../components/About';
import MyProfile from '../components/MyProfile';

function Home() {
  return (
    <>
    <header>
    <Navbar/>
    </header>
    <About/>
    <MyProfile/>

    </>

  )
}


export default Home;