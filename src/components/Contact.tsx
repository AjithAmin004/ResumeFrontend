import React, { useState } from "react";
import { Mail, Phone, MapPin } from 'lucide-react';

/**
 * A contact page component that displays contact information and a contact form.
 *
 * The contact information includes email, phone number, and location. The contact form
 * includes fields for name, email, message, and a submit button.
 *
 * The component is designed to be used as a standalone page, and is optimized for
 * use with the Tailwind CSS framework.
 *
 * @return {React.ReactElement} The contact page component.
 */
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      },
      body: JSON.stringify({ name, email, message }),
    });

    console.log("response:",response)
    if (response.ok) {
      alert('Message sent successfully');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      console.log(response)
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 px-4">
            Let's work together on your next project
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">Email</p>
                    <p className="text-gray-500">ajithamin33@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">Phone</p>
                    <p className="text-gray-500">+91 7259400268</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">Location</p>
                    <p className="text-gray-500">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-8 bg-gray-50 rounded-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;