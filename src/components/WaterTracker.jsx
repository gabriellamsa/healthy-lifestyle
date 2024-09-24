import React, { useState, useEffect } from "react";

function WaterTracker() {
  const [waterIntake, setWaterIntake] = useState(() => {
    const storedWater = localStorage.getItem("waterIntake");
    return storedWater ? parseInt(storedWater, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("waterIntake", waterIntake);
  }, [waterIntake]);

  const addWater = () => setWaterIntake((prev) => prev + 1);

  const addWater250ml = () => setWaterIntake((prev) => prev + 250);
  const addWater500ml = () => setWaterIntake((prev) => prev + 500);

  const resetWater = () => setWaterIntake(0);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Track Your Water Intake</h2>
      <div className="flex items-center justify-between">
        <p className="text-lg">
          You have drunk {waterIntake}ml of water today.
        </p>
      </div>

      <div className="flex mt-4">
        <button
          onClick={addWater250ml}
          className="bg-emerald-500 text-white px-4 py-2 rounded mr-2"
        >
          Add 250ml
        </button>
        <button
          onClick={addWater500ml}
          className="bg-emerald-500 text-white px-4 py-2 rounded"
        >
          Add 500ml
        </button>
      </div>

      {waterIntake > 0 && (
        <button onClick={resetWater} className="text-red-400 ml-4">
          ↻
        </button>
      )}
    </div>
  );
}

export default WaterTracker;
