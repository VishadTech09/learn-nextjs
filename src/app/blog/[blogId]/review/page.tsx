export default function Review({params}:{
    params:{
        blogId:String
    }
}){
    return (
        <h1>Blog Review for {params.blogId}</h1>
    )
}