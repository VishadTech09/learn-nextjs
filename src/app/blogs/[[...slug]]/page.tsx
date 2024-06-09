export default function DocumentFeatureConcept({params}:{
    params:{
        slug:String[]
    }
}) {

    
    return (
        <>
            <h1>This is common page for displaying blogs - {params.slug} </h1>
        </>
    )
}