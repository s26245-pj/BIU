import React from 'react';
import { Link } from 'react-router-dom';
import { photos } from '../data/photos';

const PhotoList = () => {
  return (
    <div>
      <h1>Photo Gallery</h1>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <Link to={`/photos/${photo.id}`}>
              <img src={photo.link} alt={photo.author} width="100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;
