import React, { useState } from 'react';
import { 
  Globe,
  Send,
  CheckCircle,
  Users,
  Award,
  Target
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleOnlineRegistration = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfIjU2ZlkbdiH1mcfN2U6khlsRg-k3x-KrEkkPDGS_J2rZRsA/formResponse', '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleOnlineRegistration();
  };

  const contactMethods = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Online Form",
      description: "Daftar langsung melalui formulir online",
      contact: "Formulir Digital",
      action: "Daftar Online",
      color: "bg-[#e97311] hover:bg-[#d4640e]",
      onClick: handleOnlineRegistration
    }
  ];

  const officeHours = [
    { day: "Senin - Jumat", time: "08:00 - 20:00 WIB" },
    { day: "Sabtu", time: "08:00 - 17:00 WIB" },
    { day: "Minggu", time: "09:00 - 15:00 WIB" }
  ];

  const locations = [
    {
      city: "Jakarta Pusat",
      address: "Jl. Sudirman No. 123, Jakarta Pusat 10220",
      phone: "+62 21 1234 5678",
      email: "jakarta@expressenglishhub.com"
    },
    {
      city: "Surabaya",
      address: "Jl. Pemuda No. 45, Surabaya 60271",
      phone: "+62 31 8765 4321",
      email: "surabaya@expressenglishhub.com"
    },
    {
      city: "Bandung",
      address: "Jl. Dago No. 67, Bandung 40135",
      phone: "+62 22 9876 5432",
      email: "bandung@expressenglishhub.com"
    }
  ];

  const faqs = [
    {
      question: "Berapa lama waktu persiapan yang dibutuhkan?",
      answer: "Waktu persiapan bervariasi tergantung level awal dan target skor. Rata-rata 2-3 bulan untuk peningkatan signifikan."
    },
    {
      question: "Bisakah mengikuti kelas secara online?",
      answer: "Tentu! Kami menyediakan berbagai opsi pembelajaran: online self-paced, live Zoom sessions, dan hybrid learning."
    },
    {
      question: "Kapan jadwal tes TOEFL tersedia?",
      answer: "Tes TOEFL ITP tersedia setiap minggu, sedangkan TOEFL iBT mengikuti jadwal ETS internasional."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#e97311] to-orange-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Tim expert kami siap membantu Anda meraih skor TOEFL impian. 
              Daftar sekarang untuk memulai perjalanan Anda!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleOnlineRegistration}
                className="bg-white text-[#e97311] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center"
              >
                <Globe className="mr-2 h-5 w-5" />
                Daftar Online
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cara Menghubungi Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Daftar melalui formulir online untuk memulai perjalanan TOEFL Anda
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-md">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                  <div className={`w-16 h-16 ${method.color.split(' ')[0]} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <div className={`${method.color.split(' ')[0].replace('bg-', 'text-')}`}>
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                  <p className="font-medium text-gray-900 mb-4">{method.contact}</p>
                  <button
                    onClick={method.onClick}
                    className={`w-full text-white py-3 rounded-lg transition-colors font-semibold ${method.color}`}
                  >
                    {method.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e97311] focus:border-transparent"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e97311] focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      No. Telepon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e97311] focus:border-transparent"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Layanan yang Diminati
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e97311] focus:border-transparent"
                  >
                    <option value="">Pilih layanan</option>
                    <option value="TOEFL ITP Test Only">TOEFL ITP Test Only</option>
                    <option value="TOEFL iBT Test Only">TOEFL iBT Test Only</option>
                    <option value="TOEFL ITP Prep + Test">TOEFL ITP Prep + Test</option>
                    <option value="4-Hour Course + TOEFL ITP">4-Hour Course + TOEFL ITP</option>
                    <option value="10 Zoom Sessions + TOEFL ITP">10 Zoom Sessions + TOEFL ITP</option>
                    <option value="Informasi Umum">Informasi Umum</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan / Pertanyaan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e97311] focus:border-transparent"
                    placeholder="Ceritakan kebutuhan dan target skor TOEFL Anda..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#e97311] text-white py-3 rounded-lg hover:bg-[#d4640e] transition-colors font-semibold inline-flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Office Info */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Jam Operasional</h3>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-900">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-green-700 text-sm">
                    <CheckCircle className="h-4 w-4 inline mr-2" />
                    Respon formulir online dalam 24 jam
                  </p>
                </div>
              </div>

              {/* Locations */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Lokasi Kantor</h3>
                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{location.city}</h4>
                      <p className="text-gray-600 text-sm mb-2">{location.address}</p>
                      <div className="flex flex-col space-y-1 text-sm">
                        <span className="text-gray-600">📞 {location.phone}</span>
                        <span className="text-gray-600">✉️ {location.email}</span>
                      </div>
                    </div>
                  ))}
                </div>
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
              Jawaban cepat untuk pertanyaan umum seputar layanan kami
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Masih ada pertanyaan lain?</p>
            <button
              onClick={handleOnlineRegistration}
              className="bg-[#e97311] text-white px-6 py-3 rounded-lg hover:bg-[#d4640e] transition-colors font-semibold inline-flex items-center"
            >
              <Globe className="mr-2 h-5 w-5" />
              Daftar Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;