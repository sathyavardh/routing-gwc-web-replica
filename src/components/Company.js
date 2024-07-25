import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CompanyDropdown() {
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
        Company
      </button>
      {isOpen && (
        <ul className="absolute top-full left-0 mt-4 w-48 bg-white shadow-lg rounded-lg z-10">
          <li>
            <Link to="/company/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/company/vision-mission" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              Vision & Mission
            </Link>
          </li>
          <li>
            <Link to="/company/work-culture" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              Work Culture
            </Link>
          </li>
          <li>
            <Link to="/company/leadership" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              Leadership
            </Link>
          </li>
          <li>
            <Link to="/company/recognition" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              Recognition
            </Link>
          </li>
          <li>
            <Link to="/company/work-from-home" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              Work from Hometown
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
}
