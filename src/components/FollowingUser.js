import React from 'react'
import {Link} from "react-router-dom";
import profileImage from '../resources/profile-placeholder.png'
import './MovieCard.css'

const FollowingUser = ({followingUser, unfollow}) =>

    <div className="col-sm-12 col-md-4 col-lg-2 mb-2">
        <div className="card" styles="width:18rem;">
            <img className="card-img-top" src={profileImage} alt="Profile Image"/>
            <div className="card-body">
                <Link className="moviehub-link" to={`/profile/${followingUser.id}`}>
                    <h5 className="card-title text-center moviehub-card-text">{followingUser.username}</h5>
                </Link>
                <div className="row justify-content-center">
                    <a role="btn" className="btn btn-danger"
                       onClick={() => unfollow(followingUser.id)}>Unfollow</a>
                </div>
            </div>
        </div>
    </div>

export default FollowingUser