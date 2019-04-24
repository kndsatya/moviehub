import React from 'react'

const PostReview = ({reviewComment,updateReviewComments,postReview}) =>

    <div className="row mb-2">
        <div className="input-group">
                                                            <textarea className="form-control"
                                                                      rows="2"
                                                                      placeholder="Write your review about the movie"
                                                                      defaultValue={reviewComment}
                                                                      onChange={() => {
                                                                          let rev = document.getElementById(
                                                                              "post-review").value
                                                                          updateReviewComments(
                                                                              rev)
                                                                      }}
                                                                      aria-label="post-review"
                                                                      id="post-review">
                                                            </textarea>
            <div className="input-group-append">
                <button className="btn btn-dark"
                        id="search-button" onClick={
                    () => {
                        document.getElementById(
                            "post-review").value = ""
                        postReview()
                    }
                }
                        type="button">POST
                </button>
            </div>
        </div>
    </div>

export default PostReview