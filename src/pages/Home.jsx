import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-emerald-600 mb-8">
        Healthy Lifestyle Tracker
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl">
        Welcome to your healthy lifestyle tracker! This app helps you keep track
        of your healthy habits, water intake, and meals to ensure you're staying
        on top of your wellness goals.
      </p>
      <div className="mt-10">
        <a
          href="/tracker"
          className="bg-emerald-500 text-white px-6 py-3 rounded-lg shadow hover:bg-emerald-800 transition duration-300"
        >
          Start Tracking
        </a>
      </div>
    </div>
  );
}

export default HomePage;
