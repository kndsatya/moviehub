import React from 'react';
import './MovieCard.css';
import defaultImage from '../resources/default.jpg'
import {Link} from 'react-router-dom'


const MovieCard =({movie})=>

    <div className="col-sm-12 col-md-4 col-lg-3 mb-2">
            <Link className="moviehub-link" to={`/movie/${movie.id}`}>
        <div className="card h-100" styles="width:18rem;">

            {

                (movie.poster_path)?<img className="card-img-top"
                 src = {"https://image.tmdb.org/t/p/w500"+movie.poster_path}
                 alt={movie.title}/>:<img className="card-img-top"
                                          src = {defaultImage}
                                          alt={movie.title}/>}
            <div className="card-body">
                <h5 className="card-title moviehub-card-text">
                    {movie.title}</h5>
                <p className="card-text movie-hub-block-with-text">{movie.overview}</p>
            </div>
        </div>
        </Link>
    </div>


export default MovieCard