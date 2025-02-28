import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    // Show success message (in a real app)
    alert('پیام شما با موفقیت ارسال شد.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">{t('contact.title')}</h1>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Form */}
              <div className="p-8">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      {t('contact.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    <Send size={20} />
                    {t('contact.send')}
                  </button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="bg-indigo-700 text-white p-8">
                <h2 className="text-2xl font-bold mb-6">اطلاعات تماس</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">{t('contact.address')}</h3>
                      <p>تهران، خیابان ولیعصر، خیابان بزرگمهر، پلاک 16، طبقه 3</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone size={24} className="mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">{t('contact.phone')}</h3>
                      <p>021-88776655</p>
                      <p>021-88776644</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail size={24} className="mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">{t('contact.emailAddress')}</h3>
                      <p>info@psychology-portal.ir</p>
                      <p>support@psychology-portal.ir</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;