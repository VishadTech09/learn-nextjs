export default function BlogDetails({params}:{
    params :{
        blogId:String
    }
}){
    return (
        <h1>Blog details for {params.blogId}</h1>
    )
}