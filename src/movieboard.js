import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import SignUp from "./containers/signup/SignUp"
import Login from './containers/Login/Login'
import UserService from "./services/UserService";
import MovieHeader from "./containers/header/MovieHeader";
import MovieGrid from "./containers/home/MovieGrid";
import Search from "./search/Search";
import SearchResult from "./search/SearchResult";
import MovieDetail from "./containers/details/MovieDetail";


class MovieBoard extends Component {

    constructor() {
        super();
        this.userService = new UserService()
        this.state = {
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

        this.userService.loggedinUser().then(
            user => {

                this.setState(
                    {
                        loginUser: user
                    }
                )
            }
        )

    }

    updateLoginUser = (user) => {
        this.setState({
                          loginUser: user
                      })
    }

    render(props) {

        return (

            <div>
                <Router>
                    <div>
                        <Route path='/signup' exact
                               render={(props) => {
                                   document.body.style.backgroundColor = "#1d1e22";
                                   return (<div>
                                       <MovieHeader {...props}/>
                                       <SignUp {...props} updateLoginUser={this.updateLoginUser}/>
                                   </div>)
                               }}/>

                        <Route path='/login' exact
                               render={(props) => {
                                   document.body.style.backgroundColor = "#1d1e22";
                                   return (<div>
                                       <MovieHeader {...props}/>
                                       <Login {...props}/>
                                   </div>)
                               }}/>
                        <Route path='/home' exact
                               render={(props) => {
                                   document.body.style.backgroundColor = "#1d1e22";
                                   return (<div>
                                       <MovieHeader {...props}/>
                                       <MovieGrid {...props}/>
                                   </div>)
                               }}/>
                        <Route path='/search' exact

                               render={(props) => {
                                   document.body.style.backgroundColor = "#1d1e22";
                                   return (<div>
                                       <MovieHeader {...props}/>
                                       <Search {...props}/>
                                   </div>)
                               }}/>
                        <Route path="/search/:query"
                               exact
                               render={(props) => {
                                   document.body.style.backgroundColor = "#1d1e22";
                                   return (<div>
                                       <MovieHeader {...props}/>
                                       <Search {...props}/>
                                       <SearchResult {...props}/>
                                   </div>)
                               }}/>
                        <Route path="/movie/:movieId"
                               exact
                               render={(props) => {
                                   document.body.style.backgroundColor = "#1d1e22";
                                   return (<div>
                                       <MovieHeader {...props}/>
                                       <MovieDetail {...props}/>
                                   </div>)
                               }}/>
                    </div>
                </Router>
            </div>
        )
    }

}

export default MovieBoard;