class MovieService {

    constructor() {
       this.URL = "http://localhost:8081"
    }

    findAllMovies = () => {
        return fetch(this.URL+"/api/movies",{
            credentials:'include'
        })
            .then(response=>{
                return response.json()});
    }

    search = (query) => {

        const searchURL = "https://api.themoviedb.org/3/search/movie?"
                          + "api_key=9982a4cad6a8ec21c37bb6b5eeda41e7&language=en-US&page=1&include_adult=false&query="
                          +
                          query
        return fetch(searchURL).then(response => {
            return response.json()
        })
    }

    getTrailer = (movieId) => {

        const videoURL = "https://api.themoviedb.org/3/movie/" + movieId
                         + "/videos?api_key=9982a4cad6a8ec21c37bb6b5eeda41e7"
                         + "&language=en-US"

        return fetch(videoURL).then(response => {
            return response.json()
        })
    }

    getDetailsFromTMDB = (movieId) => {

        const detailsURL = "https://api.themoviedb.org/3/movie/" + movieId +
                           "?api_key=9982a4cad6a8ec21c37bb6b5eeda41e7&language=en-US"
        return fetch(detailsURL).then(response => {
            return response.json()
        })
    }

    getDetailsFromOMDB = (movieId) => {

        const detailsURL = "http://www.omdbapi.com/?apikey=a65a037f&i=" + movieId
        return fetch(detailsURL).then(response => {
            return response.json()
        })
    }

    getLikedUsers = (movieId) => {

        return fetch(this.URL+"/api/movie/"+movieId+"/users",{
            credentials:'include'
        })
            .then(response=>{
                return response.json()});
    }

    getReviews = (movieId) => {

        return fetch(this.URL+"/api/movie/"+movieId+"/reviews",{
            credentials:'include'
        })
            .then( response =>{
               return response.json()});
    }

    createMovie = (movie) => {

        return fetch( this.URL+"/api/movie",{
            method:'post',
            body: JSON.stringify(movie),
            credentials:'include',
            headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            }
        })
            .then((response)=>{
                return response.json()});
    }

    likeMovie = (movieId,userId) => {

        return fetch( this.URL+"/api/user/"+userId+"/like/movie/"+movieId,{
            method:'post',
            credentials:'include',
            headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            }
        })
            .then(()=>{
                return });
    }

    disLikeMovie = (movieId,userId) => {
        return fetch(this.URL+"/api/user/"+userId+"/unlike/movie/"+movieId,{
                         credentials:'include',
                         method:"delete"
                     }

        ).then(
            response => {
                return }
        );
    }

}

export default MovieService