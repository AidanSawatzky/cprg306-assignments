"use client";
import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";  

export default function Page() {
  const { user } = useUserAuth();   
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const loadItems = async () => {
    try {
      if (!user) return; 
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    } catch (error) {
      console.error("Failed to load items:", error);
    }
  };

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  const handleAddItem = async (newItem) => {
    try {
      if (!user) return; 
      const addedItem = await addItem(user.uid, newItem);
      setItems((prevItems) => [...prevItems, addedItem]);
    } catch (error) {
      console.error("Failed to add item:", error);
    }
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
        <h1 className="text-4xl font-bold text-center text-slate-100 tracking-wide">
          Shopping List
        </h1>
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