import Item from "./item";
export default function ItemList() {
const item1 = {
    name: "Milk", 
    quantity: 4,
     category: "Dairy"
    };
const item2 = {
    name: "Bread",
    quantity: 2, 
    category: "Grains"
    };
const item3 = {
    name: "Eggs",
    quantity: 12, 
    category: "Dairy"
    };
const item4 = {
    name: "Bananas", 
    quantity: 6, 
    category: "Produce"
    };
const item5 = {
    name: "Broccoli", 
    quantity: 3, 
    category: "Produce"
    };
const item6 = {
    name: "Chicken Breasts", 
    quantity: 1, 
    category: "Meat"
    };
const item7 = {
    name: "Pasta Sauce", 
    quantity: 3,
    category: "Grains"
    };
const item8 = {
    name: "Spaghetti", 
    quantity: 2, 
    category: "Dry Goods"
    };
const item9 = {
    name: "Toilet Paper", 
    quantity: 1, 
    category: "Household"
    };
const item10 = {
    name: "Paper Towels", 
    quantity: 1, 
    category: "Household"
    };
const item11 = {
    name: "Dish Soap", 
    quantity: 1,
    category: "Household"
    };
const item12 = {
    name: "Hand Soap", 
    quantity: 4, 
    category: "Household"
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
        <Item item={item9} />
        <Item item={item10} />
        <Item item={item11} />
        <Item item={item12} />
        </section>
    );
}