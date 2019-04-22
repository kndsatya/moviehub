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

    findAllLikedMovies = () =>{
        return Promise.resolve([

                                   {
                                       "id": "tt4442758",
                                       "title":"Temper",
                                       "poster_path":"/vRfSEFM9waphZKoa3ALTZCUYb2F.jpg",
                                       "overview":"Daya, a corrupt police officer, finds his life changing when he takes on a case of gang rape."
                                   },
                                   {
                                       "id": "tt8361196",
                                       "title":"Vinaya Vidheya Rama",
                                       "poster_path":"/oN4LAx5mRaLINaovFv2vo7Tfdsx.jpg",
                                       "overview":"Ram is one among the five orphaned boys in Visakhapatnam, adopted by a doctor who ensures them a roof to live under, with dignity. Ram goes to any extent to protect his family and he's a handful for the baddie to handle in a time of crisis. How does Ram protect his family when they need him the most?"
                                   }
                               ])
    }

    findAllReviewedMovies = () => {
        return Promise.resolve([

                                   {
                                       "id": "tt4442758",
                                       "title":"Temper",
                                       "poster_path":"/vRfSEFM9waphZKoa3ALTZCUYb2F.jpg",
                                       "overview":"Daya, a corrupt police officer, finds his life changing when he takes on a case of gang rape."
                                   },
                                   {
                                       "id": "tt8361196",
                                       "title":"Vinaya Vidheya Rama",
                                       "poster_path":"/oN4LAx5mRaLINaovFv2vo7Tfdsx.jpg",
                                       "overview":"Ram is one among the five orphaned boys in Visakhapatnam, adopted by a doctor who ensures them a roof to live under, with dignity. Ram goes to any extent to protect his family and he's a handful for the baddie to handle in a time of crisis. How does Ram protect his family when they need him the most?"
                                   }
                               ])
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