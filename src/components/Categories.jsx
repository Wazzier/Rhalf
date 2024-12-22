import React from "react";
import { Link, useNavigate } from "react-router-dom";

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

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Select Room Category</h2>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Back
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/categories/${category.name}`}
            className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-lg text-center text-white transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold">{category.displayName}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
