import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="add" element={<Calculator operation="add" />} />
      <Route path="sub" element={<Calculator operation="sub" />} />
      <Route path="mul" element={<Calculator operation="mul" />} />
      <Route path="div" element={<Calculator operation="div" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
