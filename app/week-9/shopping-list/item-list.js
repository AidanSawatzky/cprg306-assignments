"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <section className="flex flex-col items-center gap-6 p-6">
      <div className="flex gap-4 w-full max-w-md justify-center">
        <button
          onClick={() => setSortBy("name")}
          className={`px-5 py-2.5 rounded-full font-semibold transition duration-200 ease-in-out ${
            sortBy === "name"
              ? "bg-slate-800 text-white shadow-md hover:bg-slate-700"
              : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-5 py-2.5 rounded-full font-semibold transition duration-200 ease-in-out ${
            sortBy === "category"
              ? "bg-slate-800 text-white shadow-md hover:bg-slate-700"
              : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
          }`}
        >
          Sort by Category
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 w-full max-w-5xl">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </div>
    </section>
  );
}
