import movies from './movies.json';

class MovieService{

    constructor(){

    }

    findAllMovies = () => {
        return Promise.resolve(movies)
    }
}

export default MovieService