import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Target, 
  TrendingUp, 
  Brain,
  Globe,
  CheckCircle,
  Star,
  BookOpen,
  Clock,
  Video
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: "5000+", label: "Siswa Berhasil", icon: <Clock className="h-6 w-6" /> },
    { number: "98%", label: "Tingkat Keberhasilan", icon: <Users className="h-6 w-6" /> },
    { number: "4.9", label: "Rating Kepuasan", icon: <Star className="h-6 w-6" /> }
  ];

  const trainers = [
    {
      name: "Dr. Sarah Johnson",
      title: "Lead TOEFL Instructor",
      experience: "12+ tahun",
      specialization: "TOEFL iBT Speaking & Writing",
      credentials: ["PhD in Applied Linguistics", "ETS Certified Trainer", "TESOL Certified"],
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      achievements: "Membantu 2000+ siswa mencapai skor 100+ TOEFL iBT"
    },
    {
      name: "Prof. Michael Chen",
      title: "Senior TOEFL Specialist",
      experience: "10+ tahun",
      specialization: "TOEFL ITP & iBT Reading",
      credentials: ["M.A. in English Literature", "Cambridge CELTA", "TOEFL Prep Expert"],
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      achievements: "Penulis buku 'TOEFL Reading Mastery' bestseller"
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "TOEFL Writing Expert",
      experience: "8+ tahun",
      specialization: "Academic Writing & TOEFL iBT",
      credentials: ["PhD in Education", "IELTS & TOEFL Certified", "Academic Writing Specialist"],
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      achievements: "Trainer untuk 50+ universitas di Indonesia"
    },
    {
      name: "James Park",
      title: "Listening & Speaking Coach",
      experience: "6+ tahun",
      specialization: "TOEFL Listening & Pronunciation",
      credentials: ["M.A. in TESOL", "Native Speaker", "Accent Reduction Specialist"],
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      achievements: "Spesialis accent training untuk Indonesian learners"
    }
  ];

  const values = [
    {
      icon: <Brain className="h-8 w-8 text-[#e97311]" />,
      title: "Innovation",
      description: "Mengintegrasikan teknologi AI terdepan dalam pembelajaran TOEFL untuk hasil yang optimal"
    },
    {
      icon: <Award className="h-8 w-8 text-[#e97311]" />,
      title: "Excellence",
      description: "Berkomitmen memberikan kualitas terbaik dengan trainer-trainer top di Indonesia"
    },
    {
      icon: <Users className="h-8 w-8 text-[#e97311]" />,
      title: "Student-Centered",
      description: "Mengutamakan kebutuhan dan kesuksesan setiap siswa dengan pendekatan personal"
    },
    {
      icon: <Globe className="h-8 w-8 text-[#e97311]" />,
      title: "Global Standard",
      description: "Menerapkan standar internasional dalam setiap aspek pembelajaran dan evaluasi"
    }
  ];

  const milestones = [
    {
      year: "2009",
      title: "Pendirian Express English Hub",
      description: "Dimulai sebagai lembaga kursus bahasa Inggris dengan fokus TOEFL preparation"
    },
    {
      year: "2012",
      title: "Partnership dengan ETS",
      description: "Menjadi authorized test center resmi untuk TOEFL ITP di Indonesia"
    },
    {
      year: "2016",
      title: "Digital Transformation",
      description: "Meluncurkan platform online learning pertama untuk TOEFL preparation"
    },
    {
      year: "2020",
      title: "AI Integration",
      description: "Mengintegrasikan teknologi AI untuk personalized learning experience"
    },
    {
      year: "2023",
      title: "Top 10 Recognition",
      description: "Diakui memiliki 10 trainer TOEFL terbaik di Indonesia"
    },
    {
      year: "2024",
      title: "5000+ Success Stories",
      description: "Mencapai milestone 5000+ siswa yang berhasil meraih target skor TOEFL"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#e97311] to-orange-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tentang Express English Hub
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Pengalaman bertahun-tahun membantu ribuan siswa Indonesia meraih impian studi dan karir internasional 
              melalui skor TOEFL yang excellent
            </p>
            <Link
              to="/products"
              className="bg-white text-[#e97311] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Lihat Paket Lengkap
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#e97311] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-[#e97311]">
                    {stat.icon}
                  </div>
                </div>
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

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-[#e97311] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-[#e97311]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h2>
              <p className="text-gray-700 leading-relaxed">
                Memberikan akses pembelajaran TOEFL berkualitas tinggi dengan teknologi terdepan dan 
                trainer expert untuk membantu setiap siswa Indonesia meraih impian akademik dan karir 
                internasional mereka. Kami berkomitmen untuk terus berinovasi dalam metode pembelajaran 
                yang efektif dan efisien.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-[#e97311] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-[#e97311]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h2>
              <p className="text-gray-700 leading-relaxed">
                Menjadi platform TOEFL preparation terdepan di Asia Tenggara yang dikenal karena 
                inovasi teknologi AI, kualitas trainer yang exceptional, dan track record kesuksesan 
                siswa yang outstanding. Kami ingin menjadi jembatan bagi talenta Indonesia untuk 
                bersaing di kancah global.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap layanan dan interaksi kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#e97311] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Trainers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top 10 TOEFL Trainers Indonesia
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Belajar dari para expert yang telah membantu ribuan siswa mencapai skor TOEFL impian mereka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="text-center mb-4">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold text-gray-900">{trainer.name}</h3>
                  <p className="text-[#e97311] font-medium text-sm">{trainer.title}</p>
                  <p className="text-gray-500 text-sm">{trainer.experience}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">Spesialisasi:</h4>
                  <p className="text-gray-600 text-sm">{trainer.specialization}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">Kredensial:</h4>
                  <ul className="space-y-1">
                    {trainer.credentials.map((credential, idx) => (
                      <li key={idx} className="text-gray-600 text-xs flex items-start">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {credential}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-[#e97311] text-xs font-medium">{trainer.achievements}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Dan 6 trainer expert lainnya dengan spesialisasi berbeda untuk melengkapi tim terbaik kami
            </p>
            <Link
              to="/products"
              className="bg-[#e97311] text-white px-6 py-3 rounded-lg hover:bg-[#d4640e] transition-colors font-semibold inline-flex items-center"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Lihat Paket Lengkap
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestone penting dalam perjalanan Express English Hub menjadi leader TOEFL preparation di Indonesia
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#e97311] opacity-20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <div className="text-[#e97311] font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-center w-12 h-12">
                    <div className="w-4 h-4 bg-[#e97311] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;