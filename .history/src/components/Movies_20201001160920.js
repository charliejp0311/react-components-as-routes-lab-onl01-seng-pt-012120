import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        <Movies movies={movies}/>
    </div>
  );
};

export default Movies;
