import movies from './movies.json';

class MovieService{

    constructor(){

    }

    findAllMovies = () => {
        return Promise.resolve(movies)
    }

    search = (query) => {

        const searchURL = "https://api.themoviedb.org/3/search/movie?"
                        + "api_key=9982a4cad6a8ec21c37bb6b5eeda41e7&language=en-US&page=1&include_adult=false&query="+
                          query
        return fetch(searchURL).then(response=>{return response.json()})
    }
}

export default MovieService