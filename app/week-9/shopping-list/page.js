"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    if (!item || !item.name) return;

    const cleanedName = item.name
      .split(",")[0]
      .replace(/[\u{1F600}-\u{1F6FF}]/gu, "")
      .trim();

    setSelectedItemName(cleanedName);
  };

  return (
    <main className="flex flex-col gap-[32px] sm:items-center bg-gray-300 min-h-screen">
      <div className="w-full h-12 bg-blue-500">
        <h1 className="text-3xl font-bold text-center">Shopping List</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8 px-4 pt-8">
        <div className="md:w-1/2 flex flex-col items-center pt-4">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="md:w-1/2 flex justify-center pt-4">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
