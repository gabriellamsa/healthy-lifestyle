import React, { useState, useEffect } from "react";
import FoodTracker from "./FoodTracker";
import HabitTracker from "./HabitTracker";
import WaterTracker from "./WaterTracker";

function TabsTracker() {
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeTab") || "habit";
  });

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <div className="max-w-md mx-auto mt-6">
      <div className="flex border-b-2 border-emerald-500">
        <button
          className={`w-1/3 py-2 transition-colors duration-300 ${
            activeTab === "habit"
              ? "text-emerald-600 border-b-4 border-emerald-600"
              : "text-gray-600 hover:text-emerald-500"
          }`}
          onClick={() => setActiveTab("habit")}
        >
          Habits
        </button>
        <button
          className={`w-1/3 py-2 transition-colors duration-300 ${
            activeTab === "water"
              ? "text-emerald-600 border-b-4 border-emerald-600"
              : "text-gray-600 hover:text-emerald-500"
          }`}
          onClick={() => setActiveTab("water")}
        >
          Water
        </button>
        <button
          className={`w-1/3 py-2 transition-colors duration-300 ${
            activeTab === "food"
              ? "text-emerald-600 border-b-4 border-emerald-600"
              : "text-gray-600 hover:text-emerald-500"
          }`}
          onClick={() => setActiveTab("food")}
        >
          Food
        </button>
      </div>

      <div className="mt-4 transition-opacity duration-500">
        {activeTab === "habit" && <HabitTracker />}
        {activeTab === "water" && <WaterTracker />}
        {activeTab === "food" && <FoodTracker />}
      </div>
    </div>
  );
}

export default TabsTracker;
