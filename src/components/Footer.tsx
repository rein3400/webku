import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* Logo in Footer */}
              <img 
                src="/logo.jpg" 
                alt="Express English Hub Logo" 
                className="h-10 w-auto"
                onError={(e) => {
                  // Fallback to icon if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback icon */}
              <div 
                className="bg-[#e97311] p-2 rounded-lg" 
                style={{ display: 'none' }}
              >
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Kuasai tes TOEFL ITP dan TOEFL iBT Anda dengan platform persiapan komprehensif kami yang menampilkan tes latihan, kursus terstruktur, dan rencana belajar yang dipersonalisasi.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/practice-tests" className="text-gray-300 hover:text-white transition-colors">
                  Tes Latihan TOEFL
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors">
                  Kursus TOEFL
                </Link>
              </li>
              <li>
                <Link to="/toefl-itp" className="text-gray-300 hover:text-white transition-colors">
                  Info TOEFL ITP
                </Link>
              </li>
              <li>
                <Link to="/toefl-ibt" className="text-gray-300 hover:text-white transition-colors">
                  Info TOEFL iBT
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dukungan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Pusat Bantuan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  FAQ TOEFL
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Hubungi Dukungan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontak</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">support@expressenglishhub.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Express English Hub. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;