import React from 'react'
import UserService from "../../services/UserService";
import MovieService from "../../services/MovieService";
import MovieCard from "../../components/MovieCard";
import ReviewUpdate from "../../components/ReviewUpdate";
import Review from "../../components/Review";
import PostReview from "../../components/PostReview";
import ReviewService from "../../services/ReviewService";

class Profile extends React.Component{


    constructor(props){
        super(props)
        this.userService = new UserService()
        this.reviewService = new ReviewService()
        this.state = {
            loginUser:{
                id:"",
                username:"",
                firstName:"",
                lastName:"",
                password:"",
                phoneNumberNumber:"",
                email:"",
                role:"",
                dateOfBirth:""
            }

        }
    }


    updateProfile = (event)=>{
        event.preventDefault()
        const updatedUser = {
            id: this.state.loginUser.id,
            username:this.state.loginUser.username,
            password:this.state.loginUser.password,
            phoneNumber: document.getElementById("phoneNumber").value,
            email:document.getElementById("email").value,
            role:this.state.loginUser.role,
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            dateOfBirth: document.getElementById("dob").value
        }

        var regularExpression = /\S+@\S+\.\S+/;
        if(!regularExpression.test(updatedUser.email)){
            alert("Email should be in the format alice@gmail.com");
            return;
        }
        var phoneNumberregEx = /\d/g;
        if( updatedUser.phoneNumber==="" || !phoneNumberregEx.test(updatedUser.phoneNumber) || updatedUser.phoneNumber.match(/\d/g).length!==10){
            alert("phoneNumber number should contain only 10 digits")
            return
        }

        if(updatedUser.firstName===""){
            alert("First Name can not be empty.")
            return
        }

        if(updatedUser.lastName===""){
            alert("Last Name can not be empty.")
            return
        }


        if(updatedUser.dateOfBirth==="" || new Date(updatedUser.dateOfBirth) >= new Date()){
            alert("Date of birth can't be empty or can't be in future")
            return
        }

        alert("Profile Updated Successfully")
        this.userService.updateUser(updatedUser)
            .then((user)=>{
                this.setState({
                                            loginUser: user
                                        })
                 this.props.history.push("/home")
            })
    }

    showDetails = () => {
        this.props.history.push("/profile/"+this.state.loginUser.id)
    }

    componentDidMount(){
        this.userService.loggedinUser().then(
            user => {

                if(user.id===null){
                    this.props.history.push("/")
                }
                this.setState(
                    {
                        loginUser: user,
                        user:{
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            phoneNumber: user.phoneNumber,
                            email:user.email,
                            role:user.role,
                            dateOfBirth:user.dateOfBirth
                        }
                    }
                )
            }
        )}

    render(){

        return(
            <div>
                <div className="container moviehub-text">
                    <h1>Profile</h1>
                    <form>
                        <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="username"
                                   defaultValue={this.state.loginUser.username}
                                   readOnly/>
                        </div>
                    </div>

                        <div className="form-group row">
                            <label htmlFor="role"
                                   className="col-sm-2 col-form-label">Role</label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                       id="role"
                                       defaultValue={ this.state.loginUser.role}
                                       readOnly/>
                            </div>
                        </div>


                        <div className="form-group row">
                            <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                       id="firstName"
                                       type="text"
                                       defaultValue={this.state.loginUser.firstName}
                                       placeholder="First Name"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                       id="lastName"
                                       type="text"
                                       defaultValue={this.state.loginUser.lastName}
                                       placeholder="Last Name"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">phoneNumber</label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                       id="phoneNumber"
                                       defaultValue={this.state.loginUser.phoneNumber}
                                       placeholder="5551234578"/>
                            </div>
                        </div>


                        <div className="form-group row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                       id="email"
                                       type="email"
                                       defaultValue={this.state.loginUser.email}
                                       placeholder="jon@husky.neu.edu"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="dob" className="col-form-label col-sm-2">Date of
                                Birth</label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                       id="dob"
                                       type="date"
                                       defaultValue={this.state.loginUser.dateOfBirth}
                                       placeholder="mm/dd/yyyy"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10">
                                <button className="btn btn-success btn-block" onClick={this.updateProfile}>
                                    Update</button>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10">
                                <button className="btn btn-primary btn-block" onClick={this.showDetails}>
                                    View Profile Details</button>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
        )
    }
}

export default Profile