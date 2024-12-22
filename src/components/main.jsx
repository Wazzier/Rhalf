import React, { useState, useEffect } from "react";

const Main = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const imagesPerPage = 4; // Number of images to display per page
  const images = [
    "/img/g1.webp",
    "/img/g2.webp",
    "/img/g3.jpg",
    "/img/g4.jpg",
    "/img/g5.jpg", // Add more images as needed
    "/img/g6.jpg",
    "/img/g7.webp",
    "/img/g8.jpg",
    "/img/g9.webp",
    "/img/g10.jpg",
 
  ];

  // Calculate the indices for the images to display
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  useEffect(() => {
    // Fetch 6 fake users from the API
    fetch("https://api.escuelajs.co/api/v1/users")
      .then((response) => response.json())
      .then((data) => {
        // Slice first 6 users for this section
        const guestData = data.slice(0, 6).map((user) => ({
          name: user.name,
          avatar: user.avatar,
          comment: `"This was an incredible experience! The room was amazing, and the service was excellent."`,
        }));
        setUsers(guestData);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(images.length / imagesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <main className="min-h-screen relative bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900">
      {/* Video Banner */}
      <div className="relative w-full h-72 overflow-hidden">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src="/public/vid/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <h1 className="text-4xl font-extrabold text-white">Welcome to Hotel De Luna</h1>
        </div>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-20 blur-xl"></div>

      {/* Main Content */}
      <div className="flex justify-center items-center h-full relative z-10">
        <div className="w-full max-w-6xl px-8 space-y-8 text-left">
          {/* Hotel Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[{ title: "Budget Stay Inn Room", description: "A simple and affordable room for budget-conscious travelers looking for a comfortable stay.", stars: 3.5, price: "₱800 / Night", location: "Manila, Philippines", imgSrc: "/img/s1.webp" }, { title: "Deluxe Comfort Suite", description: "Enjoy the perfect blend of luxury and comfort in our well-appointed deluxe suites.", stars: 4, price: "₱1,200 / Night", location: "Boracay, Philippines", imgSrc: "/img/s2.webp" }, { title: "Ocean View Room", description: "Experience the serene beauty of the sea right from your room with breathtaking ocean views.", stars: 5, price: "₱2,000 / Night", location: "Cebu, Philippines", imgSrc: "/img/s3.webp" }].map((card, index) => (
              <div key={index} className="bg-purple-700 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer">
                <img src={card.imgSrc} alt={card.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-white opacity-90 mb-2">{card.description}</p>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-yellow-400 text-xl">
                    {"★".repeat(card.stars)}{"☆".repeat(5 - card.stars)}
                  </span>
                  <span className="text-white opacity-80 text-sm">({card.stars} stars)</span>
                </div>
                <p className="text-white text-lg font-semibold mb-2">Price: {card.price}</p>
                <p className="text-white text-sm">Location: {card.location}</p>
              </div>
            ))}
          </div>

          {/* Explore More Button */}
          <div className="flex justify-center mt-8">
            <button className="px-8 py-3 bg-purple-600 text-white font-semibold text-lg rounded-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105">
              Explore More
            </button>
          </div>

          {/* Our Featured Services */}
          <section className="py-16">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Our Featured Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-purple-700 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300 cursor-pointer">
                <i className="fas fa-bed text-4xl text-yellow-400 mb-4"></i>
                <h3 className="text-xl font-bold text-white">Comfortable Rooms</h3>
                <p className="text-white">Enjoy the utmost comfort in our well-designed rooms.</p>
              </div>
              <div className="bg-purple-700 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300 cursor-pointer">
                <i className="fas fa-swimmer text-4xl text-yellow-400 mb-4"></i>
                <h3 className="text-xl font-bold text-white">Swimming Pool</h3>
                <p className="text-white">Relax by our luxurious poolside.</p>
              </div>
              <div className="bg-purple-700 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300 cursor-pointer">
                <i className="fas fa-spa text-4xl text-yellow-400 mb-4"></i>
                <h3 className="text-xl font-bold text-white">Spa Services</h3>
                <p className="text-white">Indulge in rejuvenating spa treatments.</p>
              </div>
              <div className="bg-purple-700 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300 cursor-pointer">
                <i className="fas fa-concierge-bell text-4xl text-yellow-400 mb-4"></i>
                <h3 className="text-xl font-bold text-white">24/7 Concierge</h3>
                <p className="text-white">Our team is here to assist you at any time.</p>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="bg-purple-800 text-white py-16 px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {currentImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              ))}
            </div>

            {/* Gallery Navigation */}
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrev}
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300"
              >
                Next
              </button>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="bg-purple-800 text-white py-16 px-8 lg:px-16">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Guests Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {users.map((user, index) => (
                <div key={index} className="bg-purple-700 p-6 rounded-lg shadow-lg max-w-md relative">
                  {/* Profile Avatar on the top-left corner */}
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-16 h-16 object-cover rounded-full absolute top-4 left-4 border-4 border-white"
                  />
                  {/* Comment section with padding to the right of the avatar */}
                  <div className="pl-20">
                    <p className="text-lg mb-4">{user.comment}</p>
                    <p className="font-bold">{user.name}</p>
                    <p className="text-sm">Guest</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Us Section */}
          <section className="bg-purple-700 text-white py-16">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <form className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-lg mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-lg mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md placeholder-gray-500"
                  />
                </div>
              </div>
              <div className="mt-8">
                <label className="block text-lg mb-2">Message</label>
                <textarea
                  placeholder="Type your message here"
                  className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md placeholder-gray-500"
                  rows="5"
                ></textarea>
              </div>
              <div className="mt-8 flex justify-center">
                <button className="px-8 py-3 bg-purple-600 text-white font-semibold text-lg rounded-lg hover:bg-purple-700 transition duration-300">
                  Submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Main;
