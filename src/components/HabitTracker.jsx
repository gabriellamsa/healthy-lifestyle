import React, { useState } from "react";

function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");

  const addHabit = () => {
    if (newHabit.trim() !== "") {
      setHabits([...habits, newHabit]);
      setNewHabit("");
    }
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

      <ul className="list-disc pl-5">
        {habits.map((habit, index) => (
          <li key={index} className="mb-2">
            {habit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HabitTracker;
