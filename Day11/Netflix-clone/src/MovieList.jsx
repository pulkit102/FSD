import React from 'react';
import movies from './movies'; // Adjust the path as necessary
import './MovieList.css';

function MovieList() {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={movie.image} alt={movie.title} className="movie-image" />
          <h2>{movie.title}</h2>
          <p>Language: {movie.language}</p>
          <p>Cost: ₹{movie.cost}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
