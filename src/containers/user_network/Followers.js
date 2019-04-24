import React from 'react';
import UserService from "../../services/UserService";
import Follower from "../../components/Follower";

class Followers extends React.Component{

    constructor(props){
        super(props)
        this.userService = new UserService()
        this.state = {
            followers: [],
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
                this.userService.findAllFollowers(user.id).then(
                    followers => {
                        this.setState(
                            {
                                followers: followers
                            }
                        )
                    }
                )
            })
    }

    render(){

        return(

            <div className="row mt-3 ml-2 mr-2">

                {
                    this.state.followers.map((follower) => {
                                                   return (<Follower key={parseInt(follower.id)}
                                                                      follower={follower}
                                                   />)
                                               }
                    )
                }

            </div>
        )
    }

}
export default Followers