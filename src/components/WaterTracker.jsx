import React, { useState, useEffect } from "react";

function WaterTracker() {
  const [waterIntake, setWaterIntake] = useState(0);

  useEffect(() => {
    const storedWater = localStorage.getItem("waterIntake");
    if (storedWater) {
      setWaterIntake(parseInt(storedWater));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("waterIntake", waterIntake);
  }, [waterIntake]);

  const addWater = () => {
    setWaterIntake(waterIntake + 1);
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
          Add Glasses
        </button>
      </div>
    </div>
  );
}

export default WaterTracker;
