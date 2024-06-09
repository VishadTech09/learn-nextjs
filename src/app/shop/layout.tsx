
export const metadata = {
    title:'Shopping page'
}
export default function ShopLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            <h1>Layout for Shopping Page</h1>
            {children}
        </>
    )
}