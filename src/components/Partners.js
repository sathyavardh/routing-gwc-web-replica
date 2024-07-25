import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PartnersDropdown() {
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
        Partners
      </button>
      {isOpen && (
        <ul className="absolute top-full left-0 mt-4 w-48 bg-white shadow-lg rounded-lg z-10">
          <li>
            <Link to="/partners/domo" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              Domo
            </Link>
          </li>
          <li>
            <Link to="/partners/gcp" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              GCP
            </Link>
          </li>
          <li>
            <Link to="/partners/salesforce" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              Salesforce
            </Link>
          </li>
          <li>
            <Link to="/partners/fivetran" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              Fivetran
            </Link>
          </li>
          <li>
            <Link to="/partners/dbt" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              DBT
            </Link>
          </li>
          <li>
            <Link to="/partners/boomi" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              Boomi
            </Link>
          </li>
          <li>
            <Link to="/partners/looker" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              Looker
            </Link>
          </li>
          <li>
            <Link to="/partners/tableau" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              Tableau
            </Link>
          </li>
          <li>
            <Link to="/partners/alation" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:gradient-text">
              Alation
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
}
