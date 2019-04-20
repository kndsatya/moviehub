import users from './users.json';
class UserService{

    constructor(){

    }

    register=(user)=>{
            user.id = Math.random()
            users.push(user);
            return Promise.resolve(user);
    }

    findAllUsers=()=>{
        return fetch("https://fast-mesa-67485.herokuapp.com/api/users",{
            credentials:'include'
        })
            .then(response=>{
                return response.json()});
    }

    loggedinUser = ()=>{

        return Promise.resolve(users[0]);

    }

    updateUser=(user)=>{
        return fetch("https://fast-mesa-67485.herokuapp.com/api/update",{
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
        return fetch("https://fast-mesa-67485.herokuapp.com/api/logout",{
            credentials:'include'
        })
    }

    loginUser = (user) => {

        return fetch("https://fast-mesa-67485.herokuapp.com/api/login",{
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