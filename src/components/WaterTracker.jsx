import React, { useState, useEffect } from "react";

function WaterTracker() {
  const [waterIntake, setWaterIntake] = useState(() => {
    // Carregar valor inicial do localStorage
    const storedWater = localStorage.getItem("waterIntake");
    return storedWater ? parseInt(storedWater, 10) : 0; // Retornar 0 se não houver valor
  });

  useEffect(() => {
    localStorage.setItem("waterIntake", waterIntake);
  }, [waterIntake]);

  const addWater = () => {
    setWaterIntake((prev) => prev + 1);
  };

  const resetWater = () => {
    setWaterIntake(0);
  };

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
      <button
        onClick={resetWater}
        className="mt-4 bg-red-400 text-white px-4 py-2 rounded"
      >
        Reset
      </button>
    </div>
  );
}

export default WaterTracker;
