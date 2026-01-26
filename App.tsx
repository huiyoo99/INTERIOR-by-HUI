import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
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

function App() {
  return (
    <Router basename="/INTERIOR-by-HUI/">
      <LanguageProvider>
        <div className="font-sans selection:bg-stone-300 selection:text-stone-900">
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <main>
                  <Home />
                </main>
                <AIChat />
              </>
            } />
            <Route path="/project/:id" element={
              <>
                <ProjectDetailPage />
                <AIChat />
              </>
            } />
          </Routes>
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;