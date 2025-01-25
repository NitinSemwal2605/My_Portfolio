import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import "./App.css";
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/home';
import Projects from './components/projects/Projects';
import Qualification from './components/qualification/Qualification';
import Skills from './components/skills/Skills';
import Testimonials from './components/Testimonials/Testimonials';

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
        <Analytics />
      </main>
    </>
  );
};

export default App;
