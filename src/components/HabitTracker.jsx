import React, { useState, useEffect } from "react";

function HabitTracker() {
  const [habits, setHabits] = useState(() => {
    const storedHabits = localStorage.getItem("habits");
    return storedHabits ? JSON.parse(storedHabits) : [];
  });
  const [newHabit, setNewHabit] = useState("");

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = () => {
    if (newHabit.trim()) {
      setHabits([...habits, newHabit]);
      setNewHabit("");
    }
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
      {habits.length > 0 ? (
        <ul className="list-disc pl-5">
          {habits.map((habit, index) => (
            <li key={index} className="mb-2 flex justify-between">
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
      ) : (
        <p className="text-gray-500">No habits added yet.</p>
      )}
    </div>
  );
}

export default HabitTracker;
