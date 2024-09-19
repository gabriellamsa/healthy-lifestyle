import React, { useState, useEffect } from "react";

function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedHabits = localStorage.getItem("habits");
    if (storedHabits) {
      setHabits(JSON.parse(storedHabits));
    }
  }, []);

  useEffect(() => {
    if (habits.length > 0) {
      localStorage.setItem("habits", JSON.stringify(habits));
    } else {
      localStorage.removeItem("habits");
    }
  }, [habits]);

  const addHabit = () => {
    if (newHabit.trim() === "") {
      setError("The habit's name can't be empty.");
      return;
    }
    setHabits([...habits, newHabit]);
    setNewHabit("");
    setError("");
  };

  const removeHabit = (index) => {
    const updatedHabits = habits.filter((_, i) => i !== index);
    setHabits(updatedHabits);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Track Your Habits</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Enter a habit"
          className="border border-gray-300 p-2 rounded-l w-full"
        />
        <button
          onClick={addHabit}
          className="bg-emerald-500 text-white px-4 py-2 rounded-r"
        >
          Add Habit
        </button>
      </div>
      {error && <p className="text-red-400">{error}</p>}

      {habits.length === 0 ? (
        <p className="text-gray-500">No habits added yet.</p>
      ) : (
        <ul className="list-disc pl-5">
          {habits.map((habit, index) => (
            <li key={index} className="mb-2">
              {habit}
              <button
                onClick={() => removeHabit(index)}
                className="text-red-400 ml-4"
              >
                x
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HabitTracker;
