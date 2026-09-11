import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { submitInquiry } from '../../services/api';

export default function GetACallBackMap() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Choose Services',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await submitInquiry(formData);

      setStatus({
        type: 'success',
        message: res?.message || 'Your message has been submitted successfully.',
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Choose Services',
        message: '',
      });
    } catch (err) {
      setStatus({
        type: 'error',
        message: err?.message || 'Error submitting message.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="qo-callback-section">
      {/* Background image is visible behind the red shape, like the reference */}
      <div className="qo-callback-image-overlay" aria-hidden="true" />

      {/* Red geometric overlay */}
      <div className="qo-callback-red-shape" aria-hidden="true" />

      {/* Right diagonal Google map with black divider */}
      <div className="qo-callback-map-shell">
        <div className="qo-callback-map-inner">
          <iframe
            title="Quantum Overseas Location"
            src="https://maps.google.com/maps?q=Quantum%20Overseas%20LLP%2C%20G-304%2C%20Prahlad%20Nagar%2C%20Ahmedabad%2C%20Gujarat%20380015&t=m&z=16&ie=UTF8&iwloc=near&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Form */}
      <div className="qo-callback-content">
        <div className="qo-callback-form-wrap">
          <div className="qo-callback-heading">
            <span className="qo-callback-eyebrow">CONTACT US</span>
            <h2>Get A Call Back</h2>
          </div>

          <form onSubmit={handleSubmit} className="qo-callback-form">
            {status.type === 'error' && (
              <div className="qo-callback-alert qo-callback-alert-error">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{status.message}</span>
              </div>
            )}

            {status.type === 'success' && (
              <div className="qo-callback-alert qo-callback-alert-success">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>{status.message}</span>
              </div>
            )}

            <div className="qo-callback-grid">
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="First Name"
                className="qo-callback-control"
              />

              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="qo-callback-control"
              />
            </div>

            <div className="qo-callback-grid">
              <input
                type="tel"
                name="phone"
                required
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="qo-callback-control"
              />

              <div className="qo-callback-select-wrap">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="qo-callback-control qo-callback-select"
                >
                  <option value="Choose Services">Choose Services</option>
                  <option value="Student Visa">Student Visa</option>
                  <option value="PR Visa">PR Visa</option>
                  <option value="Employment Visas">Employment Visas</option>
                  <option value="Visitor Visa">Visitor Visa</option>
                  <option value="Business / Investor Visa">
                    Business / Investor Visa
                  </option>
                  <option value="Family Visa">Family Visa</option>
                  <option value="Other Visa Programs">Other Visa Programs</option>
                </select>

                <ChevronDown
                  className="qo-callback-select-icon"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write Your Message"
              className="qo-callback-control qo-callback-textarea"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="qo-callback-submit"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-[18px] w-[18px] animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Us Messages</span>
                  <ChevronRight
                    className="h-[19px] w-[19px]"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
