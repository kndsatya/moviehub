import React from 'react';
import MovieService from "../../services/MovieService";
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../../node_modules/bootstrap/js/dist/collapse';
import './MovieDetail.css'
import UserService from "../../services/UserService";
import {Link} from "react-router-dom";
import ReviewService from "../../services/ReviewService";
import Review from "../../components/Review";
import ReviewUpdate from "../../components/ReviewUpdate";
import PostReview from "../../components/PostReview";

class MovieDetail extends React.Component {

    constructor(props) {
        super(props)
        this.movieId = props.match.params.movieId
        this.movieService = new MovieService()
        this.userService = new UserService()
        this.reviewService = new ReviewService()
        this.state = {
            movie: {
                id: "",
                title: "",
                overview: "",
                release_date: "",
                imdb_id: "",
                actors: "",
                genre: "",
                imdb_rating: ""
            },

            loggedInUser: {
                id: ""
            },
            didUserLike: false,
            likedUsers: [],
            reviews: [],
            reviewComment: "",
            commentUpdate: "",
            reviewToEdit: "",
        }
    }

    readUpdatedComments = (reviewComment) => {
        this.setState(
            {
                commentUpdate: reviewComment
            }
        )
    }

    updateReviewComments = (reviewComment) => {
        this.setState({
                          reviewComment: reviewComment
                      })
    }

    editReview = (reviewId) => {
        this.setState(
            {
                reviewToEdit: reviewId
            }
        )
    }

    updateReview = (review) => {

        review.reviewComments = this.state.commentUpdate
        this.reviewService.updateReview(review)
            .then(() => {
                      this.movieService.getReviews(review.movie.id)
                          .then(
                              (reviews) => {
                                  this.setState(
                                      {
                                          reviews: reviews,
                                          commentUpdate: "",
                                          reviewToEdit: ""

                                      }
                                  )
                              }
                          )
                  }
            )
    }

    postReview = (reviewComment) => {
        this.reviewService.postReview(reviewComment, this.state.movie, this.state.loggedInUser)
            .then(
                () => {
                    this.movieService.getReviews(this.state.movie.id).then(
                        (reviews) => {
                            this.setState({
                                              reviews: reviews,
                                              reviewComment: "",

                                          })
                        }
                    )
                }
            )
    }

    deleteReview = (reviewId) => {
        this.reviewService.deleteReview(reviewId).then(
            this.movieService.getReviews(this.state.movie.id).then(
                (reviews) => {
                    this.setState(
                        {
                            reviews: reviews
                        }
                    )
                }
            )
        )
    }

    disLikeMovie = () => {
        this.movieService.disLikeMovie(this.state.movie.id, this.state.loggedInUser.id).then(
            () => {
                this.setState(
                    {
                        didUserLike: false
                    }
                )
            }
        )
    }

    likeMovie = () => {
        this.movieService.disLikeMovie(this.state.movie.id, this.state.loggedInUser.id).then(
            () => {
                this.setState(
                    {
                        didUserLike: true
                    }
                )
            }
        )
    }


