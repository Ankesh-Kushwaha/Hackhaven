import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const faqs = [
  {
    question: "How can I submit a medical case?",
    answer:
      "Click on 'Create Case' in the navigation menu. Fill out the required information and submit it for review.",
  },
  {
    question: "Is Cure Share free to use?",
    answer:
      "Yes, Cure Share is completely free for all doctors and healthcare professionals.",
  },
  {
    question: "Can I edit or delete a submitted case?",
    answer:
      "Yes, you can edit or remove your cases from the profile dashboard before they are published.",
  },
];

const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen px-4 py-16 bg-gradient-to-br from-blue-50 via-white to-purple-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Link to={"/"}>
          <div className="flex flex-col items-center justify-center mb-12">
            <img
              src="../images/logo.png" // Update this to your actual logo path
              alt="Cure Share Logo"
              className="w-20 h-20 mb-4 drop-shadow-md"
            />
            <h2 className="text-4xl font-extrabold text-center text-blue-800 drop-shadow-sm">
              Contact Cure Share
            </h2>
          </div>
        </Link>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-xl shadow-lg p-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="text-lg text-gray-700 space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" />{" "}
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" />{" "}
                <span>support@cureshare.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" />
                <span>123 Health Lane, MedCity, NY 10001</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-blue-600 hover:scale-110 transition">
                <Facebook />
              </a>
              <a href="#" className="text-pink-600 hover:scale-110 transition">
                <Instagram />
              </a>
              <a href="#" className="text-blue-400 hover:scale-110 transition">
                <Twitter />
              </a>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Send us a Message
            </h3>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none resize-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-5 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left font-medium text-blue-700 text-lg focus:outline-none"
                >
                  {faq.question}
                </button>
                <div
                  className={`mt-2 text-gray-600 text-sm transition-max-height duration-500 ease-in-out ${
                    openFAQ === index ? "max-h-40" : "max-h-0 overflow-hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
