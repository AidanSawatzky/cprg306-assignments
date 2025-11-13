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
<main className="flex flex-col gap-10 sm:items-center bg-slate-900 text-white min-h-screen px-4 py-6">
  <div className="w-full bg-slate-800 py-4 shadow-md rounded-xl">
    <h1 className="text-4xl font-bold text-center text-slate-100 tracking-wide">Shopping List</h1>
  </div>

  <div className="flex flex-col md:flex-row justify-center items-start gap-10 w-full max-w-6xl pt-6">
    <div className="md:w-1/2 flex flex-col items-center gap-8">
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} onItemSelect={handleItemSelect} />
    </div>

    <div className="md:w-1/4 flex justify-center">
      <MealIdeas ingredient={selectedItemName} />
    </div>
  </div>
</main>
  );
}
