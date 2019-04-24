class UserService{


    constructor(){
         //this.URL = "https://moviehub-server.herokuapp.com"
        this.URL = "http://localhost:8081"
    }

    register=(user)=>{
        console.log(user)
        return fetch( this.URL+"/api/register",{
            method:'post',
            body: JSON.stringify(user),
            credentials:'include',
            headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            }
        })
            .then((response)=>{
                return response.json()});

    }

    didLoginUserFollow = (loginId,profileId) => {
        return fetch(this.URL+"/api/users/"+loginId+"/follow/users/"+profileId+"/check",{
            credentials:'include'
        })
            .then(response=>{
                return response.json()});
    }


    unfollow = (loginId,profileId) => {

        return fetch(this.URL+"/api/users/"+loginId+"/unfollow/users/"+profileId,{
                         credentials:'include',
                         method:"delete"
                     }

        ).then(
            response => {
                return response}
        );
    }



    follow = (loginId,profileId) => {

        return fetch(this.URL+"/api/users/"+loginId+"/follow/users/"+profileId,{
            method:'post',
            credentials:'include',
            headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            }
        })
            .then((response)=>{
                return response});
    }





    findAllUsers=()=>{
        return fetch(this.URL+"/api/users",{
            credentials:'include'
        })
            .then(response=>{
                return response.json()});
    }

    loggedinUser = ()=>{

        return fetch(this.URL+"/api/profile",{
            credentials:'include'
        })
            .then(response=>{
                return response.json()
            });

    }

    findAllReviews = (userId) => {
          return fetch(
              this.URL+"/api/user/"+userId+"/reviews",{
                  credentials:'include'
              }
          ).then(
              response => response.json()
          )
    }


    findAllLikedMovies = (userId) =>{
          return fetch(
              this.URL+"/api/user/"+userId+"/likedMovies",{
                  credentials:'include'
              }
          ).then(
              response => response.json()
          )
    }

    findAllReviewedMovies = (userId) => {
        return fetch(
            this.URL+"/api/user/"+userId+"/reviewedMovies",{
                credentials:'include'
            }
        ).then(
            response => {

                return response.json()}
        )
    }

    findUserById = (userId) => {

        return fetch(
            this.URL+"/api/users/"+userId,{
                credentials:"include"
            }
        ).then(
            response => response.json()
        )
    }

    updateUser=(user)=>{

        return fetch(this.URL+"/api/update",{
            method:'put',
            body: JSON.stringify(user),
            credentials:'include',
            headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            }
        })
            .then((response)=>{
                return response.json()});
    }

    logout=()=>{
        return fetch(this.URL+"/api/logout",{
            credentials:'include'
        })
    }

    loginUser = (user) => {

        return fetch(this.URL+"/api/login",{
            method:'post',
            body: JSON.stringify(user),
            credentials:'include',
            headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            }
        })
            .then((response)=>{
                return response.json()});
    }
}

export default UserService;