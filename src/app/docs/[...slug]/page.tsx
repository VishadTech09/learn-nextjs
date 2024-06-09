export default function DocumentFeatureConcept({params}:{
    params:{
        slug:String[]
    }
}) {

    console.log(params.slug[0], params.slug[1])
    return (
        <>
            <h1>This is common page for displaying document feature as well concept</h1>
            <p>It is mainly use for documentation type of concept {params.slug.length}</p>
        </>
    )
}