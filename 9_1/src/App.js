import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import ContactUs from './components/ContactUs';
import ContactPL from './components/ContactPL';
import ContactDE from './components/ContactDE';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} >
        <Route path="us" element={<ContactUs />} />
        <Route path="pl" element={<ContactPL />} />
        <Route path="de" element={<ContactDE />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
