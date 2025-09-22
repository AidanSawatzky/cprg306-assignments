export default function Item({ item }) {
    return (
        <section className ="bg-slate-400 p-4 w-1/5 m-4" > 

        <h2 className ="text-2xl font-serif font-bold">{item.name}</h2>
        <p> Buy {item.quantity} in { item.category} </p>
        </section>       
    )
}

