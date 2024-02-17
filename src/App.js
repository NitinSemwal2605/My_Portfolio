import React from 'react';
import "./App.css";
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/home';
import Qualification from './components/qualification/Qualification';
import Skills from './components/skills/Skills';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Darkmode from 'darkmode-js';
import { Analytics } from '@vercel/analytics/react';

new Darkmode().showWidget();
const options = {
  label: '🌓', // default: ''
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

const App = () => {
  
  return (
    <>
    <Header/>
    
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      <Analytics />
    </main>
    </>
  )
}

export default App
