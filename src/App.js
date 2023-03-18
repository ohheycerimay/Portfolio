import './App.css';
import './index.css'
import React, {useState, useEffect} from 'react';
import { Route, Routes} from 'react-router-dom';
import ProjectContainer from './components/ProjectContainer'
import LandingPage from './components/LandingPage'
import Home from './components/Home';
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'
import About from './components/About'
import Contact from './components/Contact'

const API = "http://localhost:3000/projects"

function App() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setProjects(data))
  }, [])

  return (
    <div className="App">
    <NavBar />
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<ProjectContainer projects={projects} />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
