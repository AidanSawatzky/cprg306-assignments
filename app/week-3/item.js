export default function Item( item ) {
    return (
        <section className ="bg-slate-400 p-4 w-1/5 m-4" > 
        <ul>
        <li>Name: {item.name}</li>
        <li>Quantity: {item.quantity} </li>
        <li>Category: {item.category} </li>
        </ul>
        </section>       
    )
}