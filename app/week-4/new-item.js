"use client";
import { useState } from "react";

export default function Counter() {
  const [quantity, setQuantity] = useState(1);

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
      <p className="text-2xl font-semibold text-gray-800 border border-gray-300 rounded-md px-4 py-2 shadow-sm">
        {quantity}
      </p>
      <div className="flex gap-4">
        <button
          onClick={decrement}
          disabled={quantity <= 0}
          className={`px-4 py-2 rounded-md transition duration-200 focus:outline-none focus:ring-2 ${
            quantity <= 0
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-400"
          }`}
        >
          Subtract
        </button>
        <button
          onClick={increment}
          disabled={quantity >= 20}
          className={`px-4 py-2 rounded-md transition duration-200 focus:outline-none focus:ring-2 ${
            quantity >= 20
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:ring-blue-400"
          }`}
        >
          Add
        </button>
      </div>
    </main>
  );
}
