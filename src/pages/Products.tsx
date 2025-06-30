import React, { useState } from 'react';
import { 
  CheckCircle, 
  Globe, 
  Star, 
  Clock, 
  Users, 
  Award,
  Brain,
  Video,
  Target,
  ArrowRight,
  Filter
} from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleOnlineRegistration = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfIjU2ZlkbdiH1mcfN2U6khlsRg-k3x-KrEkkPDGS_J2rZRsA/formResponse', '_blank');
  };

  const products = [
    {
      id: 1,
      title: "TOEFL ITP Test Registration",
      category: "test-only",
      price: "Rp 580.000",
      originalPrice: null,
      description: "Pendaftaran tes TOEFL ITP resmi dengan sertifikat yang diakui institusi pendidikan di seluruh Indonesia",
      features: [
        "Tes TOEFL ITP Resmi ETS",
        "Sertifikat Resmi Terakreditasi",
        "Hasil tersedia dalam 3 hari kerja",
        "Berlaku selama 2 tahun",
        "Diterima institusi pendidikan Indonesia",
        "Format paper-based test"
      ],
      highlights: ["Resmi ETS", "Cepat", "Terpercaya"],
      popular: true,
      badge: "UTAMA",
      duration: "115 menit",
      testType: "ITP"
    },
    {
      id: 2,
      title: "TOEFL iBT Test Registration",
      category: "test-only",
      price: "Hubungi Kami",
      originalPrice: null,
      description: "Pendaftaran tes TOEFL iBT resmi untuk keperluan studi dan visa luar negeri dengan standar internasional",
      features: [
        "Tes TOEFL iBT Resmi ETS",
        "Diterima secara global",
        "4 Skills Assessment (R/L/S/W)",
        "MyBest Scores feature",
        "Hasil dalam 4-8 hari",
        "Berlaku untuk visa & universitas LN"
      ],
      highlights: ["Global Standard", "4 Skills", "Visa Ready"],
      popular: false,
      badge: "INTERNATIONAL",
      duration: "3 jam",
      testType: "iBT"
    },
    {
      id: 3,
      title: "TOEFL ITP Preparation + Test Package",
      category: "prep-test",
      price: "Hubungi Kami",
      originalPrice: null,
      description: "Paket lengkap persiapan intensif dengan AI-integrated learning system + tes TOEFL ITP resmi",
      features: [
        "AI-Integrated Learning System",
        "Materi persiapan lengkap",
        "Practice tests unlimited",
        "TOEFL ITP Test resmi",
        "Pendampingan penuh",
        "Progress tracking real-time",
        "24/7 online access",
        "Mobile app support"
      ],
      highlights: ["AI Learning", "Pendampingan Penuh", "Unlimited Practice"],
      popular: false,
      badge: "BEST VALUE",
      duration: "Fleksibel + 115 menit test",
      testType: "ITP"
    },
    {
      id: 4,
      title: "4-Hour Intensive Course + TOEFL ITP",
      category: "course-test",
      price: "Hubungi Kami",
      originalPrice: null,
      description: "Kursus intensif 4 jam dengan trainer expert dari top 10 TOEFL trainers Indonesia + tes TOEFL ITP",
      features: [
        "4 jam intensive training",
        "Top 10 TOEFL trainer Indonesia",
        "Strategi khusus score boosting",
        "TOEFL ITP test resmi",
        "Materi eksklusif",
        "Sertifikat pelatihan",
        "Follow-up consultation"
      ],
      highlights: ["Expert Trainer", "Intensive", "Score Boost"],
      popular: false,
      badge: "INTENSIVE",
      duration: "4 jam + 115 menit test",
      testType: "ITP"
    },
    {
      id: 5,
      title: "10 Zoom Sessions + TOEFL ITP Package",
      category: "course-test",
      price: "Hubungi Kami",
      originalPrice: null,
      description: "10 sesi Zoom interaktif dengan trainer terbaik, pembelajaran personal, dan tes TOEFL ITP resmi",
      features: [
        "10 sesi Zoom live interactive",
        "Personal learning approach",
        "Real-time feedback",
        "TOEFL ITP test resmi",
        "Flexible scheduling",
        "Recording sessions available",
        "Homework & assignments",
        "Progress monitoring",
        "Support group"
      ],
      highlights: ["Live Interactive", "Personal", "Flexible"],
      popular: false,
      badge: "PREMIUM",
      duration: "10 sesi @ 90 menit + test",
      testType: "ITP"
    }
  ];

  const categories = [
    { id: 'all', name: 'Semua Paket', count: products.length },
    { id: 'test-only', name: 'Test Only', count: products.filter(p => p.category === 'test-only').length },
    { id: 'prep-test', name: 'Preparation + Test', count: products.filter(p => p.category === 'prep-test').length },
    { id: 'course-test', name: 'Course + Test', count: products.filter(p => p.category === 'course-test').length }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const getBadgeColor = (badge: string | null) => {
    switch (badge) {
      case 'BEST VALUE': return 'bg-green-500 text-white';
      case 'PREMIUM': return 'bg-purple-500 text-white';
      case 'INTENSIVE': return 'bg-red-500 text-white';
      case 'INTERNATIONAL': return 'bg-blue-500 text-white';
      case 'UTAMA': return 'bg-[#e97311] text-white';
      default: return 'bg-[#e97311] text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Paket Layanan TOEFL Terlengkap
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan target skor TOEFL Anda. 
            Semua paket dilengkapi dengan dukungan penuh dari tim expert kami.
          </p>
        </div>

        {/* Category Filter */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-400 mr-2" />
              <span className="font-medium text-gray-900">Filter Kategori:</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#e97311] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border-2 ${product.popular ? 'border-[#e97311] relative transform hover:scale-105' : 'border-gray-200'}`}>
              {product.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#e97311] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    PALING POPULER
                  </span>
                </div>
              )}

              {product.badge && (
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(product.badge)}`}>
                    {product.badge}
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    product.testType === 'iBT' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                  }`}>
                    TOEFL {product.testType}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {product.duration}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                
                <div className="flex items-baseline mb-3">
                  <span className="text-3xl font-bold text-[#e97311]">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through ml-2">{product.originalPrice}</span>
                  )}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.highlights.map((highlight, index) => (
                  <span key={index} className="bg-orange-50 text-[#e97311] px-2 py-1 rounded text-xs font-medium">
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button
                onClick={handleOnlineRegistration}
                className="w-full bg-[#e97311] text-white py-3 rounded-lg hover:bg-[#d4640e] transition-colors font-semibold inline-flex items-center justify-center group"
              >
                <Globe className="h-4 w-4 mr-2" />
                Daftar Online
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mengapa Memilih Paket Kami?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Setiap paket dirancang khusus untuk memaksimalkan potensi Anda dalam meraih skor TOEFL yang diinginkan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-[#e97311] bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-[#e97311]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI-Integrated Learning</h3>
              <p className="text-sm text-gray-600">Sistem pembelajaran adaptif yang menyesuaikan dengan kemampuan Anda</p>
            </div>

            <div className="text-center">
              <div className="bg-[#e97311] bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-[#e97311]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Trainers</h3>
              <p className="text-sm text-gray-600">Belajar dari top 10 TOEFL trainers terbaik di Indonesia</p>
            </div>

            <div className="text-center">
              <div className="bg-[#e97311] bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-[#e97311]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Pendampingan Penuh</h3>
              <p className="text-sm text-gray-600">Dukungan menyeluruh dari awal hingga mencapai target skor</p>
            </div>

            <div className="text-center">
              <div className="bg-[#e97311] bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-6 w-6 text-[#e97311]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Learning</h3>
              <p className="text-sm text-gray-600">Pilihan belajar sesuai jadwal dan preferensi Anda</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;