class ReviewService{

    constructor(){
        //this.URL = "https://moviehub-server.herokuapp.com"
        this.URL = "http://localhost:8081"
    }

    postReview = (reviewComment,movie,user) => {

        const review = {
            reviewComment: reviewComment,
            movie: movie,
            user: user
        }

        const userId = review.user.id;
        const movieId = review.movie.id;
        return fetch( this.URL+"/api/user/"+userId+"/movie/"+movieId+"/reviews",{
            method:'post',
            body: JSON.stringify(review),
            credentials:'include',
            headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            }
        })
            .then((response)=>{
                return response.json()});
    }

    deleteReview = (reviewId) => {

        return fetch(this.URL+"/api/reviews/"+reviewId,{
                         credentials:'include',
                         method:"delete"
                     }

        ).then(
            (response) => {return response.json()}
        )
    }

    updateReview = (review) => {

        const userId = review.user.id;
        const movieId = review.movie.id;
        return fetch(this.URL+"/api/user/"+userId+"/movie/"+movieId+"/reviews",{
            method:'put',
            body: JSON.stringify(review),
            credentials:'include',
            headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            }
        }).then(()=>{
            return
        })
    }

    findUserOfAReview = (reviewId) => {

        return fetch(this.URL+"/api/review/"+reviewId+"/user").then(response => {
            return response.json()
        })
    }

}

export default  ReviewService