'use client';
import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const loadMealIdeas = async () => {
    const fetchMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchMeals);
    setHasSearched(true);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    } else {
      setMeals([]);
      setHasSearched(false);
    }
  }, [ingredient]);

  return (
<div className="bg-slate-800 text-white rounded-2xl shadow-xl p-6 w-full max-w-md border border-slate-700">
  <h2 className="text-2xl font-semibold mb-4 text-slate-100 tracking-wide">Meal Ideas</h2>

  {!ingredient ? (
    <p className="text-slate-400 italic">Choose an item to see ideas.</p>
  ) : hasSearched && meals.length === 0 ? (
    <p className="text-red-400 italic">No recipes found.</p>
  ) : (
    <ul className="flex flex-col gap-4">
      {meals.map((meal) => (
        <li
          key={meal.idMeal}
          className="bg-slate-700 border border-slate-600 rounded-xl p-4 shadow-sm hover:shadow-md transition"
        >
          <p className="text-lg font-medium text-slate-100">{meal.strMeal}</p>
        </li>
      ))}
    </ul>
  )}
</div>

  );
}

export default MealIdeas;