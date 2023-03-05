import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Aboutme from "./pages/Aboutme"
import Projects from "./pages/Projects"
import Contact from './pages/Contact';
import Resume from './pages/Resume'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState("")

  function renderPage() {
    switch (currentPage) {
      case "about":
        return <Aboutme />
      case "projects":
        return <Projects />
      case "contacts":
        return <Contact />
      case "resume":
        return <Resume />
      default:
        return <Home />

    }

  }
  return (
    <div className="App">
      <Header navigatePage = {setCurrentPage}/>
      {renderPage()}
      <Footer />

    </div>
  );
}

export default App;
