import React from 'react'

const Review = ({review,editReview,deleteReview,loginUser,props}) => <div>


    <div className="row">
        <div className="col-sm-11 moviehub-button" role="btn"
             onClick={()=>props.history.push("/profile/"+review.user.id)}>
            <div className="col-sm-11">
                <h5>{review.user.username}</h5>
            </div>
        </div>

        <div className="col-sm-1">
            {review.user.id === loginUser.id?
            <div className="row">
                <div>

                    <a role="btn"
                       onClick={() => editReview(
                           review.id)}>
                        <i className="fa fa-pencil fa-2x float-right"
                           aria-hidden="true"></i>
                    </a>
                </div>


                <div>
                    <a role="btn"
                       onClick={() => deleteReview(
                           review.id)}>
                        <i className="fa fa-trash fa-2x float-right"
                           aria-hidden="true"></i></a>
                </div>
            </div>:<div></div>}
        </div>

    </div>
    <div className="mt-2 ml-4">
        <p>{review.reviewComments}</p>
    </div>
    <div>
        <hr/>
    </div>
</div>

export default Review