import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  // Reference to the dropdown and button to detect clicks outside
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Handle search input changes
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Categories data
  const categories = [
    { name: "1-star", displayName: "1-Star Room" },
    { name: "2-star", displayName: "2-Star Room" },
    { name: "3-star", displayName: "3-Star Room" },
    { name: "4-star", displayName: "4-Star Room" },
    { name: "5-star", displayName: "5-Star Room" },
    { name: "budget-friendly", displayName: "Budget-Friendly" },
    { name: "luxury", displayName: "Luxury" },
    { name: "beachfront", displayName: "Beachfront" },
    { name: "family-friendly", displayName: "Family-Friendly" },
    { name: "business", displayName: "Business" }
  ];

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsCategoriesOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Close the dropdown when a category is clicked
  const handleCategoryClick = () => {
    setIsCategoriesOpen(false);
  };

  return (
    <header className="sticky top-0 bg-purple-800 text-white p-4 flex justify-between items-center z-50">
      {/* Logo or brand name */}
      <h1 className="text-2xl font-extrabold">Hotel De Luna</h1>

      {/* Nav links */}
      <nav className="flex space-x-8 relative">
        <Link to="/" className="text-lg hover:text-purple-300">
          Home
        </Link>

        {/* Categories Dropdown */}
        <div className="relative">
          <button
            ref={buttonRef} // Set ref to button
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            className="text-lg hover:text-purple-300"
          >
            Categories
          </button>
          {isCategoriesOpen && (
            <div
              ref={dropdownRef} // Set ref to dropdown container
              className="absolute bg-purple-700 text-white rounded-lg shadow-lg mt-2 p-4 w-64 flex flex-wrap gap-4 transition-all duration-300 ease-in-out"
            >
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={`/categories/${category.name}`}
                  className="text-lg py-2 px-4 hover:text-purple-300 hover:bg-purple-600 transition-all"
                  onClick={handleCategoryClick} // Close dropdown when clicked
                >
                  {category.displayName}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link to="/about-us" className="text-lg hover:text-purple-300">
          About Us
        </Link>
        <a href="#" className="text-lg hover:text-purple-300">
          Contact Support
        </a>
      </nav>

      {/* Search Bar */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search for hotels..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-4 py-2 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    </header>
  );
};

export default Header;
