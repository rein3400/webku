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
  MessageCircle,
  Mic,
  Edit3,
  Globe
} from 'lucide-react';

const ToeflIbt = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Apa perbedaan utama antara TOEFL iBT dan TOEFL ITP?",
      answer: "TOEFL iBT adalah tes berbasis internet yang diterima secara internasional untuk keperluan akademik dan imigrasi, sedangkan TOEFL ITP adalah tes berbasis kertas untuk evaluasi internal institusi. TOEFL iBT mencakup 4 bagian (Reading, Listening, Speaking, Writing) sementara ITP hanya 3 bagian."
    },
    {
      question: "Berapa lama hasil TOEFL iBT berlaku?",
      answer: "Hasil TOEFL iBT berlaku selama 2 tahun dari tanggal tes. Skor dapat diakses online melalui akun ETS Anda dan dikirim ke institusi yang Anda pilih."
    },
    {
      question: "Apakah TOEFL iBT diterima untuk aplikasi visa?",
      answer: "Ya, TOEFL iBT diterima secara luas untuk aplikasi visa pelajar, visa kerja, dan keperluan imigrasi di berbagai negara termasuk Amerika Serikat, Kanada, Australia, dan Inggris."
    },
    {
      question: "Bagaimana sistem penilaian TOEFL iBT?",
      answer: "TOEFL iBT menggunakan skala 0-120, dengan setiap bagian (Reading, Listening, Speaking, Writing) dinilai 0-30. Skor dihitung menggunakan teknologi AI dan human raters untuk bagian Speaking dan Writing."
    },
    {
      question: "Apakah bisa mengulang tes TOEFL iBT?",
      answer: "Ya, Anda dapat mengulang tes TOEFL iBT setelah 3 hari dari tes sebelumnya. Tidak ada batasan jumlah pengulangan, namun Anda harus membayar biaya penuh untuk setiap tes."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              TOEFL iBT
              <span className="block text-blue-600 text-2xl md:text-3xl mt-2">
                Test of English as a Foreign Language - Internet-Based Test
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Tes kemampuan bahasa Inggris berbasis internet yang diterima secara global oleh lebih dari 11.500 universitas 
              dan institusi di 160+ negara untuk keperluan akademik, visa, dan karir profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/practice-tests"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg inline-flex items-center justify-center group"
              >
                Mulai Belajar
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/practice-tests"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg inline-flex items-center justify-center"
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
              Tentang TOEFL iBT
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Standar emas untuk mengukur kemampuan bahasa Inggris akademik di tingkat universitas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Apa itu TOEFL iBT?</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  TOEFL iBT (Internet-Based Test) adalah tes kemampuan bahasa Inggris yang mengukur 
                  kemampuan Anda untuk menggunakan dan memahami bahasa Inggris dalam konteks akademik. 
                  Tes ini dirancang untuk mengevaluasi seberapa baik Anda dapat menggabungkan keterampilan 
                  mendengar, membaca, berbicara, dan menulis.
                </p>
                <p>
                  Sebagai tes yang paling diterima secara luas di dunia, TOEFL iBT digunakan oleh 
                  universitas, agen imigrasi, dan organisasi profesional untuk menilai kemampuan 
                  bahasa Inggris calon mahasiswa dan profesional internasional.
                </p>
                <p>
                  Tes ini menggunakan konten akademik autentik dari kuliah universitas, diskusi kelas, 
                  dan materi bacaan untuk memberikan penilaian yang akurat tentang kesiapan Anda 
                  untuk sukses di lingkungan berbahasa Inggris.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h4 className="text-xl font-semibold text-blue-900 mb-4">Keunggulan TOEFL iBT</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-800">Diterima oleh 11.500+ universitas di 160+ negara</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-800">Format internet-based yang modern</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-800">Mengukur 4 keterampilan terintegrasi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-800">Hasil tersedia dalam 4-8 hari</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-800">Penilaian objektif dengan teknologi AI</span>
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
              Struktur Tes TOEFL iBT
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Empat bagian terintegrasi yang mengukur kemampuan bahasa Inggris akademik Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reading</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>3-4 teks</strong> • <strong>54-72 menit</strong></p>
                <p>Teks akademik dari berbagai disiplin ilmu</p>
                <p className="text-sm">Skor: 0-30</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Listening</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>3-4 kuliah, 2-3 percakapan</strong> • <strong>41-57 menit</strong></p>
                <p>Kuliah universitas dan percakapan kampus</p>
                <p className="text-sm">Skor: 0-30</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Mic className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Speaking</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>4 tugas</strong> • <strong>17 menit</strong></p>
                <p>Tugas independen dan terintegrasi</p>
                <p className="text-sm">Skor: 0-30</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Edit3 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Writing</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>2 tugas</strong> • <strong>50 menit</strong></p>
                <p>Esai terintegrasi dan independen</p>
                <p className="text-sm">Skor: 0-30</p>
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
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Jumlah Soal/Tugas</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Waktu</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Skor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">Reading</td>
                    <td className="py-3 px-4 text-gray-700">3-4 teks (36-56 soal)</td>
                    <td className="py-3 px-4 text-gray-700">54-72 menit</td>
                    <td className="py-3 px-4 text-gray-700">0-30</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">Listening</td>
                    <td className="py-3 px-4 text-gray-700">3-4 kuliah, 2-3 percakapan</td>
                    <td className="py-3 px-4 text-gray-700">41-57 menit</td>
                    <td className="py-3 px-4 text-gray-700">0-30</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">Break</td>
                    <td className="py-3 px-4 text-gray-700">-</td>
                    <td className="py-3 px-4 text-gray-700">10 menit</td>
                    <td className="py-3 px-4 text-gray-700">-</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">Speaking</td>
                    <td className="py-3 px-4 text-gray-700">4 tugas</td>
                    <td className="py-3 px-4 text-gray-700">17 menit</td>
                    <td className="py-3 px-4 text-gray-700">0-30</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">Writing</td>
                    <td className="py-3 px-4 text-gray-700">2 tugas</td>
                    <td className="py-3 px-4 text-gray-700">50 menit</td>
                    <td className="py-3 px-4 text-gray-700">0-30</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="py-3 px-4 font-semibold text-blue-900">Total</td>
                    <td className="py-3 px-4 font-semibold text-blue-900">-</td>
                    <td className="py-3 px-4 font-semibold text-blue-900">3 jam</td>
                    <td className="py-3 px-4 font-semibold text-blue-900">0-120</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Device Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Spesifikasi Perangkat
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Persyaratan teknis untuk mengikuti TOEFL iBT di pusat tes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Monitor className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-blue-900">Komputer & Monitor</h3>
              </div>
              <ul className="space-y-3 text-blue-800">
                <li>• Monitor LCD/LED minimal 15 inci</li>
                <li>• Resolusi minimal 1024x768</li>
                <li>• Keyboard QWERTY standar</li>
                <li>• Mouse dengan scroll wheel</li>
                <li>• Sistem operasi Windows/Mac terbaru</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Headphones className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-blue-900">Audio Equipment</h3>
              </div>
              <ul className="space-y-3 text-blue-800">
                <li>• Headset dengan mikrofon berkualitas</li>
                <li>• Noise-canceling headphones</li>
                <li>• Volume control yang dapat diatur</li>
                <li>• Audio test sebelum tes dimulai</li>
                <li>• Backup headset tersedia</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Wifi className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-blue-900">Koneksi Internet</h3>
              </div>
              <ul className="space-y-3 text-blue-800">
                <li>• Koneksi internet stabil dan cepat</li>
                <li>• Bandwidth minimal 1 Mbps</li>
                <li>• Backup koneksi tersedia</li>
                <li>• Firewall dan security settings</li>
                <li>• Technical support on-site</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Catatan Penting</h4>
                <p className="text-yellow-700">
                  Semua perangkat dan spesifikasi teknis disediakan oleh pusat tes resmi ETS. 
                  Peserta tidak perlu membawa perangkat sendiri. Pusat tes akan melakukan 
                  technical check sebelum tes dimulai untuk memastikan semua sistem berfungsi dengan baik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison with ITP */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perbandingan TOEFL iBT vs TOEFL ITP
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Memahami perbedaan utama antara kedua format tes TOEFL
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Aspek</th>
                    <th className="text-left py-4 px-6 font-semibold text-blue-600">TOEFL iBT</th>
                    <th className="text-left py-4 px-6 font-semibold text-purple-600">TOEFL ITP</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-gray-900">Format</td>
                    <td className="py-4 px-6 text-gray-700">Internet-based</td>
                    <td className="py-4 px-6 text-gray-700">Paper-based</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-gray-900">Bagian Tes</td>
                    <td className="py-4 px-6 text-gray-700">4 (Reading, Listening, Speaking, Writing)</td>
                    <td className="py-4 px-6 text-gray-700">3 (Listening, Structure, Reading)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-gray-900">Durasi</td>
                    <td className="py-4 px-6 text-gray-700">3 jam</td>
                    <td className="py-4 px-6 text-gray-700">115 menit</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-gray-900">Skor</td>
                    <td className="py-4 px-6 text-gray-700">0-120</td>
                    <td className="py-4 px-6 text-gray-700">310-677</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-gray-900">Biaya</td>
                    <td className="py-4 px-6 text-gray-700">$185-$300</td>
                    <td className="py-4 px-6 text-gray-700">$45-$65</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-gray-900">Penerimaan</td>
                    <td className="py-4 px-6 text-gray-700">Global (universitas, visa, imigrasi)</td>
                    <td className="py-4 px-6 text-gray-700">Institusi internal</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-gray-900">Hasil</td>
                    <td className="py-4 px-6 text-gray-700">4-8 hari</td>
                    <td className="py-4 px-6 text-gray-700">2-3 hari</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">Pendaftaran</td>
                    <td className="py-4 px-6 text-gray-700">Individual (ETS website)</td>
                    <td className="py-4 px-6 text-gray-700">Melalui institusi</td>
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
              Informasi lengkap tentang proses pendaftaran dan struktur biaya TOEFL iBT
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Proses Pendaftaran</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Buat Akun ETS</h4>
                    <p className="text-blue-700 text-sm">Daftar di website resmi ETS (ets.org/toefl)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Pilih Tanggal & Lokasi</h4>
                    <p className="text-blue-700 text-sm">Cari pusat tes terdekat dan jadwal yang tersedia</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Lengkapi Data</h4>
                    <p className="text-blue-700 text-sm">Isi informasi pribadi dan pilih institusi penerima skor</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Bayar & Konfirmasi</h4>
                    <p className="text-blue-700 text-sm">Lakukan pembayaran dan terima konfirmasi pendaftaran</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Struktur Biaya</h3>
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-gray-900">Biaya Tes TOEFL iBT</span>
                  <span className="text-2xl font-bold text-blue-600">$185 - $300</span>
                </div>
                <p className="text-gray-600 text-sm">
                  *Biaya bervariasi berdasarkan lokasi dan negara
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Indonesia</span>
                  <span className="font-semibold text-gray-900">$245</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Singapura</span>
                  <span className="font-semibold text-gray-900">$255</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Malaysia</span>
                  <span className="font-semibold text-gray-900">$240</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Termasuk pengiriman skor ke 4 institusi</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Reschedule: $60 (minimal 4 hari sebelum tes)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Pembayaran via kartu kredit/debit</span>
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
              Pusat tes TOEFL iBT tersedia di berbagai kota besar di Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Pusat Tes di Indonesia</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Jakarta</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• IALF Jakarta</li>
                      <li>• Kaplan Edupac</li>
                      <li>• IDP Education Jakarta</li>
                      <li>• ETS Authorized Test Center</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Surabaya</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• IALF Surabaya</li>
                      <li>• IDP Education Surabaya</li>
                      <li>• ETS Test Center Surabaya</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Bandung</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• IALF Bandung</li>
                      <li>• ETS Authorized Center</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Yogyakarta</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• IALF Yogyakarta</li>
                      <li>• ETS Test Center Yogya</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Medan</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• IALF Medan</li>
                      <li>• ETS Authorized Center</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Denpasar</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• IALF Bali</li>
                      <li>• ETS Test Center Bali</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Jadwal Tes</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Frekuensi:</strong> 50+ kali per tahun</p>
                  <p><strong>Hari:</strong> Sabtu & Minggu</p>
                  <p><strong>Waktu:</strong> Pagi (08.30) & Siang (13.30)</p>
                  <p><strong>Booking:</strong> Minimal 3 hari sebelum tes</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <Globe className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">TOEFL iBT Home Edition</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Tersedia:</strong> 24/7</p>
                  <p><strong>Lokasi:</strong> Rumah Anda</p>
                  <p><strong>Persyaratan:</strong> Komputer, webcam, internet stabil</p>
                  <p><strong>Biaya:</strong> Sama dengan tes di pusat</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Kapasitas</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Per Sesi:</strong> 15-30 peserta</p>
                  <p><strong>Booking:</strong> First come, first served</p>
                  <p><strong>Peak Season:</strong> Juli-September</p>
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
              Masa Berlaku & Penerimaan Global
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              TOEFL iBT diterima oleh ribuan institusi di seluruh dunia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Masa Berlaku Skor</h3>
              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-8 w-8 text-blue-600 mr-3" />
                  <span className="text-2xl font-bold text-blue-900">2 Tahun</span>
                </div>
                <p className="text-blue-700">
                  Skor TOEFL iBT berlaku selama 2 tahun dari tanggal pelaksanaan tes. 
                  Skor dapat diakses online dan dikirim ke institusi kapan saja selama periode ini.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Akses Online 24/7</h4>
                    <p className="text-gray-600 text-sm">Lihat skor dan kirim ke institusi melalui akun ETS</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Pengiriman Gratis</h4>
                    <p className="text-gray-600 text-sm">4 institusi gratis, tambahan $20 per institusi</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Skor Terbaik</h4>
                    <p className="text-gray-600 text-sm">MyBest Scores menggabungkan skor terbaik dari 2 tahun terakhir</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Penerimaan Global</h3>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Amerika Serikat</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• 100% universitas top 100</li>
                    <li>• Visa F-1, J-1, M-1</li>
                    <li>• Green Card & Citizenship</li>
                    <li>• Professional licensing</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Kanada</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Semua universitas</li>
                    <li>• Express Entry Immigration</li>
                    <li>• Provincial Nominee Program</li>
                    <li>• Professional associations</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Australia & Inggris</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Universitas Group of Eight</li>
                    <li>• Russell Group universities</li>
                    <li>• Student visa applications</li>
                    <li>• Skilled migration programs</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Negara Lain</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Jerman, Prancis, Belanda</li>
                    <li>• Jepang, Korea Selatan</li>
                    <li>• Singapura, Hong Kong</li>
                    <li>• 160+ negara di seluruh dunia</li>
                  </ul>
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
              Strategi komprehensif untuk mencapai skor target TOEFL iBT Anda
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reading</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Baca artikel akademik harian</li>
                <li>• Pelajari strategi skimming</li>
                <li>• Latihan soal inference</li>
                <li>• Perbanyak vocabulary akademik</li>
                <li>• Time management 18 menit/teks</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Listening</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Dengarkan kuliah TED Talks</li>
                <li>• Latihan note-taking</li>
                <li>• Fokus pada main ideas</li>
                <li>• Pahami academic discourse</li>
                <li>• Latihan dengan accent Amerika</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Mic className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Speaking</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Latihan daily conversation</li>
                <li>• Record & evaluate sendiri</li>
                <li>• Template untuk setiap task</li>
                <li>• Pronunciation & intonation</li>
                <li>• Time management ketat</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Edit3 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Writing</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Pelajari essay structure</li>
                <li>• Latihan integrated writing</li>
                <li>• Develop strong thesis</li>
                <li>• Transition words & phrases</li>
                <li>• Grammar & syntax accuracy</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Sumber Belajar Terpercaya</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Buku Resmi ETS</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Official Guide to TOEFL iBT</li>
                  <li>• Official TOEFL iBT Tests Volume 1 & 2</li>
                  <li>• ETS Vocabulary Builder</li>
                  <li>• Speaking and Writing Workout</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Platform Online</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Express English Hub (Platform ini)</li>
                  <li>• TOEFL Practice Online (TPO)</li>
                  <li>• Magoosh TOEFL Prep</li>
                  <li>• Kaplan TOEFL Prep</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Apps & Tools</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• TOEFL Go! Official App</li>
                  <li>• Anki for vocabulary</li>
                  <li>• Grammarly for writing</li>
                  <li>• Voice recorder apps</li>
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
              Jawaban untuk pertanyaan umum tentang TOEFL iBT
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

export default ToeflIbt;