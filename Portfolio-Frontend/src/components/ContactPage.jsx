import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

const ContactPage = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState({ text: 'Send Message', status: 'idle' }); // idle, sending, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus({ text: 'Sending...', status: 'sending' });

    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
          console.log(result.text);
          setFormStatus({ text: 'Message Sent!', status: 'success' });
          form.current.reset(); // Form ko reset karein
          setTimeout(() => setFormStatus({ text: 'Send Message', status: 'idle' }), 5000);
      }, (error) => {
          console.log(error.text);
          setFormStatus({ text: 'Failed to Send', status: 'error' });
          setTimeout(() => setFormStatus({ text: 'Send Message', status: 'idle' }), 5000);
      });
  };

  return (
    <div className="text-white min-h-screen p-8 pt-24 flex items-center justify-center">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Info */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-400 text-lg mb-8">
            Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to discussing new ideas and opportunities.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">...</svg> {/* Add SVG path */}
                <span>wasiqzahoor1234@gmail.com</span>
            </div>
            {/* Add more info like phone, address if you want */}
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <form ref={form} onSubmit={sendEmail} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-lg space-y-6">
            <div>
              <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-gray-300">Full Name</label>
              <input type="text" name="from_name" id="user_name" required className="w-full bg-gray-700 border border-gray-600 rounded-md p-2.5 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" />
            </div>
            <div>
              <label htmlFor="user_email" className="block mb-2 text-sm font-medium text-gray-300">Email Address</label>
              <input type="email" name="from_email" id="user_email" required className="w-full bg-gray-700 border border-gray-600 rounded-md p-2.5 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your Message</label>
              <textarea name="message" id="message" rows="4" required className="w-full bg-gray-700 border border-gray-600 rounded-md p-2.5 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"></textarea>
            </div>
            <button
              type="submit"
              disabled={formStatus.status === 'sending'}
              className={`w-full py-3 rounded-md font-semibold transition-all duration-300
                ${formStatus.status === 'success' ? 'bg-green-500 text-white' : ''}
                ${formStatus.status === 'error' ? 'bg-red-500 text-white' : ''}
                ${formStatus.status === 'idle' || formStatus.status === 'sending' ? 'bg-cyan-500 text-gray-900 hover:bg-cyan-400' : ''}
                ${formStatus.status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}
              `}
            >
              {formStatus.text}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;