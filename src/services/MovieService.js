import movies from './movies.json';

class MovieService {

    constructor() {

    }

    findAllMovies = () => {
        return Promise.resolve(movies)
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
        return Promise.resolve([{
            "id": 123,
            "username": "satya",
            "firstName": "Satya",
            "lastName": "Kota",
            "password": "Satya1993",
            "phone": "8573527042",
            "email": "satya@gmail.com",
            "role": "USER",
            "dateOfBirth": "03-03-1993"
        }, {
            "id": 123,
            "username": "satya",
            "firstName": "Satya",
            "lastName": "Kota",
            "password": "Satya1993",
            "phone": "8573527042",
            "email": "satya@gmail.com",
            "role": "USER",
            "dateOfBirth": "03-03-1993"
        }, {
            "id": 123,
            "username": "satya",
            "firstName": "Satya",
            "lastName": "Kota",
            "password": "Satya1993",
            "phone": "8573527042",
            "email": "satya@gmail.com",
            "role": "USER",
            "dateOfBirth": "03-03-1993"
        }, {
            "id": 123,
            "username": "satya",
            "firstName": "Satya",
            "lastName": "Kota",
            "password": "Satya1993",
            "phone": "8573527042",
            "email": "satya@gmail.com",
            "role": "USER",
            "dateOfBirth": "03-03-1993"
        }, {
            "id": 123,
            "username": "satya",
            "firstName": "Satya",
            "lastName": "Kota",
            "password": "Satya1993",
            "phone": "8573527042",
            "email": "satya@gmail.com",
            "role": "USER",
            "dateOfBirth": "03-03-1993"
        }, {
            "id": 123,
            "username": "satya",
            "firstName": "Satya",
            "lastName": "Kota",
            "password": "Satya1993",
            "phone": "8573527042",
            "email": "satya@gmail.com",
            "role": "USER",
            "dateOfBirth": "03-03-1993"
        }, {
            "id": 123,
            "username": "satya",
            "firstName": "Satya",
            "lastName": "Kota",
            "password": "Satya1993",
            "phone": "8573527042",
            "email": "satya@gmail.com",
            "role": "USER",
            "dateOfBirth": "03-03-1993"
        }, {
            "id": 123,
            "username": "satya",
            "firstName": "Satya",
            "lastName": "Kota",
            "password": "Satya1993",
            "phone": "8573527042",
            "email": "satya@gmail.com",
            "role": "USER",
            "dateOfBirth": "03-03-1993"
        }, {
            "id": 123,
            "username": "satya",
            "firstName": "Satya",
            "lastName": "Kota",
            "password": "Satya1993",
            "phone": "8573527042",
            "email": "satya@gmail.com",
            "role": "USER",
            "dateOfBirth": "03-03-1993"
        }, {
            "id": 123,
            "username": "satya",
            "firstName": "Satya",
            "lastName": "Kota",
            "password": "Satya1993",
            "phone": "8573527042",
            "email": "satya@gmail.com",
            "role": "USER",
            "dateOfBirth": "03-03-1993"
        }, {
            "id": 123,
            "username": "satya",
            "firstName": "Satya",
            "lastName": "Kota",
            "password": "Satya1993",
            "phone": "8573527042",
            "email": "satya@gmail.com",
            "role": "USER",
            "dateOfBirth": "03-03-1993"
        }, {
            "id": 123,
            "username": "satya",
            "firstName": "Satya",
            "lastName": "Kota",
            "password": "Satya1993",
            "phone": "8573527042",
            "email": "satya@gmail.com",
            "role": "USER",
            "dateOfBirth": "03-03-1993"
        }, {
            "id": 123,
            "username": "satya",
            "firstName": "Satya",
            "lastName": "Kota",
            "password": "Satya1993",
            "phone": "8573527042",
            "email": "satya@gmail.com",
            "role": "USER",
            "dateOfBirth": "03-03-1993"
        }, {
            "id": 123,
            "username": "satya",
            "firstName": "Satya",
            "lastName": "Kota",
            "password": "Satya1993",
            "phone": "8573527042",
            "email": "satya@gmail.com",
            "role": "USER",
            "dateOfBirth": "03-03-1993"
        }, {
            "id": 123,
            "username": "satya",
            "firstName": "Satya",
            "lastName": "Kota",
            "password": "Satya1993",
            "phone": "8573527042",
            "email": "satya@gmail.com",
            "role": "USER",
            "dateOfBirth": "03-03-1993"
        }, {
            "id": 123,
            "username": "satya",
            "firstName": "Satya",
            "lastName": "Kota",
            "password": "Satya1993",
            "phone": "8573527042",
            "email": "satya@gmail.com",
            "role": "USER",
            "dateOfBirth": "03-03-1993"
        }, {
            "id": 123,
            "username": "satya",
            "firstName": "Satya",
            "lastName": "Kota",
            "password": "Satya1993",
            "phone": "8573527042",
            "email": "satya@gmail.com",
            "role": "USER",
            "dateOfBirth": "03-03-1993"
        }, {
            "id": 123,
            "username": "satya",
            "firstName": "Satya",
            "lastName": "Kota",
            "password": "Satya1993",
            "phone": "8573527042",
            "email": "satya@gmail.com",
            "role": "USER",
            "dateOfBirth": "03-03-1993"
        }, {
            "id": 123,
            "username": "satya",
            "firstName": "Satya",
            "lastName": "Kota",
            "password": "Satya1993",
            "phone": "8573527042",
            "email": "satya@gmail.com",
            "role": "USER",
            "dateOfBirth": "03-03-1993"
        }])
    }

    getReviews = (movieId) => {
        return Promise.resolve([
                                   {
                                       id: 1,
                                       reviewComments: "Very Good Movie!!!!!",
                                       user: {
                                           id: 1,
                                           username: "satya"
                                       },
                                       movie: {
                                           id: "tt8361196",
                                           title: "vvr"
                                       }
                                   }, {
                id: 2,
                reviewComments: "Very Good Movie!!!!!",
                user: {
                    id: 2,
                    username: "satya"
                }, movie:{
                    id: "tt8361196",
                    title: "ntr"
                }
            }, {
                id: 3,
                reviewComments: "Very Good Movie!!!!!",
                user: {
                    id: 3,
                    username: "satya"
                }, movie:{
                    id: "tt8361196",
                    title: "nbk"
                }
            }, {
                id: 4,
                reviewComments: "Very Good Movie !!!!!!!!!!!!!",
                user: {
                    id: 4,
                    username: "satya"
                }, movie:{
                    id: "tt8361196",
                    title: "cheg"
                }
            }
                               ])
    }

    createMovie = (movie) => {
        return Promise.resolve({})
    }
    likeMovie = (movieId,userId) => {
        return Promise.resolve({})
    }

    disLikeMovie = (movieId,userId) => {
        return Promise.resolve({})
    }

}

export default MovieService