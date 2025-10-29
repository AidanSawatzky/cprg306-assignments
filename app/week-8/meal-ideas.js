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
<div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
  <h2 className="text-2xl font-bold mb-4 text-blue-600">Meal Ideas</h2>

  {!ingredient ? (
    <p className="text-gray-500 italic">Choose an item to see ideas.</p>
  ) : hasSearched && meals.length === 0 ? (
    <p className="text-red-500 italic">No recipes found.</p>
  ) : (
    <ul className="flex flex-col gap-4">
      {meals.map((meal) => (
        <li
          key={meal.idMeal}
          className="bg-gray-100 border border-gray-300 rounded-lg p-4 shadow-sm"
        >
          <p className="text-lg font-medium text-gray-800">{meal.strMeal}</p>
        </li>
      ))}
    </ul>
  )}
</div>
  );
}

export default MealIdeas;