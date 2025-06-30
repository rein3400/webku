import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import ToeflItp from './pages/ToeflItp';
import ToeflIbt from './pages/ToeflIbt';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/toefl-itp" element={<ToeflItp />} />
            <Route path="/toefl-ibt" element={<ToeflIbt />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;