import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PhotoList from './components/PhotoList';
import PhotoDetails from './components/PhotoDetails';
import NotFound from './components/NotFound';
import { photos } from './data/photos';

const App = () => {
  const navigate = useNavigate();

  const getRandomPhotoId = () => {
    const randomIndex = Math.floor(Math.random() * photos.length);
    return photos[randomIndex].id;
  };

  React.useEffect(() => {
    navigate(`/photos/${getRandomPhotoId()}`);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<PhotoList />} />
      <Route path="/photos/:id" element={<PhotoDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
