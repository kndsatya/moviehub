import React from 'react'
import {Link} from "react-router-dom";
import profileImage from '../resources/profile-placeholder.png'
import './MovieCard.css'
const Follower = ({follower}) =>

    <div className="col-sm-12 col-md-4 col-lg-2 mb-2">
        <div className="card" styles="width:18rem;">
            <img className="card-img-top" src={profileImage} alt="Profile Image"/>
            <div className="card-body">
                <Link className="moviehub-link" to={`/profile/${follower.id}`}>
                    <h5 className="card-title text-center moviehub-card-text">{follower.username}</h5>
                </Link>
            </div>
        </div>
    </div>

export default Follower