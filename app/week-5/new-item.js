"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const item = {
      name,
      quantity,
      category,
    };

    console.log("Submitted item:", item); // Log to console

    alert(
      `Item submitted:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
    ); // Show alert

    // Reset state to initial values
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <main className="flex flex-col items-center justify-center gap-6 p-6 bg-white rounded-lg shadow-md max-w-sm mx-auto mt-10">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option defaultValue="produce" selected="">
            Produce
          </option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen_foods">Frozen Foods</option>
          <option value="Canned_goods">Canned Goods</option>
          <option value="Dry_goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Others">Others</option>
        </select>
      <div className="flex items-center gap-4 justify-center">
  <button
    type="button"
    onClick={decrement}
    disabled={quantity <= 1}
    className={`px-4 py-2 rounded-md transition duration-200 focus:outline-none focus:ring-2 ${
      quantity <= 1
        ? "bg-gray-400 text-white cursor-not-allowed"
        : "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-400"
    }`}
  >
    -
  </button>
  <p className="text-2xl font-semibold text-gray-800 border border-gray-300 rounded-md px-4 py-2 shadow-sm min-w-[60px] text-center">
    {quantity}
  </p>
  <button
    type="button"
    onClick={increment}
    disabled={quantity >= 20}
    className={`px-4 py-2 rounded-md transition duration-200 focus:outline-none focus:ring-2 ${
      quantity >= 20
        ? "bg-gray-400 text-white cursor-not-allowed"
        : "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:ring-blue-400"
    }`}
  >
    +
  </button>
</div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

