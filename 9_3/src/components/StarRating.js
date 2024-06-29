import React from 'react';
import ReactStars from 'react-stars';

const StarRating = ({ rating, onRatingChange }) => {
  return (
    <ReactStars
      count={5}
      value={rating}
      onChange={onRatingChange}
      size={24}
      color2={'#ffd700'}
    />
  );
};

export default StarRating;
