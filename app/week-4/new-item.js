"use client";
import { useState } from "react";

export default function Counter() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20)
        setQuantity(quantity + 1);
    }

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }
    return (
<main className="flex flex-col items-center justify-center gap-6 p-6 bg-white rounded-lg shadow-md max-w-sm mx-auto mt-10">
  <p className="text-2xl font-semibold text-gray-800 border border-gray-300 rounded-md px-4 py-2 shadow-sm">
  {quantity}
</p>
  <div className="flex gap-4">
    <button
      onClick={decrement}
      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 active:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200"
    >
      Subtract
    </button>
    <button
      onClick={increment}
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
    >
      Add
    </button>
  </div>
</main>
    )
}
