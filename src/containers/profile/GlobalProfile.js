import React from 'react'
import MovieService from "../../services/MovieService";
import UserService from "../../services/UserService";
import ReviewService from "../../services/ReviewService";
import './profile.css'
import MovieCard from "../../components/MovieCard";
import ReviewUpdate from "../../components/ReviewUpdate";
import Review from "../../components/Review";
class GlobalProfile extends React.Component{



    constructor(props){

        super(props)

        this.profileId = props.match.params.profileId
        this.movieService = new MovieService()
        this.userService = new UserService()
        this.reviewService = new ReviewService()

        this.state = {
            loginUser:{
                id:"",
                username:"",
                firstName:"",
                lastName:"",
                password:"",
                phoneNumber:"",
                email:"",
                role:"",
                dateOfBirth:""
            },
            user:{
                id:"",
                username:"",
                role:""
            },
            likedMovies:[],
            reviews:[],
            reviewToEdit:"",
            commentUpdate:"",
            didLoginUserFollow:false
        }



    }


    readUpdatedComments = (reviewComment) => {
        this.setState(
            {
                commentUpdate: reviewComment
            }
        )
    }

    editReview = (reviewId) => {
        this.setState(
            {
                reviewToEdit: reviewId
            }
        )
    }

    updateReview = (review) => {

        review.reviewComment = this.state.commentUpdate
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

    deleteReview = (reviewId) => {

        this.reviewService.deleteReview(reviewId).then(

            (reviews) => {
                this.setState(
                    {
                        reviews: reviews
                    }
                )
            })
    }


    componentDidMount(){

        this.userService.findUserById(this.profileId)
            .then(
                (user)=>{
                    this.setState({
                        user:user
                                  })
                }
            )

        this.userService.loggedinUser()
            .then(
                (user) => {
                    this.setState(
                        {
                            loginUser: user
                        }
                    )

                    if(user.id!==null){

                        this.userService.didLoginUserFollow(this.state.loginUser.id,this.profileId)
                            .then(response => {
                                this.setState(
                                    {
                                        didLoginUserFollow: response
                                    }
                                )
                            } )
                    }
                }
            )

        this.userService.findAllLikedMovies(this.profileId)
            .then((movies)=>{
                this.setState(
                    {
                        likedMovies: movies
                    }
                )
            })

        this.userService.findAllReviews(this.profileId)
            .then((reviews)=>{
                this.setState(
                    {
                        reviews: reviews
                    }
                )
            })

    }

    unfollow=()=>{
        this.userService.unfollow(this.state.loginUser.id,this.profileId)
            .then((response)=>{
                if(response){
                this.setState(
                    {
                        didLoginUserFollow: false
                    }
                 )
                }else{
                    alert("Unable to unfollow");
                }
            })
    }

    follow=()=>{

        this.userService.follow(this.state.loginUser.id,this.profileId)
            .then((response)=>{

                if(response){

                    this.setState(
                        {
                            didLoginUserFollow: true
                        }
                    )
                }else{
                    alert("Unable to follow");
                }
            })
    }

    render(){

        if(this.state.user.username===null){
            return(<div></div>)
        }
        return(
            <div>

                <div className="moviehub-text mt-1 mr-5">
                    <div className="row float-right">
                        {

                            this.state.loginUser.id!==null && parseInt(this.state.loginUser.id)!== parseInt(this.profileId)?
                            this.state.didLoginUserFollow?<button className="btn btn-danger"
                                                         onClick={this.unfollow}>UnFollow</button>:
                            <button className="btn btn-primary"
                                onClick={this.follow}>Follow</button>:
                            <h5></h5>
                        }
                        <h5> &nbsp;&nbsp;</h5>
                        <h4>{this.state.user.username!== null?this.state.user.username.toUpperCase():this.state.user.username}&nbsp;&nbsp;</h4>
                        <h4>{this.state.user.role}</h4>
                    </div>
                 </div>

                <div className="row">
                    <h5>&nbsp;&nbsp;</h5>
                </div>

                <div>
                {
                    this.state.user.role === "AUDIENCE"?
                    <div className="container-fluid mt-2 ml-1 moviehub-text">
                        <div className="row ml-2 mt-1">
                            {this.state.likedMovies.length !== 0 ?
                             <h4><strong>LIKED MOVIES:</strong></h4> :
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

                    <div className="container mt-3">

                        <div className="accordion" id="reviews">

                            <div className="card">
                                <div className="btn btn-dark mt-0" type="button"
                                     data-toggle="collapse" data-target="#collapseReview"
                                     aria-expanded="true" aria-controls="collapseReview">
                                    <div className="float-left" id="headingReview">
                                        <h5>Authored Reviews</h5>
                                    </div>
                                </div>

                                <div id="collapseReview" className="collapse show"
                                     aria-labelledby="headingReview" data-parent="#reviews">
                                    <div className="card-body">
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
                                                            loginUser={this.state.loginUser}
                                                            props={this.props}
                                                            isMovieReview={false}/>
                                                )
                                            }
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
                </div>
            </div>
        )
    }


}

export default GlobalProfile