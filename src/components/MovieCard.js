import React from 'react';
import './MovieCard.css';

const MovieCard =({movie,onMovieClick})=>

    <div  className="col-sm-12 col-md-6 col-lg-4 mb-1">
        <div className="card h-100" styles="width:18rem;">
            <img className="card-img-top"
                 src = {movie.posterUrl}
                 alt={movie.title}/>
            <div className="card-body">
                <h5 className="card-title moviehub-card-text">
                    {movie.title}</h5>
                <p className="card-text">{movie.plot}</p>
            </div>
        </div>
    </div>


export default MovieCard