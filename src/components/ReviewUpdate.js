import React from 'react'

const ReviewUpdate = ({updateReview, review, readUpdatedComments}) =>

    <div className="row mb-2">
        <div className="input-group">
        <textarea
            className="form-control"
            rows="2"
            placeholder="Update your review"
            defaultValue={review.reviewComment}
            onChange={() => {
                const updatedComment = document.getElementById(
                    "update-review").value
                readUpdatedComments(
                    updatedComment)
            }}
            aria-label="update-review"
            id="update-review">
        </textarea>

                <div className="input-group-append">
                <button className="btn btn-dark" id="update-button"onClick={() => {
                    updateReview(review)
                }}>
                    UPDATE
                </button>
                </div>


        </div>

        <div>
            <hr/>
        </div>
    </div>

export default ReviewUpdate
