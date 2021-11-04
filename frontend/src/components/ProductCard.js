export default function ProductCard({product: {price, title}}) {

    return (
        <>
            <div>IMAGE</div>
            <p>{title}</p>
            {title ? <p>Verfügbar</p> : <p>derzeit vermietet</p>}
            <p>{price}</p>
        </>
    )

}