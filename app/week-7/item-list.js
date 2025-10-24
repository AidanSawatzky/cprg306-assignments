"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
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
  <section className="flex flex-col items-center gap-4 p-1">
    <div className="flex gap-2">
      <button
        onClick={() => setSortBy("name")}
        className={`px-4 py-2 rounded transition ${
          sortBy === "name"
            ? "bg-gray-700 text-white hover:bg-gray-600"
            : "bg-white text-black shadow"
        }`}
      >
        Sort by Name
      </button>
      <button
        onClick={() => setSortBy("category")}
        className={`px-4 py-2 rounded transition ${
          sortBy === "category"
            ? "bg-gray-700 text-white hover:bg-gray-600"
            : "bg-white text-black shadow"
        }`}
      >
        Sort by Category
      </button>
    </div>

    <div className="flex flex-wrap justify-center gap-4">
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  </section>
);

}
