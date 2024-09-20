import React, { useState, useEffect } from "react";

function HabitTracker() {
  const [habits, setHabits] = useState(() => {
    const storedHabits = JSON.parse(localStorage.getItem("habits")) || [];
    return storedHabits;
  });
  const [newHabit, setNewHabit] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editHabit, setEditHabit] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = () => {
    if (newHabit.trim() === "") {
      setErrorMessage("The field can't be empty.");
      return;
    }
    setHabits((prev) => [...prev, newHabit]);
    setNewHabit("");
    setErrorMessage("");
    setStatusMessage("Successfully added!");
  };

  const removeHabit = (index) => {
    const updatedHabits = habits.filter((_, i) => i !== index);
    setHabits(updatedHabits);
    setStatusMessage("Successfully removed!");
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditHabit(habits[index]);
  };

  const saveEdit = () => {
    if (editHabit.trim() === "") {
      setErrorMessage("The edit field cannot be empty.");
      return;
    }
    const updatedHabits = [...habits];
    updatedHabits[editIndex] = editHabit;
    setHabits(updatedHabits);
    setEditIndex(null);
    setEditHabit("");
    setErrorMessage("");
    setStatusMessage("Successfully edited!");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
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

      {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}

      {statusMessage && (
        <p className="text-emerald-500 text-center mb-4">{statusMessage}</p>
      )}

      {habits.length === 0 ? (
        <p className="text-gray-500">Your habits are empty.</p>
      ) : (
        <ul className="list-disc pl-5">
          {habits.map((habit, index) => (
            <li key={index} className="mb-2">
              <div className="flex justify-between">
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={editHabit}
                      onChange={(e) => setEditHabit(e.target.value)}
                      className="border border-gray-300 p-2 rounded"
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
                    <span>{habit}</span>
                    <div>
                      <button
                        onClick={() => startEditing(index)}
                        className="text-emerald-500 mr-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => removeHabit(index)}
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

export default HabitTracker;
