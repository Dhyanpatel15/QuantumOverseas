/**
 * API Service Layer for Quantum Overseas
 * Connects frontend forms to backend endpoints, Webhooks, Email APIs (Formspree/EmailJS), or WhatsApp API
 */

export const submitInquiry = async (formData) => {
  if (!formData.name || !formData.phone || !formData.email) {
    throw new Error('Please fill in all required fields (Name, Phone, Email).');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    throw new Error('Please enter a valid email address.');
  }

  const phoneRegex = /^[0-9+-\s]{8,15}$/;
  if (!phoneRegex.test(formData.phone)) {
    throw new Error('Please enter a valid phone number.');
  }

  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.service ? `Inquiry for ${formData.service}` : 'General Inquiry',
      message: `Selected Country: ${formData.country || 'N/A'}\nSelected Service: ${formData.service || 'N/A'}\nMessage: ${formData.message || 'N/A'}`
    })
  });

  const text = await res.text();
  let data = {};
  try {
    data = JSON.parse(text);
  } catch (e) {
    throw new Error('Server is offline. Please start the backend server running node server/server.js');
  }

  if (!res.ok || !data.success) {
    throw new Error(data.message || 'Failed to send inquiry.');
  }

  return data;
};

export const submitContactMessage = async (contactData) => {
  if (!contactData.name || !contactData.name.trim()) {
    throw new Error('Please enter your name.');
  }

  if (!contactData.email || !contactData.email.trim()) {
    throw new Error('Please enter your email address.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(contactData.email.trim())) {
    throw new Error('Please enter a valid email address.');
  }

  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: contactData.name,
      email: contactData.email,
      subject: contactData.subject || 'Website Contact Form',
      message: contactData.message
    })
  });

  const text = await res.text();
  let data = {};
  try {
    data = JSON.parse(text);
  } catch (e) {
    throw new Error('Server is offline. Please start the backend server by running: node server/server.js');
  }

  if (!res.ok || !data.success) {
    throw new Error(data.message || 'Failed to send message.');
  }

  return data;
};

export const submitQuoteRequest = async (quoteData) => {
  if (!quoteData.name || !quoteData.phone) {
    throw new Error('Name and Phone number are required.');
  }

  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: quoteData.name,
      email: quoteData.email || 'not-provided@quantum.com',
      phone: quoteData.phone,
      subject: `Quote Request for ${quoteData.service || 'Visa Service'}`,
      message: `Quote Request Details:\nName: ${quoteData.name}\nPhone: ${quoteData.phone}\nService: ${quoteData.service || 'N/A'}`
    })
  });

  const text = await res.text();
  let data = {};
  try {
    data = JSON.parse(text);
  } catch (e) {
    throw new Error('Server is offline. Please start the backend server by running: node server/server.js');
  }

  if (!res.ok || !data.success) {
    throw new Error(data.message || 'Failed to submit quote request.');
  }

  return data;
};

export const generateWhatsAppLink = (message) => {
  const phone = '919998335441';
  const encoded = encodeURIComponent(message || 'Hello Quantum Overseas, I would like to know more about your visa consulting services.');
  return `https://wa.me/${phone}?text=${encoded}`;
};
