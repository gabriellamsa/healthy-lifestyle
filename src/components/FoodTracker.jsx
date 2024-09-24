import React, { useState, useEffect } from "react";

function FoodTracker() {
  const [meals, setMeals] = useState(() => {
    const storedMeals = JSON.parse(localStorage.getItem("meals")) || [];
    return storedMeals;
  });
  const [newMeal, setNewMeal] = useState("");
  const [newCalories, setNewCalories] = useState(""); // Novo estado para as calorias
  const [editIndex, setEditIndex] = useState(null);
  const [editMeal, setEditMeal] = useState("");
  const [editCalories, setEditCalories] = useState(""); // Novo estado para as calorias editáveis
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

  const addMeal = () => {
    if (newMeal.trim() === "" || newCalories.trim() === "") {
      setErrorMessage("The fields can't be empty.");
      return;
    }
    const mealData = { name: newMeal, calories: Number(newCalories) }; // Objeto de alimento com calorias
    setMeals((prev) => [...prev, mealData]);
    setNewMeal("");
    setNewCalories(""); // Limpa o campo de calorias
    setErrorMessage("");
    setStatusMessage("Successfully added!");
  };

  const removeMeal = (index) => {
    const updatedMeals = meals.filter((_, i) => i !== index);
    setMeals(updatedMeals);
    setStatusMessage("Successfully removed!");
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditMeal(meals[index].name);
    setEditCalories(meals[index].calories); // Captura as calorias do alimento editado
  };

  const saveEdit = () => {
    if (editMeal.trim() === "" || editCalories.trim() === "") {
      setErrorMessage("The edit fields cannot be empty.");
      return;
    }
    const updatedMeals = [...meals];
    updatedMeals[editIndex] = {
      name: editMeal,
      calories: Number(editCalories),
    }; // Atualiza o alimento com nome e calorias
    setMeals(updatedMeals);
    setEditIndex(null);
    setEditMeal("");
    setEditCalories(""); // Limpa o campo de calorias ao salvar
    setErrorMessage("");
    setStatusMessage("Successfully edited!");
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
        <input
          type="number"
          value={newCalories}
          onChange={(e) => setNewCalories(e.target.value)} // Atualiza o estado de calorias
          placeholder="Enter calories"
          className="border border-gray-300 p-2 rounded-l w-full"
        />
        <button
          onClick={addMeal}
          className="bg-emerald-500 text-white px-4 py-2 rounded-r"
        >
          Add Meal
        </button>
      </div>

      {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}

      {statusMessage && (
        <p className="text-emerald-500 text-center mb-4">{statusMessage}</p>
      )}

      {meals.length === 0 ? (
        <p className="text-gray-500">Your meals are empty.</p>
      ) : (
        <ul className="list-disc pl-5">
          {meals.map((meal, index) => (
            <li key={index} className="mb-2">
              <div className="flex justify-between">
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={editMeal}
                      onChange={(e) => setEditMeal(e.target.value)}
                      className="border border-gray-300 p-2 rounded"
                    />
                    <input
                      type="number"
                      value={editCalories}
                      onChange={(e) => setEditCalories(e.target.value)} // Atualiza o estado de calorias ao editar
                      className="border border-gray-300 p-2 rounded ml-2"
                    />
                    <button
                      onClick={saveEdit}
                      className="text-emerald-500 ml-4"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <span>
                      {meal.name} - {meal.calories} calories
                    </span>{" "}
                    {/* Exibe o nome e as calorias do alimento */}
                    <div>
                      <button
                        onClick={() => startEditing(index)}
                        className="text-emerald-500 mr-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => removeMeal(index)}
                        className="text-red-400"
                      >
                        x
                      </button>
                    </div>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FoodTracker;
