"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

    return (
      <main className="flex flex-col gap-[32px] sm:items-center bg-gray-300 min-h-screen">
        <div className="w-full h-12 bg-blue-500">
          <h1 className="text-3xl font-bold text-center">
            Shopping List
          </h1>
        </div>
        <div>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
        </div>
      </main>
    );
}