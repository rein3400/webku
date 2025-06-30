import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  MapPin, 
  DollarSign, 
  Calendar, 
  Users, 
  CheckCircle, 
  AlertCircle,
  Monitor,
  Wifi,
  Headphones,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';

const ToeflItp = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Apa perbedaan utama antara TOEFL ITP dan TOEFL iBT?",
      answer: "TOEFL ITP adalah tes berbasis kertas yang digunakan untuk evaluasi internal institusi, sedangkan TOEFL iBT adalah tes berbasis internet yang diterima secara internasional untuk keperluan akademik dan imigrasi."
    },
    {
      question: "Berapa lama hasil TOEFL ITP berlaku?",
      answer: "Hasil TOEFL ITP berlaku selama 2 tahun dari tanggal tes. Namun, beberapa institusi mungkin memiliki kebijakan yang berbeda mengenai masa berlaku skor."
    },
    {
      question: "Apakah TOEFL ITP diterima untuk aplikasi visa?",
      answer: "TOEFL ITP umumnya tidak diterima untuk aplikasi visa atau keperluan imigrasi. Untuk keperluan tersebut, biasanya diperlukan TOEFL iBT atau IELTS."
    },
    {
      question: "Bagaimana sistem penilaian TOEFL ITP?",
      answer: "TOEFL ITP menggunakan skala 310-677. Skor dihitung berdasarkan performa di tiga bagian: Listening (31-68), Structure & Written Expression (31-68), dan Reading (31-67)."
    },
    {
      question: "Apakah ada batasan usia untuk mengikuti TOEFL ITP?",
      answer: "Tidak ada batasan usia minimum untuk TOEFL ITP. Namun, peserta di bawah 18 tahun memerlukan persetujuan orang tua atau wali."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              TOEFL ITP
              <span className="block text-purple-600 text-2xl md:text-3xl mt-2">
                Test of English as a Foreign Language - Institutional Testing Program
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Tes kemampuan bahasa Inggris berbasis kertas yang dirancang untuk evaluasi internal institusi pendidikan. 
              Ideal untuk penempatan, monitoring kemajuan, dan evaluasi program bahasa Inggris.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/practice-tests"
                className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-lg inline-flex items-center justify-center group"
              >
                Mulai Belajar
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/practice-tests"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg inline-flex items-center justify-center"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Tes Latihan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tentang TOEFL ITP
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Memahami format, struktur, dan kegunaan TOEFL ITP untuk kebutuhan akademik Anda
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Apa itu TOEFL ITP?</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  TOEFL ITP (Institutional Testing Program) adalah versi tes TOEFL berbasis kertas yang 
                  digunakan oleh institusi pendidikan untuk keperluan internal seperti penempatan mahasiswa, 
                  monitoring kemajuan belajar, dan evaluasi program bahasa Inggris.
                </p>
                <p>
                  Tes ini mengukur kemampuan bahasa Inggris akademik dalam tiga area utama: 
                  Listening Comprehension, Structure & Written Expression, dan Reading Comprehension.
                </p>
                <p>
                  TOEFL ITP menggunakan soal-soal dari tes TOEFL sebelumnya yang telah terbukti valid 
                  dan reliabel, memberikan standar penilaian yang konsisten dan dapat diandalkan.
                </p>
              </div>
            </div>
            <div className="bg-purple-50 p-8 rounded-xl">
              <h4 className="text-xl font-semibold text-purple-900 mb-4">Keunggulan TOEFL ITP</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-purple-800">Biaya lebih terjangkau dibanding TOEFL iBT</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-purple-800">Format paper-based yang familiar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-purple-800">Hasil tersedia dalam 2-3 hari kerja</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-purple-800">Tidak memerlukan koneksi internet</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-purple-800">Ideal untuk evaluasi internal institusi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Test Structure Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Struktur Tes TOEFL ITP
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Memahami format dan bagian-bagian dalam tes TOEFL ITP
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Listening Comprehension</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>50 soal</strong> • <strong>35 menit</strong></p>
                <p>Percakapan pendek, percakapan panjang, dan ceramah akademik</p>
                <p className="text-sm">Skor: 31-68</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Structure & Written Expression</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>40 soal</strong> • <strong>25 menit</strong></p>
                <p>Tata bahasa dan struktur kalimat bahasa Inggris</p>
                <p className="text-sm">Skor: 31-68</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reading Comprehension</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>50 soal</strong> • <strong>55 menit</strong></p>
                <p>Pemahaman bacaan teks akademik dan umum</p>
                <p className="text-sm">Skor: 31-67</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Detail Waktu Tes</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Bagian</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Jumlah Soal</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Waktu</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Rentang Skor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">Listening Comprehension</td>
                    <td className="py-3 px-4 text-gray-700">50</td>
                    <td className="py-3 px-4 text-gray-700">35 menit</td>
                    <td className="py-3 px-4 text-gray-700">31-68</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">Structure & Written Expression</td>
                    <td className="py-3 px-4 text-gray-700">40</td>
                    <td className="py-3 px-4 text-gray-700">25 menit</td>
                    <td className="py-3 px-4 text-gray-700">31-68</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">Reading Comprehension</td>
                    <td className="py-3 px-4 text-gray-700">50</td>
                    <td className="py-3 px-4 text-gray-700">55 menit</td>
                    <td className="py-3 px-4 text-gray-700">31-67</td>
                  </tr>
                  <tr className="bg-purple-50">
                    <td className="py-3 px-4 font-semibold text-purple-900">Total</td>
                    <td className="py-3 px-4 font-semibold text-purple-900">140</td>
                    <td className="py-3 px-4 font-semibold text-purple-900">115 menit</td>
                    <td className="py-3 px-4 font-semibold text-purple-900">310-677</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Registration & Fees Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pendaftaran & Biaya
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Informasi lengkap tentang proses pendaftaran dan struktur biaya TOEFL ITP
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-purple-900 mb-6">Proses Pendaftaran</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</div>
                  <div>
                    <h4 className="font-semibold text-purple-900">Hubungi Institusi</h4>
                    <p className="text-purple-700 text-sm">TOEFL ITP hanya dapat diselenggarakan oleh institusi yang telah terdaftar</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</div>
                  <div>
                    <h4 className="font-semibold text-purple-900">Daftar Melalui Institusi</h4>
                    <p className="text-purple-700 text-sm">Lengkapi formulir pendaftaran yang disediakan institusi</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</div>
                  <div>
                    <h4 className="font-semibold text-purple-900">Bayar Biaya Tes</h4>
                    <p className="text-purple-700 text-sm">Sesuai dengan ketentuan institusi penyelenggara</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</div>
                  <div>
                    <h4 className="font-semibold text-purple-900">Konfirmasi Jadwal</h4>
                    <p className="text-purple-700 text-sm">Terima konfirmasi tanggal, waktu, dan lokasi tes</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Struktur Biaya</h3>
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-gray-900">Biaya Tes TOEFL ITP</span>
                  <span className="text-2xl font-bold text-purple-600">$45 - $65</span>
                </div>
                <p className="text-gray-600 text-sm">
                  *Biaya dapat bervariasi tergantung institusi penyelenggara dan lokasi
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Lebih terjangkau dibanding TOEFL iBT</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Pembayaran melalui institusi penyelenggara</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">Termasuk sertifikat hasil tes</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">Catatan Penting</h4>
                    <p className="text-yellow-700 text-sm">
                      TOEFL ITP hanya dapat diselenggarakan oleh institusi yang telah mendapat lisensi dari ETS. 
                      Individu tidak dapat mendaftar secara langsung.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations & Availability */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lokasi & Ketersediaan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Informasi tentang lokasi tes dan jadwal penyelenggaraan TOEFL ITP
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Institusi Penyelenggara di Indonesia</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Universitas</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Universitas Indonesia (UI)</li>
                      <li>• Institut Teknologi Bandung (ITB)</li>
                      <li>• Universitas Gadjah Mada (UGM)</li>
                      <li>• Institut Teknologi Sepuluh Nopember (ITS)</li>
                      <li>• Universitas Airlangga (UNAIR)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Lembaga Bahasa</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• IALF (Indonesia Australia Language Foundation)</li>
                      <li>• LBI FIB UI</li>
                      <li>• Pusat Bahasa Universitas Negeri</li>
                      <li>• English First (EF)</li>
                      <li>• Wall Street English</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Kota Besar</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>Jakarta</li>
                  <li>Bandung</li>
                  <li>Surabaya</li>
                  <li>Yogyakarta</li>
                  <li>Medan</li>
                  <li>Makassar</li>
                  <li>Denpasar</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Jadwal Tes</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Frekuensi:</strong> Sesuai kebutuhan institusi</p>
                  <p><strong>Hari:</strong> Biasanya Sabtu atau Minggu</p>
                  <p><strong>Waktu:</strong> Pagi hari (08.00-11.00)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Validity & Acceptance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Masa Berlaku & Penerimaan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Informasi tentang masa berlaku skor dan institusi yang menerima TOEFL ITP
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Masa Berlaku Skor</h3>
              <div className="bg-purple-50 p-6 rounded-xl mb-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-8 w-8 text-purple-600 mr-3" />
                  <span className="text-2xl font-bold text-purple-900">2 Tahun</span>
                </div>
                <p className="text-purple-700">
                  Skor TOEFL ITP berlaku selama 2 tahun dari tanggal pelaksanaan tes. 
                  Beberapa institusi mungkin memiliki kebijakan yang berbeda.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Sertifikat Resmi</h4>
                    <p className="text-gray-600 text-sm">Diterbitkan oleh ETS melalui institusi penyelenggara</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Verifikasi Online</h4>
                    <p className="text-gray-600 text-sm">Skor dapat diverifikasi melalui sistem ETS</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Hasil Cepat</h4>
                    <p className="text-gray-600 text-sm">Tersedia dalam 2-3 hari kerja setelah tes</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Institusi yang Menerima</h3>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Universitas Dalam Negeri</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Program S2/S3 universitas negeri</li>
                    <li>• Beasiswa dalam negeri</li>
                    <li>• Program pertukaran mahasiswa</li>
                    <li>• Sertifikasi kemampuan bahasa</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Keperluan Akademik</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Penempatan level bahasa Inggris</li>
                    <li>• Evaluasi program bahasa</li>
                    <li>• Monitoring kemajuan belajar</li>
                    <li>• Persyaratan kelulusan</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-red-800">Tidak Diterima Untuk</h4>
                      <ul className="text-red-700 text-sm mt-2 space-y-1">
                        <li>• Aplikasi visa/imigrasi</li>
                        <li>• Universitas luar negeri (umumnya)</li>
                        <li>• Beasiswa luar negeri</li>
                        <li>• Keperluan profesional internasional</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tips Persiapan & Sumber Belajar
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Strategi efektif untuk mempersiapkan diri menghadapi TOEFL ITP
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Listening</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Dengarkan podcast bahasa Inggris</li>
                <li>• Tonton film dengan subtitle Inggris</li>
                <li>• Latihan soal listening TOEFL</li>
                <li>• Fokus pada accent Amerika</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Structure</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Pelajari tata bahasa dasar</li>
                <li>• Latihan soal structure rutin</li>
                <li>• Pahami pola kalimat kompleks</li>
                <li>• Identifikasi kesalahan umum</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reading</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Baca artikel akademik</li>
                <li>• Perbanyak kosakata</li>
                <li>• Latihan skimming & scanning</li>
                <li>• Pahami struktur paragraf</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Sumber Belajar Rekomendasi</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Buku Persiapan</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Official Guide to the TOEFL ITP Test</li>
                  <li>• Barron's TOEFL ITP</li>
                  <li>• Cambridge Preparation for the TOEFL Test</li>
                  <li>• Longman Preparation Course for TOEFL</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Platform Online</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Express English Hub (Platform ini)</li>
                  <li>• ETS Official Practice Tests</li>
                  <li>• Magoosh TOEFL Prep</li>
                  <li>• Khan Academy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-xl text-gray-600">
              Jawaban untuk pertanyaan umum tentang TOEFL ITP
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToeflItp;