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
                phoneNumber: "",
                email: "",
                role: "",
                dateOfBirth: ""
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
                    }
                )

                if(this.state.loginUser.id!==null) {

                    if(this.state.loginUser.role=="AUDIENCE"){
                        this.userService.findAllLikedMovies(this.state.loginUser.id)
                            .then((movies) => {
                                this.setState({
                                                  likedMovies: movies
                                              })
                            })
                    }else{
                        this.userService.findAllReviewedMovies(this.state.loginUser.id)
                            .then((movies) => {
                                this.setState({
                                                  reviewedMovies: movies
                                              })
                            })
                    }
                }

            }
        )
    }

    render() {

        return (

            <div className="moviehub-text">
                {

                    this.state.loginUser.id === null?<div></div>:
                    this.state.loginUser.role === "AUDIENCE" ? <div className="container-fluid mt-3 ml-1">
                                                             <div className="row ml-2">
                                                                 {this.state.likedMovies.length!==0?
                                                                  <h4><strong>LIKED MOVIES:</strong></h4>:
                                                                 <div></div>}
                                                                 </div>
                                         <div className="row mt-2">

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
                    <div className="container-fluid mt-3 ml-1">
                        <div className="row ml-2">{this.state.reviewedMovies.length!==0?
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

                <div className="container-fluid mt-3 mb-2 ml-1">
                    <div className="row ml-2"> {this.state.movies.length!==0?<h4><strong>ALL MOVIES:</strong></h4>
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
