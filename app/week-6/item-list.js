"use client";
import { useState } from "react";
import Item from "./item";
import itemData from "./items.json";

export default function ItemList() {
  const [items] = useState(itemData);
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    } else if (sortBy === "category") {
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      return 0;
    }
    return 0;
  });

  return (
    <section className="flex flex-wrap justify-center">
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}

      <div className="flex justify-center gap-4 mb-6">
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
    </section>
  );
}