    componentDidMount() {

        this.movieService.getTrailer(this.movieId)
            .then(
                (trailerDetails) => {
                    let movie = this.state.movie
                    if(trailerDetails.results.length===0){

                        movie.trailerKey = "nxntBzo8kww"
                    }else{
                        movie.trailerKey = trailerDetails.results[0].key
                    }
                    this.setState({movie: movie})
                }
            )

        this.movieService.getLikedUsers(this.movieId)
            .then(
                (users) => {
                    this.setState({
                                      likedUsers: users
                                  })
                }
            )

        this.movieService.getReviews(this.movieId)
            .then(
                (reviews) => {
                    this.setState({
                                      reviews: reviews
                                  })
                }
            )

        this.userService.loggedinUser().then((user) => {

            if (user.id !== "") {

                this.userService.findAllLikedMovies(user.id)
                    .then((likedMovies) => {

                        let didUserLike = false
                        for (var i = 0; i < likedMovies.length; i++) {
                            if (likedMovies[i].id == this.movieId) {

                                didUserLike = true;
                                break;
                            }
                        }
                        this.setState({
                                          loggedInUser: user,
                                          didUserLike: didUserLike
                                      })
                    })

            }

        })

        this.movieService.getDetailsFromTMDB(this.movieId)
            .then(
                (responseMovie) => {
                    let tmdb_movie = this.state.movie
                    tmdb_movie.title = responseMovie.title
                    tmdb_movie.overview = responseMovie.overview
                    tmdb_movie.release_date = responseMovie.release_date
                    tmdb_movie.imdb_id = responseMovie.imdb_id
                    this.setState({
                                      movie: tmdb_movie
                                  })
                    this.movieService.getDetailsFromOMDB(this.state.movie.imdb_id)
                        .then(
                            (responseMovieDetail) => {
                                let omdb_movie = this.state.movie
                                omdb_movie.actors = responseMovieDetail.Actors
                                omdb_movie.genre = responseMovieDetail.Genre
                                if(responseMovieDetail.Ratings.length===0){
                                    omdb_movie.imdb_rating = "N/A"
                                }else{
                                    omdb_movie.imdb_rating = responseMovieDetail.Ratings[0].Value
                                }
                                omdb_movie.director = responseMovieDetail.Director
                                omdb_movie.writer = responseMovieDetail.Writer
                                omdb_movie.runtime = responseMovieDetail.Runtime
                                omdb_movie.language = responseMovieDetail.Language
                                omdb_movie.country = responseMovieDetail.Country

                                this.setState({
                                                  movie: omdb_movie
                                              })
                            }
                        )
                }
            )
    }

