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
import Profile from "./containers/profile/Profile";
import GlobalProfile from "./containers/profile/GlobalProfile";
import Followers from "./containers/user_network/Followers";
import Following from "./containers/user_network/Following";


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
            },
            currentActive: "HOME"
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
                                       <MovieHeader {...props} loginUser={this.state.loginUser}
                                                    updateLoginUser={this.updateLoginUser} currentActive={"signup"}/>
                                       <SignUp {...props} updateLoginUser={this.updateLoginUser}/>
                                   </div>)
                               }}/>

                        <Route path='/login' exact
                               render={(props) => {
                                   document.body.style.backgroundColor = "#1d1e22";
                                   return (<div>
                                       <MovieHeader {...props} loginUser={this.state.loginUser}
                                                    updateLoginUser={this.updateLoginUser} currentActive={"login"}/>
                                       <Login {...props} updateLoginUser={this.updateLoginUser}/>
                                   </div>)
                               }}/>
                        <Route path='/home' exact
                               render={(props) => {
                                   document.body.style.backgroundColor = "#1d1e22";
                                   return (<div>
                                       <MovieHeader {...props} loginUser={this.state.loginUser}
                                                    updateLoginUser={this.updateLoginUser} currentActive={"home"}/>
                                       <MovieGrid {...props}/>
                                   </div>)
                               }}/>
                        <Route path='/' exact
                               render={(props) => {
                                   document.body.style.backgroundColor = "#1d1e22";
                                   return (<div>
                                       <MovieHeader {...props} loginUser={this.state.loginUser}
                                                    updateLoginUser={this.updateLoginUser} currentActive={"home"}/>
                                       <MovieGrid {...props}/>
                                   </div>)
                               }}/>

                        <Route path='/search' exact

                               render={(props) => {
                                   document.body.style.backgroundColor = "#1d1e22";
                                   return (<div>
                                       <MovieHeader {...props} loginUser={this.state.loginUser}
                                                    updateLoginUser={this.updateLoginUser} currentActive={"search"}/>
                                       <Search {...props}/>
                                   </div>)
                               }}/>
                        <Route path="/search/:query"
                               exact
                               render={(props) => {
                                   document.body.style.backgroundColor = "#1d1e22";
                                   return (<div>
                                       <MovieHeader {...props} loginUser={this.state.loginUser}
                                                    updateLoginUser={this.updateLoginUser} currentActive={"search"}/>
                                       <Search {...props}/>
                                       <SearchResult {...props}/>
                                   </div>)
                               }}/>
                        <Route path="/movie/:movieId"
                               exact
                               render={(props) => {
                                   document.body.style.backgroundColor = "#1d1e22";
                                   return (<div>
                                       <MovieHeader {...props} loginUser={this.state.loginUser}
                                                    updateLoginUser={this.updateLoginUser} currentActive={"details"}/>
                                       <MovieDetail {...props}/>
                                   </div>)
                               }}/>

                        <Route path="/profile"
                               exact
                               render={(props) => {
                                   document.body.style.backgroundColor = "#1d1e22";
                                   return (<div>
                                       <MovieHeader {...props} loginUser={this.state.loginUser}
                                                    updateLoginUser={this.updateLoginUser} currentActive={"profile"}/>
                                       <Profile {...props}/>
                                   </div>)
                               }}/>

                        <Route path="/profile/:profileId"
                               exact
                               render={(props) => {
                                   document.body.style.backgroundColor = "#1d1e22";
                                   return (<div>
                                       <MovieHeader {...props} loginUser={this.state.loginUser}
                                                    updateLoginUser={this.updateLoginUser} currentActive={"profile"}/>
                                       <GlobalProfile {...props}/>
                                   </div>)
                               }}/>

                        <Route path="/followers"
                               exact
                               render={(props) => {
                                   document.body.style.backgroundColor = "#1d1e22";
                                   return (<div>
                                       <MovieHeader {...props} loginUser={this.state.loginUser}
                                                    updateLoginUser={this.updateLoginUser} currentActive={"followers"}/>
                                       <Followers {...props}/>
                                   </div>)
                               }}/>
                        <Route path="/following"
                               exact
                               render={(props) => {
                                   document.body.style.backgroundColor = "#1d1e22";
                                   return (<div>
                                       <MovieHeader {...props} loginUser={this.state.loginUser}
                                                    updateLoginUser={this.updateLoginUser} currentActive={"following"}/>
                                       <Following {...props}/>
                                   </div>)
                               }}/>
                    </div>
                </Router>
            </div>
        )
    }

}

export default MovieBoard;