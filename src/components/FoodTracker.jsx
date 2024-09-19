import React, { useState, useEffect } from "react";

function FoodTracker() {
  const [meals, setMeals] = useState(() => {
    const storedMeals = localStorage.getItem("meals");
    return storedMeals ? JSON.parse(storedMeals) : [];
  });
  const [newMeal, setNewMeal] = useState("");

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

  const addMeal = () => {
    if (newMeal.trim()) {
      setMeals([...meals, newMeal]);
      setNewMeal("");
    }
  };

  const removeMeal = (index) => {
    const updatedMeals = meals.filter((_, i) => i !== index);
    setMeals(updatedMeals);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Track Your Meals</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={newMeal}
          onChange={(e) => setNewMeal(e.target.value)}
          placeholder="Enter a meal"
          className="border border-gray-300 p-2 rounded-l w-full"
        />
        <button
          onClick={addMeal}
          className="bg-emerald-500 text-white px-4 py-2 rounded-r"
        >
          Add Meal
        </button>
      </div>
      {meals.length > 0 ? (
        <ul className="list-disc pl-5">
          {meals.map((meal, index) => (
            <li key={index} className="mb-2 flex justify-between">
              {meal}
              <button
                onClick={() => removeMeal(index)}
                className="text-red-400 ml-4"
              >
                x
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No meals added yet.</p>
      )}
    </div>
  );
}

export default FoodTracker;
