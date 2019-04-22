class ReviewService{

    constructor(){}

    postReview = (reviewComment,movie,user) => {
        const review = {
            reviewComment: reviewComment,
            movie: movie,
            user: user
        }

        return Promise.resolve({})
    }

    deleteReview = (reviewId) => {

        return Promise.resolve({})
    }

    updateReview = (review) => {
        console.log("review that needs to get update", review);
        return Promise.resolve({})
    }

}

export default  ReviewService