import React, { useState } from "react";

const Settings = () => {
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 transition duration-300">
      <h1 className="text-3xl font-bold mb-6 text-emerald-600">Settings</h1>
      <div className="w-full max-w-md bg-emerald-500 p-6 rounded-lg shadow-md transition duration-300">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="language">
            Select Language:
          </label>
          <select
            id="language"
            value={language}
            onChange={handleLanguageChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="Portuguese">Portuguese</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
