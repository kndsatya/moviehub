import React from 'react'
import "./Header.css"
import UserService from "../../services/UserService";
class MovieHeader extends React.Component{

    constructor(props){

        super(props)
        this.userService = new UserService()

    }

    logout = () => {

        this.props.updateLoginUser({
                                      id:null,
                                      username:null,
                                      password:null,
                                      role:null
                                   })
        this.userService.logout().then(()=>{
            this.props.history.push("/")
        })
    }

    render(){

        return(

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand moviehub-menu-title" href="#">MOVIE HUB</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={this.props.currentActive==="home"?"nav-item active":"nav-item"}>
                            <a className="nav-link" role="btn"
                               onClick={()=>this.props.history.push("/home")}>Home</a>
                        </li>
                        {
                            this.props.loginUser.id!==null?<li className={this.props.currentActive==="profile"?"nav-item active":"nav-item"}>
                                <a className="nav-link" role="btn"
                                   onClick={()=>this.props.history.push("/profile")}>Profile</a>
                            </li>:<li></li>
                        }

                        <li className={this.props.currentActive==="search"?"nav-item active":"nav-item"}>
                            <a className="nav-link" role="btn"
                               onClick={()=>this.props.history.push("/search")}>Search</a>
                        </li>

                        {
                            this.props.loginUser.id!==null?<li className={this.props.currentActive==="followers"?"nav-item active":"nav-item"}>
                                <a className="nav-link" role="btn"
                                   onClick={()=>this.props.history.push("/followers")}>Followers</a>
                            </li>:<li></li>
                        }

                        {
                            this.props.loginUser.id!==null?<li className={this.props.currentActive==="following"?"nav-item active":"nav-item"}>
                                <a className="nav-link" role="btn"
                                   onClick={()=>this.props.history.push("/following")}>Following</a>
                            </li>:<li></li>
                        }

                        {

                            this.props.loginUser.id===null?<li className={this.props.currentActive==="login"?"nav-item active":"nav-item"}>
                                <a className="nav-link" role="btn"
                                   onClick={()=>this.props.history.push("/login")}>Login</a>
                            </li>:                         <li className="nav-item">
                                <a className="nav-link" role="btn"
                                   onClick={()=>this.logout()}>Logout</a>
                            </li>
                        }
                        {
                            this.props.loginUser.id===null?<li className={this.props.currentActive==="signup"?"nav-item active":"nav-item"}>
                                <a className="nav-link" role="btn"
                                   onClick={()=>this.props.history.push("/SignUp")}>SignUp</a>
                            </li>:<li></li>
                        }

                    </ul>
                </div>
            </nav>
        )
    }

}

export default MovieHeader;