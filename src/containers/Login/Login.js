import React from 'react'
import "./Login.css"
import UserService from "../../services/UserService";

class Login extends React.Component {


    constructor(props){
        super(props)
        this.userService = new UserService()
        this.state={
            username : "",
            password : ""
        }
    }

    componentDidMount(){
        this.userService.loggedinUser().then(
            (user)=>{
                if(user.id!== null){
                    this.props.history.push("/profile")
                }
            }
        )
    }

    onUserNameChange = (event)=>{
        this.state.username = event.target.value
    }

    onPasswordChange = (event)=>{
        this.state.password = event.target.value
    }

    login = (event)=>{
        event.preventDefault()
        let user={
            username:this.state.username,
            password: this.state.password
        }
        this.userService.loginUser(user).then(

            (user)=>{
                if(user.username!==null){
                    this.props.updateLoginUser(user)
                    return this.props.history.push("/home")}
                alert("Invalid Credentials")
            }

        )
    }



    render() {
        return (<div>
            <div className="container moviehub-text">
                <h1>Sign In</h1>
                <form>

                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="username"
                                   placeholder="Satya"
                                   onChange={this.onUserNameChange}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password"
                               className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-password-fld"
                                   id="password"
                                   type="password"
                                   placeholder="$adbada@12"
                                   onChange={this.onPasswordChange}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-success btn-block active"
                                    onClick={this.login}>Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>)
    }
}

export default Login;