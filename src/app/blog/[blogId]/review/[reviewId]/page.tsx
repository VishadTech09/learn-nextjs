export default function BlogReviewDetails({params}:{
    params: {
        blogId:String,
        reviewId:String
    }
}){
    return(
        <h1>
            This is review for Blog {params.blogId} and review comment {params.reviewId}
        </h1>
    )
}