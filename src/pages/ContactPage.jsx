import React, { useState } from 'react';
import { Phone, Mail, MapPin, User, ChevronRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';
import siteConfig from '../content/site.json';
import { submitContactMessage } from '../services/api';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await submitContactMessage(formData);
      setStatus({ type: 'success', message: res.message });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us - Quantum Overseas"
        description="Reach out to Quantum Overseas for inquiries, support, or guidance on overseas education, student visas, and immigration services."
        canonical="/contact"
      />

      <PageHeader
        title="Contact Us"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
      />

      {/* Main Contact Section */}
      <section id="contact-section" className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Contact Information */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#e20935] block mb-2">
                  // Get In Touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16171a] tracking-tight leading-tight">
                  Contact Us Today For Any Query &amp; Free Visa Consultation
                </h2>
                <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                  Have questions about studying abroad, visa processing, or course guidance? Reach out to our expert counselors for personalized advice.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6 pt-2">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#e20935]/20 transition-all">
                  <span className="w-12 h-12 rounded-xl bg-[#e20935] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-xs sm:text-[13px] font-bold text-[#e20935] block leading-tight">
                      Call Us Any Time
                    </span>
                    <a
                      href="tel:+919998335441"
                      className="text-base sm:text-lg font-extrabold text-[#16171a] hover:text-[#e20935] transition-colors block mt-0.5"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#e20935]/20 transition-all">
                  <span className="w-12 h-12 rounded-xl bg-[#16171a] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-xs sm:text-[13px] font-bold text-[#e20935] block leading-tight">
                      Send Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-base sm:text-lg font-extrabold text-[#16171a] hover:text-[#e20935] transition-colors block mt-0.5"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#e20935]/20 transition-all">
                  <span className="w-12 h-12 rounded-xl bg-[#e20935] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-xs sm:text-[13px] font-bold text-[#e20935] block leading-tight">
                      Location
                    </span>
                    <p className="text-sm sm:text-[15px] font-bold text-[#16171a] leading-snug mt-0.5 max-w-md">
                      Block G, 304 Titanium Business Centre, Prahladnagar, Ahmedabad - 380015, Gujarat, INDIA
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Meeting Image */}
              <div className="pt-2">
                <img
                  src="/images/contact-1.jpg"
                  alt="Quantum Overseas Consultation"
                  className="w-full h-auto max-h-[260px] object-cover rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100"
                />
              </div>
            </div>

            {/* Right Column: Fill Up The Form Card */}
            <div className="lg:col-span-6">
              <div
                id="fillup-form"
                className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-6 sm:p-10 lg:p-12 scroll-mt-28 sm:scroll-mt-32"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-[26px] font-extrabold text-[#16171a] tracking-tight">
                    Fill Up The Form
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    Your email address will not be published. Required fields are marked *
                  </p>
                </div>

                {status.type === 'success' ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center space-y-3 animate-fadeIn">
                    <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto" />
                    <h4 className="font-extrabold text-lg text-green-900">Thank You!</h4>
                    <p className="text-xs sm:text-sm text-green-700">{status.message}</p>
                    <button
                      type="button"
                      onClick={() => setStatus({ type: '', message: '' })}
                      className="mt-2 inline-flex items-center gap-1.5 bg-[#e20935] hover:bg-[#c0072b] text-white font-bold py-2.5 px-6 rounded text-xs transition-colors cursor-pointer"
                    >
                      <span>Send Another Message</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {status.type === 'error' && (
                      <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs sm:text-sm flex items-center gap-2.5 animate-fadeIn">
                        <AlertCircle className="w-4 h-4 flex-shrink-0 text-[#e20935]" />
                        <span>{status.message}</span>
                      </div>
                    )}

                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {/* Name Input */}
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name*"
                          className="w-full border border-gray-200 rounded-md px-4 py-3.5 pr-10 text-sm text-[#16171a] placeholder-gray-400 outline-none focus:border-[#e20935] focus:ring-1 focus:ring-[#e20935] transition-all bg-white"
                        />
                        <User className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>

                      {/* Email Input */}
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email*"
                          className="w-full border border-gray-200 rounded-md px-4 py-3.5 pr-10 text-sm text-[#16171a] placeholder-gray-400 outline-none focus:border-[#e20935] focus:ring-1 focus:ring-[#e20935] transition-all bg-white"
                        />
                        <Mail className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Subject Input */}
                    <div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="w-full border border-gray-200 rounded-md px-4 py-3.5 text-sm text-[#16171a] placeholder-gray-400 outline-none focus:border-[#e20935] focus:ring-1 focus:ring-[#e20935] transition-all bg-white"
                      />
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write Your Message"
                        className="w-full border border-gray-200 rounded-md px-4 py-3.5 text-sm text-[#16171a] placeholder-gray-400 outline-none focus:border-[#e20935] focus:ring-1 focus:ring-[#e20935] transition-all bg-white resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#e20935] hover:bg-[#c0072b] text-white font-bold text-sm px-8 py-3.5 sm:py-4 rounded transition-all duration-200 inline-flex items-center gap-2.5 shadow-md hover:shadow-lg disabled:opacity-70 cursor-pointer group"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Us Messages</span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Google Map Section */}
      <section className="w-full h-[450px] sm:h-[500px] lg:h-[540px] bg-gray-100 relative overflow-hidden">
        <iframe
          title="Quantum Overseas LLP Location"
          src="https://maps.google.com/maps?q=Quantum%20Overseas%20LLP,%20G%20304,%20Prahlad%20Nagar,%20Ahmedabad,%20Gujarat%20380015&t=&z=10&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full h-full"
        />
      </section>
    </>
  );
}
