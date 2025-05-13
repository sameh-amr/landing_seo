import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import Demos from './components/Demos';
import MobileSection from './components/MobileSection';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Demos />
      <MobileSection />
      <Contact />
    </Layout>
  );
}

export default App;