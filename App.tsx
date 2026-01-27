import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import ProjectDetailPage from './components/ProjectDetailPage';
import { LanguageProvider } from './context/LanguageContext';

const Home = () => (
  <>
    <Hero />
    <About />
    <Portfolio />
    <Contact />
  </>
);

import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <Router basename="/INTERIOR-by-HUI/">
      <ThemeProvider>
        <LanguageProvider>
          <div className="font-sans selection:bg-stone-300 selection:text-stone-900 dark:selection:bg-stone-700 dark:selection:text-stone-100 transition-colors duration-300">
            <Routes>
              <Route path="/" element={
                <>
                  <Navbar />
                  <main>
                    <Home />
                  </main>
                </>
              } />
              <Route path="/project/:id" element={
                <>
                  <ProjectDetailPage />
                </>
              } />
            </Routes>
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;