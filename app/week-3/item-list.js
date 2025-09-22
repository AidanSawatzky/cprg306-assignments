import Item from "./item";
export default function ItemList() {
const item1 = {
    name: "Apples", 
    quantity: 3,
     category: "Fruit"
    };
const item2 = {
    name: "Bread",
    quantity: 1, 
    category: "Grains"
    };
const item3 = {
    name: "Carrots",
    quantity: 5, 
    category: "Vegetables"
    };
const item4 = {
    name: "Chicken", 
    quantity: 2, 
    category: "Protein"
    };
const item5 = {
    name: "Milk", 
    quantity: 1, 
    category: "Dairy"
    };
const item6 = {
    name: "Eggs", 
    quantity: 12, 
    category: "Dairy"
    };
const item7 = {
    name: "Rice", 
    quantity: 1,
    category: "Grains"
    };
const item8 = {
    name: "Broccoli", 
    quantity: 2, 
    category: "Vegetables"
    };
    return (
        <section className= "flex flex-wrap justify-center"> 
        <Item item={item1} />
        <Item item={item2} />
        <Item item={item3} />
        <Item item={item4} />
        <Item item={item5} />
        <Item item={item6} />
        <Item item={item7} />
        <Item item={item8} />
        </section>
    );
}