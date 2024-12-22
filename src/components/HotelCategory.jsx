import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import hotelData from "../components/data/hotelData";

const HotelCategory = () => {
  const { starLevel } = useParams();
  const navigate = useNavigate();
  const Room = hotelData[starLevel];

  if (!Room) {
    return <div className="text-center text-white">No data available for {starLevel} Room.</div>;
  }

  return (
    <div className="bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-white capitalize">
          {starLevel.replace("-", " ")} Room
        </h2>
        <button
          onClick={() => navigate("/categories")}
          className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Back
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Room.map((hotel, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-lg space-y-4 transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-bold text-white mt-4">{hotel.name}</h3>
            <p className="text-white opacity-90 mt-2">{hotel.description}</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-yellow-400 text-xl">
                {"★".repeat(Math.round(hotel.rating))}
              </span>
              <span className="text-white opacity-80 text-sm">
                ({hotel.rating} stars)
              </span>
            </div>
            <p className="text-white text-lg mt-2">
              Price: ₱{hotel.price.toLocaleString()} / Night
            </p>
            <p className="text-white text-sm mt-2">
              Location: {hotel.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelCategory;
