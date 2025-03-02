import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted! This would normally send an email.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Feel free to contact me for any work or suggestions. I'm always open to discussing new projects,
            creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-700 mb-8">
              Don't hesitate to reach out. I'm looking forward to hearing from you!
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-indigo-600 text-white p-3 rounded-lg mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <a href="mailto:uthayaa98428@gmail.com" className="text-gray-700 hover:text-indigo-600 transition-colors">
                    uthayaa98428@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-600 text-white p-3 rounded-lg mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <a href="tel:+916369714414" className="text-gray-700 hover:text-indigo-600 transition-colors">
                    +91 6369714414
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-600 text-white p-3 rounded-lg mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Location</h4>
                  <p className="text-gray-700">
                    Tamil Nadu, Namakkal, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {['github', 'linkedin', 'twitter', 'instagram'].map((social) => (
                  <a 
                    key={social}
                    href={`https://${social}.com`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 p-3 rounded-full shadow-md transition-colors"
                    aria-label={`Follow on ${social}`}
                  >
                    <img 
                      src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${social}.svg`} 
                      alt={social} 
                      className="w-5 h-5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-2/3"
          >
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Subject"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md flex items-center"
                >
                  Send Message <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;