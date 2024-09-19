import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-emerald-500 text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-2x1 font-bold">Healthy Lifestyle</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/tracker" className="hover:text-gray-300">
            Tracker
          </Link>
          <Link to="/settings" className="hover:text-gray-300">
            Settings
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
