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
                password: ""
            },
            registeredUser:""
        }
    }

    usernameChanged = (event) =>{
        this.state.user.userName = event.target.value
    }

    passwordChanged = (event) => {
        this.state.user.password = event.target.value
    }

    reenteredPasswordChanged = (event)=>{
        this.state.reenteredPassword  = event.target.value
    }



    register = (event) => {
        event.preventDefault();

        if(this.state.user.userName===""||this.state.user.password===""
           ||this.state.reenteredPassword===""){
            alert("Please enter all the fields");
        }

        else if(this.state.user.password!==this.state.reenteredPassword){
            alert("Password and password for verification should match");
        }
        else {
            const user = {
                username:this.state.user.userName,
                password:this.state.user.password
            }


            this.userService.register(user).then(
                (user)=> {

                    if(user.id!=null){
                        alert("User created Successfully");
                        this.setState({
                            registeredUser:user
                                      })
                        this.props.updateLoginUser(this.state.registeredUser)
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
                <div className="container">
                    <h1>Sign Up</h1>
                    <form>

                        <div className="form-group row">
                            <label htmlFor="username"
                                   className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                       id="username"
                                       placeholder="Satya" onChange={this.usernameChanged}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="password"
                                   className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input className="form-control wbdv-password-fld"
                                       id="password"
                                       type="password"
                                       placeholder="$adbada@12" onChange={this.passwordChanged}/>
                            </div>
                        </div>


                        <div className="form-group row">
                            <label htmlFor="verify_password" className="col-sm-2 col-form-label">Verify
                                Password</label>
                            <div className="col-sm-10">
                                <input className="form-control wbdv-password-fld"
                                       id="verify_password"
                                       type="password"
                                       placeholder="$adbada@12"
                                       onChange={this.reenteredPasswordChanged}/>
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