import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SolutionDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="relative">
      <button
        onClick={toggleDropdown}
        className="hover:gradient-text cursor-pointer"
      >
        Solutions
      </button>
      {isOpen && (
        <ul className="absolute top-full left-0 mt-4 w-48 bg-white shadow-lg rounded-lg z-10">
          <li>
            <Link to="/solutions/data-strategy" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              Data Strategy & Engineering
            </Link>
          </li>
          <li>
            <Link to="/solutions/cloud-transformation" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              Cloud Transformation
            </Link>
          </li>
          <li>
            <Link to="/solutions/work-culture" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              Work Culture
            </Link>
          </li>
          <li>
            <Link to="/solutions/data-governance" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              Data Governance
            </Link>
          </li>
          <li>
            <Link to="/solutions/ai" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              Artificial Intelligence
            </Link>
          </li>
          <li>
            <Link to="/solutions/bi-analytics" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              Business Intelligence & Analytics
            </Link>
          </li>
          <li>
            <Link to="/solutions/industrial-iot" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              Industrial IOT
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
}
