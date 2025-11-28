"use client";
import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

async function fetchMealDetails(mealId) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );
  const data = await response.json();
  return data.meals ? data.meals[0] : null;
}

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const [selectedMeal, setSelectedMeal] = useState(null);

  const loadMealIdeas = async () => {
    const fetchMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchMeals);
    setHasSearched(true);
    setSelectedMeal(null);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    } else {
      setMeals([]);
      setHasSearched(false);
    }
  }, [ingredient]);

  const handleMealClick = async (mealId) => {
    const mealDetails = await fetchMealDetails(mealId);
    setSelectedMeal(mealDetails);
  };

  return (
    <div className="bg-slate-800 text-white rounded-2xl shadow-xl p-6 w-full max-w-md border border-slate-700">
      <h2 className="text-2xl font-semibold mb-4 text-slate-100 tracking-wide">
        Meal Ideas
      </h2>

      {!ingredient ? (
        <p className="text-slate-400 italic">Choose an item to see ideas.</p>
      ) : hasSearched && meals.length === 0 ? (
        <p className="text-red-400 italic">No recipes found.</p>
      ) : (
<ul className="flex flex-col gap-4">
  {meals.map((meal) => (
    <li
      key={meal.idMeal}
      onClick={() => handleMealClick(meal.idMeal)}
      className="bg-slate-700 border border-slate-600 rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <p className="text-lg font-medium text-slate-100">
        {meal.strMeal}
      </p>

      {/* If this meal is the selected one, show its ingredients */}
      {selectedMeal && selectedMeal.idMeal === meal.idMeal && (
        <div className="mt-4">
          <h4 className="text-slate-200 font-semibold mb-2">Ingredients:</h4>
          <ul className="list-disc list-inside text-slate-300">
            {Array.from({ length: 20 }).map((_, i) => {
              const ingredient = selectedMeal[`strIngredient${i + 1}`];
              const measure = selectedMeal[`strMeasure${i + 1}`];
              return (
                ingredient &&
                ingredient.trim() !== "" && (
                  <li key={i}>
                    {ingredient} {measure && `(${measure})`}
                  </li>
                )
              );
            })}
          </ul>
        </div>
      )}
    </li>
  ))}
</ul>

      )}
 


    </div>
  );
}

export default MealIdeas;
