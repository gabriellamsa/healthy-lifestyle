import React from "react";
import HabitTracker from "../components/HabitTracker";
import WaterTracker from "../components/WaterTracker";
import FoodTracker from "../components/FoodTracker";

function Tracker() {
  return (
    <div>
      <HabitTracker />
      <WaterTracker />
      <FoodTracker />
    </div>
  );
}

export default Tracker;
