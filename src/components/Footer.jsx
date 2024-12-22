import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex justify-between space-x-8 flex-wrap">
        {/* Support Section */}
        <div className="flex-1 mb-8">
          <h4 className="font-semibold text-lg mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-300">Coronavirus (COVID-19) FAQs</a></li>
            <li><a href="#" className="hover:text-purple-300">Manage your trips</a></li>
            <li><a href="#" className="hover:text-purple-300">Contact Customer Service</a></li>
            <li><a href="#" className="hover:text-purple-300">Safety Resource Center</a></li>
          </ul>
        </div>

        {/* Discover Section */}
        <div className="flex-1 mb-8">
          <h4 className="font-semibold text-lg mb-4">Discover</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-300">Genius loyalty program</a></li>
            <li><a href="#" className="hover:text-purple-300">Seasonal and holiday deals</a></li>
            <li><a href="#" className="hover:text-purple-300">Travel articles</a></li>
            <li><a href="#" className="hover:text-purple-300">Traveller Review Awards</a></li>
            <li><a href="#" className="hover:text-purple-300">Car rental</a></li>
            <li><a href="#" className="hover:text-purple-300">Flight finder</a></li>
            <li><a href="#" className="hover:text-purple-300">Restaurant reservations</a></li>
            <li><a href="#" className="hover:text-purple-300">Booking.com for Travel Agents</a></li>
          </ul>
        </div>

        {/* Terms & Settings Section */}
        <div className="flex-1 mb-8">
          <h4 className="font-semibold text-lg mb-4">Terms & Settings</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-300">Terms & conditions</a></li>
            <li><a href="#" className="hover:text-purple-300">Privacy & cookies</a></li>
            <li><a href="#" className="hover:text-purple-300">Partner dispute</a></li>
            <li><a href="#" className="hover:text-purple-300">Modern Slavery Statement</a></li>
            <li><a href="#" className="hover:text-purple-300">Human Rights Statement</a></li>
          </ul>
        </div>

        {/* Partners Section */}
        <div className="flex-1 mb-8">
          <h4 className="font-semibold text-lg mb-4">Partners</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-300">Extranet login</a></li>
            <li><a href="#" className="hover:text-purple-300">Partner help</a></li>
            <li><a href="#" className="hover:text-purple-300">List your property</a></li>
            <li><a href="#" className="hover:text-purple-300">Become an affiliate</a></li>
          </ul>
        </div>

        {/* About Section */}
        <div className="flex-1 mb-8">
          <h4 className="font-semibold text-lg mb-4">About</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-300">About Booking.com</a></li>
            <li><a href="#" className="hover:text-purple-300">How We Work</a></li>
            <li><a href="#" className="hover:text-purple-300">Sustainability</a></li>
            <li><a href="#" className="hover:text-purple-300">Press center</a></li>
            <li><a href="#" className="hover:text-purple-300">Careers</a></li>
            <li><a href="#" className="hover:text-purple-300">Investor relations</a></li>
            <li><a href="#" className="hover:text-purple-300">Corporate contact</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-sm">
        <p>&copy; 2024 Hotel De Luna. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
