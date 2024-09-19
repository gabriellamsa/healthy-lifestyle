import React, { useState, useEffect } from "react";

function FoodTracker() {
  const [meals, setMeals] = useState([]);
  const [newMeal, setNewMeal] = useState("");

  useEffect(() => {
    const storedMeals = JSON.parse(localStorage.getItem("meals")) || [];
    setMeals(storedMeals);
  }, []);

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

  const addMeal = () => {
    if (newMeal.trim() !== "") {
      setMeals([...meals, newMeal]);
      setNewMeal("");
    }
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
          className="border border-gray-300 p-2 rounded-1 w-full"
        />
        <button
          onClick={addMeal}
          className="bg-emerald-500 text-white px-4 py-2 rounded-r0"
        >
          Add Meal
        </button>
      </div>

      <ul className="list-disc pl-5">
        {meals.map((meal, index) => (
          <li key={index} className="mb-2">
            {meal}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodTracker;
