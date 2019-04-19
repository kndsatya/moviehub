import React from 'react'
import "./Header.css"
class MovieHeader extends React.Component{

    constructor(props){
        super(props)
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
                        <li className="nav-item active">
                            <a className="nav-link" role="btn"
                               onClick={()=>this.props.history.push("/home")}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" role="btn"
                               onClick={()=>this.props.history.push("/profile")}>Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" role="btn"
                               onClick={()=>this.props.history.push("/search")}>Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" role="btn"
                               onClick={()=>this.props.history.push("/login")}>Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" role="btn"
                               onClick={()=>this.props.history.push("/logout")}>Logout</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" role="btn"
                               onClick={()=>this.props.history.push("/SignUp")}>SignUp</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}

export default MovieHeader;