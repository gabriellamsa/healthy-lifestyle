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

  const resetWater = () => setWaterIntake(0);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Track Your Water Intake</h2>
      <div className="flex items-center justify-between">
        <p className="text-lg">
          You have drunk {waterIntake} glasses of water today.
        </p>
        <button
          onClick={addWater}
          className="bg-emerald-500 text-white px-4 py-2 rounded"
        >
          Add Glass
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
