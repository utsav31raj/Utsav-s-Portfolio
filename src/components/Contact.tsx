import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Phone, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  useEffect(() => {
    console.log('Initializing EmailJS...');
    console.log('Public Key exists:', !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    console.log('Service ID exists:', !!import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log('Template ID exists:', !!import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    
    try {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('EmailJS initialization error:', error);
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setSuccessMessage(null);
    setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Log the environment variables and form data
    console.log('Sending email with:', {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      hasPublicKey: !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      formData: {
        ...formData,
        email: formData.email // logging email for debugging
      }
    });

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Admin', // Add recipient name if required by your template
          reply_to: formData.email
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      console.log('Success:', response);
      setSuccessMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed:', error);
      setErrorMessage('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl bg-dark-800 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-cyberpunk-blue">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="px-4 py-3 rounded-md bg-dark-700 border border-dark-600 text-white focus:ring-cyberpunk-blue focus:border-cyberpunk-blue"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="px-4 py-3 rounded-md bg-dark-700 border border-dark-600 text-white focus:ring-cyberpunk-blue focus:border-cyberpunk-blue"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className="px-4 py-3 rounded-md bg-dark-700 border border-dark-600 text-white focus:ring-cyberpunk-blue focus:border-cyberpunk-blue"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your Message"
              className="px-4 py-3 rounded-md bg-dark-700 border border-dark-600 text-white focus:ring-cyberpunk-blue focus:border-cyberpunk-blue resize-none"
            />
          </div>
          <motion.button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple text-white font-medium rounded-md hover:shadow-neon-blue transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
          >
            <Send size={18} />
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
        {successMessage && (
          <div className="mt-6 text-center text-green-400 font-semibold">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="mt-6 text-center text-red-400 font-semibold">{errorMessage}</div>
        )}
      </div>
    </section>
  );
};

export default Contact;