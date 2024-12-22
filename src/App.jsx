import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/main';
import Footer from './components/Footer';
import Categories from './components/Categories';
import HotelCategory from './components/HotelCategory';
import AboutUs from './components/aboutUs'; // Import the AboutUs component

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:starLevel" element={<HotelCategory />} />
            <Route path="/about-us" element={<AboutUs />} /> {/* Add the About Us route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
