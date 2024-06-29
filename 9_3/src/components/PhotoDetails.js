import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { photos } from '../data/photos';
import StarRating from './StarRating';

const PhotoDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const photoIndex = photos.findIndex(p => p.id === parseInt(id));
  const photo = photos[photoIndex];

  const handleRatingChange = (newRating) => {
    photo.rating = (photo.rating * photo.ratingCount + newRating) / (photo.ratingCount + 1);
    photo.ratingCount += 1;
  };

  return (
    <div>
      <h1>Photo Details</h1>
      {photo ? (
        <div>
          <img src={photo.link} alt={photo.author} width="400" />
          <p>Author: {photo.author}</p>
          <p>Date Added: {photo.date}</p>
          <p>Details: {photo.details}</p>
          <StarRating rating={photo.rating} onRatingChange={handleRatingChange} />
          <p>Average Rating: {photo.rating.toFixed(1)}</p>
          <Link to={`/photos/${photo.id}/details`}>More Details</Link>
          <div>
            {photoIndex > 0 && <button onClick={() => navigate(`/photos/${photos[photoIndex - 1].id}`)}>{'<'}</button>}
            {photoIndex < photos.length - 1 && <button onClick={() => navigate(`/photos/${photos[photoIndex + 1].id}`)}>{'>'}</button>}
          </div>
        </div>
      ) : (
        <p>Photo not found</p>
      )}
    </div>
  );
};

export default PhotoDetails;
