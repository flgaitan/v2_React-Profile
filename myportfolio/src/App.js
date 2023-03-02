import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Resume from './pages/Resume'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutme" element={<Aboutme/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
    </div>
  );
}

export default App;
