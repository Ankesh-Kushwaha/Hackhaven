import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-purple-100 py-12 px-4"
    style={{
          background:
            "radial-gradient(ellipse at top , rgb(172, 194, 216) 10%, rgb(181, 165, 227) 40%, rgb(212, 188, 188) 100%)",
        }}
    >
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-2">Contact Us</h1>
        <p className="text-center text-gray-600 mb-10">
          We'd love to hear from you. Please fill out the form or reach us using the details below.
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Side - Info + Image */}
          <div className="lg:w-1/2 space-y-6">
            <img
              src="https://www.svgrepo.com/show/303309/contact-mail.svg"
              alt="Contact Illustration"
              className="w-full h-64 object-contain"
            />

            <div className="space-y-2 text-gray-700 text-sm">
              <p><strong>📍 Address:</strong> 123 Health St, MedCity, USA</p>
              <p><strong>📞 Phone:</strong> +1 (123) 456-7890</p>
              <p><strong>✉️ Email:</strong> contact@medclinic.com</p>
              <p><strong>🕒 Office Hours:</strong> Mon–Fri, 9:00 AM – 5:00 PM</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <form onSubmit={handleSubmit} className="lg:w-1/2 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
