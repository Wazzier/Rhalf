import React, { useEffect, useState } from 'react';

const AboutUs = () => {
  // State to hold fetched user data
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Fetch data from the Fake User API
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=12'); // Fetching 12 random users
        const data = await response.json();
        setTeamMembers(data.results); // Set team members state
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamMembers();
  }, []); // Run once when the component mounts

  return (
    <section className="bg-purple-800 text-white py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* About Us Intro */}
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <p className="text-lg mb-4">
          Welcome to Hotel De Luna! We are committed to providing the best
          experience for all our guests. Whether you are here for business or
          leisure, our luxurious rooms and world-class service will make your
          stay unforgettable.
        </p>
        <p className="text-lg mb-8">
          Our team is dedicated to ensuring that you have the most comfortable
          and enjoyable stay. From stunning views to exquisite dining, we take
          care of every detail.
        </p>

        {/* Features Section */}
        <div className="flex justify-center space-x-8 mb-12">
          <div className="w-32 h-32 bg-white rounded-full flex justify-center items-center text-purple-700 text-xl font-bold">
            24/7 Support
          </div>
          <div className="w-32 h-32 bg-white rounded-full flex justify-center items-center text-purple-700 text-xl font-bold">
            Luxurious Rooms
          </div>
          <div className="w-32 h-32 bg-white rounded-full flex justify-center items-center text-purple-700 text-xl font-bold">
            Breathtaking Views
          </div>
        </div>

        {/* Team Section - Dynamically loaded from Fake User API */}
        <h3 className="text-2xl font-bold mb-6">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.length > 0 ? (
            teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.picture.medium} // Profile picture from the API
                  alt={`${member.name.first} ${member.name.last}`}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <p className="font-bold">{member.name.first} {member.name.last}</p>
                <p>{member.gender === "male" ? "CEO" : "Manager"}</p> {/* Random roles, you can adjust as needed */}
              </div>
            ))
          ) : (
            <p>Loading team members...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
