import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, ThumbsUp, ThumbsDown, Minus, Calendar, MapPin, BookOpen } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  title: string;
  review: string;
  date: string;
  course?: string;
  location?: string;
  verified: boolean;
  helpful: number;
}

interface SentimentSlide {
  sentiment: 'positive' | 'neutral' | 'negative';
  title: string;
  icon: React.ReactNode;
  emoji: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  reviews: Review[];
  percentage: number;
}

const SentimentCarouselReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const allReviews: Review[] = [
    {
      id: 1,
      name: "Sarah Putri Maharani",
      rating: 5,
      title: "Platform terbaik untuk persiapan TOEFL iBT!",
      review: "Express English Hub bener-bener mengubah hidup saya! Dari skor 85 jadi 108 dalam 3 bulan. Speaking section yang dulu nightmare sekarang jadi strength. AI feedback system-nya surprisingly accurate. Instruktur Dr. Sarah Johnson juga responsive banget. Worth every penny dan sangat recommended!",
      date: "15 Januari 2025",
      course: "Complete TOEFL iBT Bootcamp",
      location: "Jakarta",
      verified: true,
      helpful: 47
    },
    {
      id: 2,
      name: "Ni Made Ayu Lestari",
      rating: 5,
      title: "Budget-friendly tapi kualitas premium!",
      review: "Sebagai mahasiswa dengan budget terbatas, platform ini jadi solusi terbaik! Harga affordable tapi kualitas ga kalah sama yang mahal. Mobile app memungkinkan belajar di mana aja. Berhasil dapet TOEFL iBT 95 untuk beasiswa ke New Zealand. Sangat puas dan recommended!",
      date: "8 Januari 2025",
      course: "Reading Mastery TOEFL iBT",
      location: "Denpasar",
      verified: true,
      helpful: 31
    },
    {
      id: 3,
      name: "Putri Maharani Salsabila",
      rating: 5,
      title: "From hopeless to confident!",
      review: "Dulu speaking saya berantakan banget, confidence minus 100. Tapi setelah ikut program di sini, everything changed! Speaking simulator realistic dan feedback constructive. Sekarang skor speaking 26/30, total TOEFL iBT 112! Dream university here I come! Sangat recommended untuk yang struggling dengan speaking!",
      date: "2 Januari 2025",
      course: "Speaking Confidence TOEFL iBT",
      location: "Yogyakarta",
      verified: true,
      helpful: 52
    },
    {
      id: 4,
      name: "Dimas Prasetyo Nugroho",
      rating: 5,
      title: "Mantap jiwa! Highly recommended!",
      review: "Platform ini legit banget! Yang tadinya buta sama TOEFL, sekarang confident buat real test. Diagnostic test di awal langsung ketahuan weakness. Study plan personalized, instruktur expert semua. 4 bulan belajar, mock test consistently 105+. Ready to conquer TOEFL iBT!",
      date: "15 Desember 2024",
      course: "Complete TOEFL iBT Bootcamp",
      location: "Malang",
      verified: true,
      helpful: 43
    },
    {
      id: 5,
      name: "Ahmad Rizky Pratama",
      rating: 4,
      title: "Bagus tapi ada yang perlu diperbaiki",
      review: "Platform solid untuk belajar TOEFL. Tes latihan realistis, progress tracking detail. Tapi ada issue: loading video kadang lambat, customer support agak slow response, audio quality di beberapa listening exercise kurang jernih. Despite these, skor naik dari 520 ke 580. Cukup puas overall.",
      date: "12 Januari 2025",
      course: "Listening Skills TOEFL ITP",
      location: "Bandung",
      verified: true,
      helpful: 23
    },
    {
      id: 6,
      name: "Aisyah Nur Rahmawati",
      rating: 4,
      title: "Good content, needs more interaction",
      review: "Materi comprehensive dan analytical reports detailed. Tapi kurang interactive, maybe bisa ditambah live sessions atau group study features. Writing feedback bisa lebih specific. Skor improve dari 78 ke 92, content definitely works. Just needs more human touch.",
      date: "18 Desember 2024",
      course: "Reading Comprehension TOEFL ITP",
      location: "Semarang",
      verified: true,
      helpful: 21
    },
    {
      id: 7,
      name: "Rendi Kurniawan Putra",
      rating: 4,
      title: "Solid platform with minor issues",
      review: "Platform bagus untuk serious TOEFL preparation. Sistem well-organized, progress tracking detailed. Ada technical issues: server kadang slow pas peak hours, mobile app occasionally crashes. Content-wise very satisfied. Dari TOEFL ITP 480 jadi 550 dalam 6 minggu.",
      date: "2 Desember 2024",
      course: "Listening Skills TOEFL ITP",
      location: "Tangerang",
      verified: true,
      helpful: 24
    },
    {
      id: 8,
      name: "Bayu Setiawan Wijaya",
      rating: 3,
      title: "Decent content, poor customer service",
      review: "Konten bagus dan comprehensive, materi up-to-date. Tapi customer service disappointing. Technical issue pas practice test, support lama respond dan solusi kurang memuaskan. Untuk harga yang dibayar, expect better service. Agak kecewa dengan pelayanannya.",
      date: "5 Januari 2025",
      course: "Structure & Written Expression TOEFL ITP",
      location: "Surabaya",
      verified: true,
      helpful: 18
    },
    {
      id: 9,
      name: "Eko Prasetyo Wibowo",
      rating: 3,
      title: "Average experience, nothing special",
      review: "Platform oke tapi nothing extraordinary. Materi standard, ga ada yang particularly innovative. Harga ga competitive dibanding competitors. Customer support responsive tapi ga particularly helpful. Skor naik dikit tapi ga dramatic improvement. Biasa aja, tidak istimewa.",
      date: "28 Oktober 2024",
      course: "Listening Skills TOEFL ITP",
      location: "Semarang",
      verified: true,
      helpful: 11
    },
    {
      id: 10,
      name: "Kevin Tanujaya Lim",
      rating: 2,
      title: "Audio quality issues ruin the experience",
      review: "Audio quality di listening exercises poor banget. Ada background noise, volume inconsistent, recording low bitrate. Untuk TOEFL preparation, audio quality crucial! Udah komplain berkali-kali tapi belum ada improvement. Sangat kecewa dengan kualitas audio, tidak recommended untuk listening practice.",
      date: "22 Desember 2024",
      course: "Listening Skills TOEFL ITP",
      location: "Pontianak",
      verified: true,
      helpful: 15
    },
    {
      id: 11,
      name: "Arief Budiman Santoso",
      rating: 2,
      title: "Good quality but overpriced",
      review: "Konten berkualitas tapi untuk kantong mahasiswa harga steep. Mungkin bisa student discount atau payment plan lebih flexible. Sayang quality content cuma bisa diakses yang mampu bayar full price. Kecewa dengan pricing strategy, tidak recommended untuk mahasiswa budget terbatas.",
      date: "8 Desember 2024",
      course: "Reading Mastery TOEFL iBT",
      location: "Solo",
      verified: true,
      helpful: 19
    },
    {
      id: 12,
      name: "Lestari Putri Maharani",
      rating: 2,
      title: "Disappointed with writing feedback",
      review: "AI feedback generic dan ga specific enough. Human feedback limited dan kadang ga constructive. Untuk harga yang dibayar, expect more personalized feedback. Writing section yang jadi main concern malah disappointing. Kecewa banget dengan quality feedback, tidak recommended untuk improve writing skills.",
      date: "8 November 2024",
      course: "Advanced Writing TOEFL iBT",
      location: "Medan",
      verified: true,
      helpful: 13
    }
  ];

  // Analisis sentimen berdasarkan rating dan kata kunci
  const analyzeSentiment = (review: Review): 'positive' | 'neutral' | 'negative' => {
    const positiveKeywords = ['puas', 'bagus', 'recommended', 'excellent', 'amazing', 'perfect', 'helpful', 'great', 'mantap', 'terbaik', 'luar biasa', 'worth', 'berhasil', 'suka'];
    const negativeKeywords = ['kecewa', 'buruk', 'tidak recommended', 'disappointing', 'poor', 'bad', 'tidak puas', 'jelek', 'bermasalah', 'tidak worth'];
    
    const reviewText = (review.title + ' ' + review.review).toLowerCase();
    const positiveCount = positiveKeywords.filter(keyword => reviewText.includes(keyword)).length;
    const negativeCount = negativeKeywords.filter(keyword => reviewText.includes(keyword)).length;

    if (review.rating >= 4 && positiveCount > negativeCount) return 'positive';
    if (review.rating <= 2 || negativeCount > positiveCount) return 'negative';
    return 'neutral';
  };

  // Kategorikan ulasan berdasarkan sentimen
  const categorizeReviews = (): SentimentSlide[] => {
    const positive = allReviews.filter(review => analyzeSentiment(review) === 'positive');
    const neutral = allReviews.filter(review => analyzeSentiment(review) === 'neutral');
    const negative = allReviews.filter(review => analyzeSentiment(review) === 'negative');

    return [
      {
        sentiment: 'positive',
        title: 'Ulasan Positif',
        icon: <ThumbsUp className="h-6 w-6" />,
        emoji: '😊',
        bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
        borderColor: 'border-green-200',
        textColor: 'text-green-700',
        reviews: positive.slice(0, 4),
        percentage: Math.round((positive.length / allReviews.length) * 100)
      },
      {
        sentiment: 'neutral',
        title: 'Ulasan Netral',
        icon: <Minus className="h-6 w-6" />,
        emoji: '😐',
        bgColor: 'bg-gradient-to-br from-gray-50 to-slate-50',
        borderColor: 'border-gray-200',
        textColor: 'text-gray-700',
        reviews: neutral.slice(0, 4),
        percentage: Math.round((neutral.length / allReviews.length) * 100)
      },
      {
        sentiment: 'negative',
        title: 'Ulasan Negatif',
        icon: <ThumbsDown className="h-6 w-6" />,
        emoji: '😞',
        bgColor: 'bg-gradient-to-br from-red-50 to-rose-50',
        borderColor: 'border-red-200',
        textColor: 'text-red-700',
        reviews: negative.slice(0, 4),
        percentage: Math.round((negative.length / allReviews.length) * 100)
      }
    ];
  };

  const slides = categorizeReviews();

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ulasan Berdasarkan Sentimen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Jelajahi pengalaman pengguna berdasarkan kategori sentimen untuk mendapatkan perspektif yang komprehensif tentang platform kami.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Current Slide */}
          <div className={`${currentSlideData.bgColor} rounded-2xl border-2 ${currentSlideData.borderColor} p-8 mb-8 transition-all duration-500`}>
            {/* Slide Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <span className="text-4xl">{currentSlideData.emoji}</span>
                <div className={`${currentSlideData.textColor}`}>
                  {currentSlideData.icon}
                </div>
                <h3 className={`text-2xl font-bold ${currentSlideData.textColor}`}>
                  {currentSlideData.title}
                </h3>
              </div>
              <div className={`text-lg font-semibold ${currentSlideData.textColor} mb-2`}>
                {currentSlideData.percentage}% dari total ulasan
              </div>
              <div className="text-gray-600">
                {currentSlideData.reviews.length} ulasan representatif ditampilkan
              </div>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentSlideData.reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
                >
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#e97311] to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-xs text-gray-500">({review.rating}/5)</span>
                          {review.verified && (
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                              ✓
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right text-xs text-gray-500">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        {review.date}
                      </div>
                      {review.location && (
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {review.location}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Review Title */}
                  <h5 className="font-semibold text-gray-900 mb-2 text-sm">
                    "{review.title}"
                  </h5>

                  {/* Review Content */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                    {review.review}
                  </p>

                  {/* Review Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    {review.course && (
                      <div className="flex items-center text-xs">
                        <BookOpen className="h-3 w-3 text-[#e97311] mr-1" />
                        <span className="font-medium text-[#e97311] truncate">{review.course}</span>
                      </div>
                    )}
                    <span className="text-xs text-gray-500">{review.helpful} helpful</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-[#e97311]"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Slide Indicators */}
            <div className="flex space-x-3">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    index === currentSlide
                      ? slide.sentiment === 'positive'
                        ? 'bg-green-600 text-white'
                        : slide.sentiment === 'negative'
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                  aria-label={`Go to ${slide.title}`}
                >
                  <span className="text-lg">{slide.emoji}</span>
                  <span className="text-sm font-medium hidden sm:inline">
                    {slide.title}
                  </span>
                  <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                    {slide.percentage}%
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-[#e97311]"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Auto-play Control */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              {isAutoPlaying ? '⏸️ Pause Auto-play' : '▶️ Resume Auto-play'}
            </button>
          </div>
        </div>

        {/* Overall Statistics */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Ringkasan Sentimen Ulasan
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {slides.map((slide, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <span className="text-2xl">{slide.emoji}</span>
                  <div className={slide.textColor}>
                    {slide.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {slide.percentage}%
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  {slide.title}
                </div>
                <div className="text-xs text-gray-500">
                  {slide.reviews.length}+ ulasan
                </div>
              </div>
            ))}
          </div>

          {/* Sentiment Progress Bar */}
          <div className="mb-4">
            <div className="flex rounded-full overflow-hidden h-4">
              <div 
                className="bg-green-500 transition-all duration-500" 
                style={{ width: `${slides[0].percentage}%` }}
              ></div>
              <div 
                className="bg-gray-400 transition-all duration-500" 
                style={{ width: `${slides[1].percentage}%` }}
              ></div>
              <div 
                className="bg-red-500 transition-all duration-500" 
                style={{ width: `${slides[2].percentage}%` }}
              ></div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Berdasarkan analisis {allReviews.length} ulasan pengguna Express English Hub
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SentimentCarouselReviews;