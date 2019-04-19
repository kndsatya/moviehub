import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import SignUp from "./containers/signup/SignUp"
import Login from './containers/Login/Login'
import UserService from "./services/UserService";
import MovieHeader from "./containers/header/MovieHeader";

class MovieBoard extends Component{

    constructor(){
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
                dateOfBirth: ""
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


    render(props){

        return(

            <div>
                <Router>
                    <div>
                        <Route path='/signup' exact
                               render={(props) => {
                                   return (<div>
                                       <MovieHeader {...props}/>
                                       <SignUp {...props} updateLoginUser={this.updateLoginUser}/>
                                   </div>)
                               }}/>

                        <Route path='/login' exact
                               render={(props) => {
                                   return (<div>
                                       <MovieHeader {...props}/>
                                       <Login {...props}/>
                                   </div>)
                               }}/>
                    </div>
                </Router>
            </div>
        )
    }

}

export  default  MovieBoard;