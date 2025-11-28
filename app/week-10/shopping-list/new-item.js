"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      id: Math.random().toString(36).slice(2, 9),
      name,
      quantity,
      category,
    };
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <main className="flex flex-col items-center justify-start gap-8 p-6 bg-gradient-to-br from-slate-700 to-slate-800 text-white rounded-2xl shadow-xl max-w-md w-full min-h-[460px] backdrop-blur-md border border-slate-600">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        {/* Item Name */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item Name"
          className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white placeholder-slate-400 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Category Select */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="produce">Produce</option>
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

        {/* Quantity Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity <= 1}
            className={`px-4 py-2 rounded-full text-xl font-bold transition ${
              quantity <= 1
                ? "bg-slate-500 text-slate-300 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700 active:bg-red-800 text-white"
            }`}
          >
            −
          </button>
          <p className="text-2xl font-semibold bg-slate-900 border border-slate-600 rounded-lg px-6 py-2 shadow text-center min-w-[60px]">
            {quantity}
          </p>
          <button
            type="button"
            onClick={increment}
            disabled={quantity >= 20}
            className={`px-4 py-2 rounded-full text-xl font-bold transition ${
              quantity >= 20
                ? "bg-slate-500 text-slate-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white"
            }`}
          >
            +
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold py-3 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Add Item
        </button>
      </form>
    </main>
  );
}