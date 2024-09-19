import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tracker from "./pages/Tracker";
import Settings from "./pages/Settings";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
