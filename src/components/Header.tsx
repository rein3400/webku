import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X, ChevronDown, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleWhatsAppContact = () => {
    window.open('https://api.whatsapp.com/send/?phone=6289676095714&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex items-center">
              <img 
                src="/logo.jpg" 
                alt="Express English Hub Logo" 
                className="h-12 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
              <div 
                className="bg-[#e97311] p-2 rounded-lg group-hover:bg-[#d4640e] transition-colors" 
                style={{ display: 'none' }}
              >
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/')
                  ? 'text-[#e97311] border-b-2 border-[#e97311] pb-1'
                  : 'text-gray-700 hover:text-[#e97311]'
              }`}
            >
              Beranda
            </Link>
            <Link
              to="/products"
              className={`font-medium transition-colors ${
                isActive('/products')
                  ? 'text-[#e97311] border-b-2 border-[#e97311] pb-1'
                  : 'text-gray-700 hover:text-[#e97311]'
              }`}
            >
              Layanan
            </Link>
            
            {/* TOEFL Info Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center font-medium text-gray-700 hover:text-[#e97311] transition-colors"
              >
                Info TOEFL
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link
                    to="/toefl-itp"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#e97311] transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    TOEFL ITP
                  </Link>
                  <Link
                    to="/toefl-ibt"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#e97311] transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    TOEFL iBT
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isActive('/about')
                  ? 'text-[#e97311] border-b-2 border-[#e97311] pb-1'
                  : 'text-gray-700 hover:text-[#e97311]'
              }`}
            >
              Tentang Kami
            </Link>

            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-[#e97311] border-b-2 border-[#e97311] pb-1'
                  : 'text-gray-700 hover:text-[#e97311]'
              }`}
            >
              Kontak
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleWhatsAppContact}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors font-medium inline-flex items-center"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </button>
            <Link
              to="/products"
              className="bg-[#e97311] text-white px-4 py-2 rounded-lg hover:bg-[#d4640e] transition-colors font-medium"
            >
              Daftar Sekarang
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-gray-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-[#e97311] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 text-gray-700 hover:text-[#e97311] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Layanan
            </Link>
            <Link
              to="/toefl-itp"
              className="block px-3 py-2 text-gray-700 hover:text-[#e97311] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              TOEFL ITP
            </Link>
            <Link
              to="/toefl-ibt"
              className="block px-3 py-2 text-gray-700 hover:text-[#e97311] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              TOEFL iBT
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-[#e97311] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-[#e97311] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontak
            </Link>
            <div className="border-t border-gray-200 pt-2">
              <button
                onClick={() => {
                  handleWhatsAppContact();
                  setIsMenuOpen(false);
                }}
                className="block mx-3 my-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors font-medium text-center w-auto"
              >
                <MessageCircle className="h-4 w-4 mr-2 inline" />
                WhatsApp
              </button>
              <Link
                to="/products"
                className="block mx-3 my-2 bg-[#e97311] text-white px-4 py-2 rounded-lg hover:bg-[#d4640e] transition-colors font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;