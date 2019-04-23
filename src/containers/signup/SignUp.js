import React from 'react'
import './SignUp.css'
import UserService from "../../services/UserService";

class SignUp extends React.Component {

    constructor(props){
        super(props)
        this.userService = new UserService()
        this.state={
            reenteredPassword:"",
            user:{
                id:"",
                userName:"",
                password: "",
                role:""
            },
            registeredUser:""
        }
    }


    register = (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        const reenteredPassword = document.getElementById("verify_password").value
        if(username===""||password===""
           ||reenteredPassword===""){
            alert("Please enter all the fields");
        }

        else if(password!==reenteredPassword){
            alert("Password and password for verification should match");
        }
        else {
            const user = {
                username:document.getElementById("username").value,
                password: document.getElementById("password").value,
                role: document.getElementById("role").value
            }


            this.userService.register(user).then(
                (user)=> {

                    if(user.id!=null){
                        alert("User created Successfully");
                        this.setState({
                            registeredUser:user
                                      })
                        this.props.updateLoginUser(this.state.registeredUser)
                        this.props.history.push("/login")
                    }
                    else{
                        alert("User exists already");
                    }
                })
        }
    }

    render() {
        return (
            <div>
                <div className="container moviehub-text">
                    <h1>Sign Up</h1>
                    <form>

                        <div className="form-group row">
                            <label htmlFor="username"
                                   className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                       id="username"
                                       placeholder="Satya"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="password"
                                   className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input className="form-control wbdv-password-fld"
                                       id="password"
                                       type="password"
                                       placeholder="$adbada@12"/>
                            </div>
                        </div>


                        <div className="form-group row">
                            <label htmlFor="verify_password" className="col-sm-2 col-form-label">Verify
                                Password</label>
                            <div className="col-sm-10">
                                <input className="form-control wbdv-password-fld"
                                       id="verify_password"
                                       type="password"
                                       placeholder="$adbada@12"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="role">Role</label>
                            <div className="col-sm-10">
                                <select name="role" id="role" className="custom-select mr-sm-2">

                                        <option value="AUDIENCE">
                                            AUDIENCE
                                        </option>

                                     <option value="CRITIC">
                                            CRITIC
                                        </option>

                                </select>
                            </div>
                        </div>


                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10">
                                <button
                                    className="btn btn-primary btn-block"
                                    onClick={this.register}>Sign up
                                </button>
                            </div>
                        </div>


                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label"></label>
                        </div>

                    </form>
                </div>
            </div>);
    }
}

export default SignUp;