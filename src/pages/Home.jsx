import React from 'react';
import Hero from '../components/Hero';
import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactInfo from '../components/ContactInfo';

const Home = () => {
  return (
    <div>
      <Hero />
      <Presentation />
      <Skills />
      <Projects />
      <ContactInfo />
    </div>
  );
};

export default Home;