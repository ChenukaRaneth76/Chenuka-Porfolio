import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import ProjectDetails from "./components/ProjectDetails";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen" style={{ backgroundColor: '#1e1b4b' }}>
        <Navbar />
        <Routes>
          {/* Main Portfolio Page */}
          <Route
            path="/"
            element={
              <>
                <section id="home"><HeroSection /></section>
                <section id="projects"><Projects /></section>
                <section id="skills"><Skills /></section>
                <section id="experience"><Experience /></section>
                <section id="education"><Education /></section>
                <section id="contact"><Contact /></section>
              </>
            }
          />

          {/* Project Details Page */}
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
