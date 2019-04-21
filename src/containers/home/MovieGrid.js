import React from 'react'
import MovieCard from "../../components/MovieCard"
import MovieService from "../../services/MovieService";
import UserService from "../../services/UserService";
import "./MovieGrid.css"

class MovieGrid extends React.Component {

    constructor(props) {
        super(props);
        this.movieService = new MovieService()
        this.userService = new UserService()
        this.state = {
            movies: [],
            likedMovies: [],
            reviewedMovies: [],
            loginUser: {
                id: "",
                username: "",
                firstName: "",
                lastName: "",
                password: "",
                phone: "",
                email: "",
                role: "",
                dateOfBirth: "",
                moviesLikedByUser: [],
                moviesReviewedByUser: []
            }
        }
    }

    componentDidMount() {

        this.movieService.findAllMovies().then(
            (movies) => {
                this.setState({
                                  movies: movies
                              })
            }
        )

        this.userService.loggedinUser().then(
            user => {

                this.setState(
                    {
                        loginUser: user,
                        likedMovies: user.moviesLikedByUser,
                        reviewedMovies: user.moviesReviewedByUser
                    }
                )
            }
        )
    }

    render() {

        return (

            <div>
                {

                    this.state.loginUser.id === ""?<div></div>:
                    this.state.loginUser.role === "USER" ? <div className="container-fluid mt-3">
                                                             <div className="row">
                                                                 {this.state.likedMovies.length!==0?
                                                                  <h4><strong>LIKED MOVIES:</strong></h4>:
                                                                 <div></div>}
                                                                 </div>
                                         <div className="row">

                                         {
                                               this.state.likedMovies.map((movie) => {
                                                                 return (<MovieCard key={parseInt(movie.id)}
                                                                                    movie={movie}
                                                                            />)
                                          }
                                          )
                                          }

                                          </div>
                                  </div>:
                    <div className="container-fluid mt-3">
                        <div className="row">{this.state.reviewedMovies.length!==0?
                                              <h4><strong>REVIEWED MOVIES:</strong></h4>
                                                                                 :<div></div>
                        }</div>
                        <div className="card-deck">

                            {
                                this.state.reviewedMovies.map((movie) => {
                                                                  return (<MovieCard key={movie.id} movie={movie}
                                                                                    />)
                                                              }
                                )
                            }

                        </div>
                    </div>
                }

                <div className="container-fluid mt-3 mb-2">
                    <div className="row"> {this.state.movies.length!==0?<h4><strong>ALL MOVIES:</strong></h4>
                                                                      :<div></div>
                    }</div>
                </div>
                <div className="container-fluid">
                    <div className="row">

                        {
                            this.state.movies.map((movie) => {
                                                      return (<MovieCard key={movie.id} movie={movie}
                                                                         />)
                                                  }
                            )
                        }

                    </div>
                </div>

            </div>
        )
    }

}

export default MovieGrid;