    render() {

        return (

            <div>
                <div className="moviehub-video embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item"
                            src={"https://www.youtube.com/embed/" + this.state.movie.trailerKey
                                 + "?rel=0&loop=1&origin=http://localhost:3000"}
                            allowFullScreen></iframe>
                </div>

                <div className="container mt-4">
                    <div className="card">
                        <div className="card-body">

                            <div className="row">
                                <div className="col-sm-1">
                                    {

                                        this.state.didUserLike ? <a role="btn"
                                                                    onClick={() => {
                                                                        this.disLikeMovie()
                                                                    }
                                                                    }><i
                                                                   className="fa fa-2x fa-heart moviehub-like mt-2"></i></a>
                                                               :
                                        <a role="btn"
                                           onClick={() => {
                                               this.likeMovie()
                                           }
                                           }> <i
                                            className="fa fa-2x fa-heart-o moviehub-unlike mt-2"></i></a>
                                    }

                                </div>
                                <div className="col-sm-11 mt-2">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h5><strong>{"IMDB Rating: "
                                                         + this.state.movie.imdb_rating}</strong>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-2 ml-2">
                                <h5><strong>{this.state.movie.title}</strong></h5>
                            </div>
                            <div className="row mt-2 ml-3">
                                <p className="moviehub-font">{this.state.movie.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container mt-0">


                    <div className="accordion" id="details">

                        <div className="card">
                            <div className="btn btn-dark mt-0" type="button"
                                 data-toggle="collapse" data-target="#collapseDetails"
                                 aria-expanded="true" aria-controls="collapseOne">
                                <div className="float-left" id="headingOne">
                                    <h5>MOVIE DETAILS</h5>
                                </div>
                            </div>

                            <div id="collapseDetails" className="collapse show"
                                 aria-labelledby="collapseDetails" data-parent="#details">
                                <div className="card-body">

                                    <div className="row mt-2 ml-5">
                                        <div className="col-sm-2">
                                            Actors
                                        </div>
                                        <div className="col-sm-2">
                                            :
                                        </div>
                                        <div className="col-sm-8">
                                            {this.state.movie.actors}
                                        </div>
                                    </div>
                                    <div>
                                        <hr/>
                                    </div>


                                    <div className="row mt-2 ml-5">
                                        <div className="col-sm-2">
                                            Genre
                                        </div>
                                        <div className="col-sm-2">
                                            :
                                        </div>
                                        <div className="col-sm-8">
                                            {this.state.movie.genre}
                                        </div>
                                    </div>
                                    <div>
                                        <hr/>
                                    </div>

                                    <div className="row mt-2 ml-5">
                                        <div className="col-sm-2">
                                            Release Date
                                        </div>
                                        <div className="col-sm-2">
                                            :
                                        </div>
                                        <div className="col-sm-8">
                                            {this.state.movie.release_date}
                                        </div>
                                    </div>
                                    <div>
                                        <hr/>
                                    </div>

                                    <div className="row mt-2 ml-5">
                                        <div className="col-sm-2">
                                            Run Time
                                        </div>
                                        <div className="col-sm-2">
                                            :
                                        </div>
                                        <div className="col-sm-8">
                                            {this.state.movie.runtime}
                                        </div>
                                    </div>
                                    <div>
                                        <hr/>
                                    </div>

                                    <div className="row mt-2 ml-5">
                                        <div className="col-sm-2">
                                            Director
                                        </div>
                                        <div className="col-sm-2">
                                            :
                                        </div>
                                        <div className="col-sm-8">
                                            {this.state.movie.director}
                                        </div>
                                    </div>
                                    <div>
                                        <hr/>
                                    </div>


                                    <div className="row mt-2 ml-5">
                                        <div className="col-sm-2">
                                            Writer
                                        </div>
                                        <div className="col-sm-2">
                                            :
                                        </div>
                                        <div className="col-sm-8">
                                            {this.state.movie.writer}
                                        </div>
                                    </div>
                                    <div>
                                        <hr/>
                                    </div>


                                    <div className="row mt-2 ml-5">
                                        <div className="col-sm-2">
                                            Language
                                        </div>
                                        <div className="col-sm-2">
                                            :
                                        </div>
                                        <div className="col-sm-8">
                                            {this.state.movie.language}
                                        </div>
                                    </div>
                                    <div>
                                        <hr/>
                                    </div>

                                    <div className="row mt-2 ml-5">
                                        <div className="col-sm-2">
                                            Country
                                        </div>
                                        <div className="col-sm-2">
                                            :
                                        </div>
                                        <div className="col-sm-8">
                                            {this.state.movie.country}
                                        </div>
                                    </div>
                                    <div>
                                        <hr/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container mt-0">


                    <div className="accordion" id="likers">

                        <div className="card">
                            <div className="btn btn-dark mt-0" type="button"
                                 data-toggle="collapse" data-target="#collapseOne"
                                 aria-expanded="true" aria-controls="collapseOne">
                                <div className="float-left" id="headingOne">
                                    <h5>Liked Users</h5>
                                </div>
                            </div>

                            <div id="collapseOne" className="collapse show"
                                 aria-labelledby="headingOne" data-parent="#likers">
                                <div className="card-body">
                                    <div className="row ml-2">
                                        {this.state.likedUsers.map(
                                            (user) => {
                                                return (
                                                    <Link className="moviehub-link col-sm-2"
                                                          key={user.id}
                                                          to={`/profile/${user.id}`}>
                                                        <h5>{user.username}</h5>
                                                    </Link>
                                                )
                                            }
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container mt-0">

                    <div className="accordion" id="reviews">

                        <div className="card">
                            <div className="btn btn-dark mt-0" type="button"
                                 data-toggle="collapse" data-target="#collapseReview"
                                 aria-expanded="true" aria-controls="collapseReview">
                                <div className="float-left" id="headingReview">
                                    <h5>Reviews</h5>
                                </div>
                            </div>

                            <div id="collapseReview" className="collapse show"
                                 aria-labelledby="headingReview" data-parent="#reviews">
                                <div className="card-body">

                                    {
                                        this.state.loggedInUser.id !== "" ? <PostReview
                                                                              postReview={this.postReview}
                                                                              reviewComment={this.state.reviewComment}
                                                                              updateReviewComments={this.updateReviewComments}/> :
                                        <div></div>
                                    }

                                    {this.state.reviews.map(
                                        (review) => {
                                            if (review.id === this.state.reviewToEdit) {
                                                return (
                                                    <ReviewUpdate
                                                        readUpdatedComments={this.readUpdatedComments}
                                                        review={review}
                                                        updateReview={this.updateReview}/>
                                                )
                                            }
                                            return (

                                                <Review key={review.id} review={review}
                                                        editReview={this.editReview}
                                                        deleteReview={this.deleteReview}
                                                        loginUser={this.state.loggedInUser}
                                                        props={this.props}/>
                                            )
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}

export default MovieDetail