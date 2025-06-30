import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Target, 
  BarChart3, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Award,
  TrendingUp,
  Brain,
  Video,
  Globe,
  Heart,
  Shield,
  Zap
} from 'lucide-react';
import SentimentCarouselReviews from '../components/SentimentCarouselReviews';

const Home = () => {
  const handleOnlineRegistration = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfIjU2ZlkbdiH1mcfN2U6khlsRg-k3x-KrEkkPDGS_J2rZRsA/formResponse', '_blank');
  };

  const features = [
    {
      icon: <Brain className="h-8 w-8 text-[#e97311]" />,
      title: "AI-Integrated Learning",
      description: "Sistem pembelajaran terintegrasi AI yang menyesuaikan dengan kemampuan dan kebutuhan belajar Anda"
    },
    {
      icon: <Award className="h-8 w-8 text-teal-600" />,
      title: "Top 10 TOEFL Trainers",
      description: "Belajar langsung dari 10 trainer TOEFL terbaik di Indonesia dengan pengalaman internasional"
    },
    {
      icon: <Video className="h-8 w-8 text-[#e97311]" />,
      title: "Flexible Learning Options",
      description: "Pilihan belajar fleksibel: self-paced online atau instructor-led dengan sesi Zoom interaktif"
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: "Comprehensive Test Packages",
      description: "Paket lengkap persiapan + tes TOEFL ITP/iBT dengan pendampingan menyeluruh"
    }
  ];

  const stats = [
    { number: "5000+", label: "Siswa Berhasil" },
    { number: "98%", label: "Tingkat Kepuasan" },
    { number: "4.9", label: "Rating Kepuasan" }
  ];

  const products = [
    {
      id: 1,
      title: "TOEFL ITP Test Registration",
      price: "Rp 580.000",
      description: "Pendaftaran tes TOEFL ITP resmi dengan sertifikat yang diakui institusi pendidikan",
      features: ["Tes TOEFL ITP Resmi", "Sertifikat Resmi ETS", "Hasil dalam 3 hari", "Berlaku 2 tahun"],
      popular: true
    }
  ];

  return (
    <div className="min-h-screen" style={{ scrollBehavior: 'smooth' }}>
      {/* Enhanced Hero Section with Emotional Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#e97311] opacity-5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 opacity-3 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-float">
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg">
              <Star className="h-6 w-6 text-yellow-500" />
            </div>
          </div>
          <div className="absolute top-32 right-20 animate-float delay-1000">
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg">
              <Award className="h-6 w-6 text-[#e97311]" />
            </div>
          </div>
          <div className="absolute bottom-32 left-20 animate-float delay-2000">
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg">
              <Target className="h-6 w-6 text-green-500" />
            </div>
          </div>
          <div className="absolute bottom-20 right-10 animate-float delay-3000">
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg">
              <Brain className="h-6 w-6 text-purple-500" />
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Emotional Pain Point Acknowledgment */}
            <div className="mb-6">
              <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-4">
                <Heart className="h-4 w-4 text-blue-500 mr-2" />
                <span className="text-blue-700 text-sm font-medium">Merasa cemas dengan tes TOEFL? Anda tidak sendirian.</span>
              </div>
            </div>

            {/* Transformational Headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Wujudkan Impian 
              <span className="block text-[#e97311] relative">
                Studi Luar Negeri Anda
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#e97311] rounded-full opacity-30"></div>
              </span>
              <span className="block text-2xl md:text-3xl text-gray-600 mt-4 font-normal">
                TOEFL Bukan Lagi Halangan!
              </span>
            </h1>

            {/* Comprehensive Pain Points & Solution Messaging */}
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Apakah Anda merasa overwhelmed dengan persiapan TOEFL?</strong> 
                {' '}Takut tidak mencapai skor yang dibutuhkan? Bingung harus mulai dari mana? 
                <span className="text-[#e97311] font-semibold"> Kami memahami perjuangan Anda.</span>
              </p>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100 mb-6">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <strong className="text-[#e97311]">Kami hadir untuk mengubah kecemasan menjadi keyakinan.</strong> 
                  {' '}Dengan sistem pembelajaran AI yang menyesuaikan kemampuan Anda, 
                  bimbingan langsung dari <strong>10 trainer TOEFL terbaik di Indonesia</strong>, 
                  dan metode teruji yang telah membantu <strong>5000+ siswa</strong> mencapai impian mereka.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
                <div className="flex items-center bg-green-50 px-4 py-2 rounded-full">
                  <Shield className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-700 font-medium">Metode Teruji</span>
                </div>
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                  <Zap className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-blue-700 font-medium">Pembelajaran Efektif</span>
                </div>
                <div className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
                  <Users className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="text-purple-700 font-medium">98% Tingkat Kepuasan</span>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-2">
                <strong className="text-gray-900">Ribuan siswa telah membuktikan:</strong> 
                {' '}dari yang awalnya cemas dan tidak percaya diri, kini mereka berhasil diterima di universitas impian, 
                mendapatkan beasiswa bergengsi, dan memulai karir global.
              </p>
              
              <p className="text-xl text-[#e97311] font-semibold">
                Saatnya Anda merasakan transformasi yang sama!
              </p>
            </div>

            {/* Enhanced Call-to-Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleOnlineRegistration}
                className="group bg-[#e97311] text-white px-8 py-4 rounded-lg hover:bg-[#d4640e] transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Daftar Sekarang
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                to="/products"
                className="group border-2 border-[#e97311] text-[#e97311] px-8 py-4 rounded-lg hover:bg-[#e97311] hover:text-white transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Lihat Paket Lengkap
                <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Social Proof Snippet */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-2">Dipercaya oleh mahasiswa dari:</p>
              <div className="flex justify-center items-center space-x-8 text-gray-400">
                <span className="font-semibold">UI • ITB • UGM • ITS • UNAIR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#e97311] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Express English Hub?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Keunggulan yang membuat kami menjadi pilihan utama untuk persiapan TOEFL di Indonesia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section - Only TOEFL ITP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Paket Test TOEFL ITP
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tes TOEFL ITP resmi dengan sertifikat yang diakui institusi pendidikan
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-md">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border-2 border-[#e97311] relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#e97311] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      PAKET UTAMA
                    </span>
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                    <div className="text-4xl font-bold text-[#e97311] mb-4">{product.price}</div>
                    <p className="text-gray-600">{product.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={handleOnlineRegistration}
                    className="w-full bg-[#e97311] text-white py-4 rounded-lg hover:bg-[#d4640e] transition-colors font-semibold text-lg"
                  >
                    Daftar Sekarang
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-gray-100 text-[#e97311] px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors font-semibold text-lg inline-flex items-center group"
            >
              Lihat Paket Lainnya
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sentiment Carousel Reviews */}
      <SentimentCarouselReviews />

      {/* Registration Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cara Mudah Mendaftar
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Daftar secara online melalui formulir digital kami
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-md">
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="bg-[#e97311] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-[#e97311]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Online Registration</h3>
                <p className="text-gray-600 mb-6">
                  Daftar secara online melalui formulir digital kami. Proses cepat, 
                  mudah, dan akan segera ditindaklanjuti oleh tim kami.
                </p>
                <button
                  onClick={handleOnlineRegistration}
                  className="bg-[#e97311] text-white px-8 py-3 rounded-lg hover:bg-[#d4640e] transition-colors font-semibold inline-flex items-center"
                >
                  <Globe className="h-5 w-5 mr-2" />
                  Daftar Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;