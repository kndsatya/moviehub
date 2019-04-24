import React from 'react';
import UserService from "../../services/UserService";
import FollowingUser from "../../components/FollowingUser";


class Following extends React.Component{

    constructor(props){
        super(props)
        this.userService = new UserService()
        this.state = {
            following: [],
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

    componentDidMount() {

        this.userService.loggedinUser().then(
            user => {

                if (user.id === null) {
                    this.props.history.push("/")
                }
                this.setState(
                    {
                        loginUser: user
                    }
                )
                this.userService.findAllFollowing(user.id).then(
                    following => {
                        this.setState(
                            {
                                following: following
                            }
                        )
                    }
                )
            })
    }

    unfollow=(profileId)=>{
        this.userService.unfollow(this.state.loginUser.id,profileId)
            .then((response)=>{
                if(response){

                    this.userService.findAllFollowing(this.state.loginUser.id).then(
                        following => {
                            this.setState(
                                {
                                    following: following
                                }
                            )
                        }
                    )

                }else{
                    alert("Unable to unfollow");
                }
            })
    }

    render(){

        return(

            <div className="row mt-3 ml-2 mr-2">

                {
                    this.state.following.map((following) => {
                                                 return (<FollowingUser key={parseInt(following.id)}
                                                                   followingUser={following} unfollow={this.unfollow}
                                                 />)
                                             }
                    )
                }

            </div>
        )
    }

}
export default Following