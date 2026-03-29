import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanedPhone = formData.phoneNo.replace(/\D/g, "");

    try {
      await axios.post("https://nicecoolcare-fullstack.onrender.com/api/contact", {
        name: formData.name,
        email: formData.email,
        phoneNo: cleanedPhone,
        service: formData.service,
        date: formData.date,
        message: formData.message,
      });

      toast.success("Thank You Contacting Nice Cool Care!");

      setFormData({
        name: "",
        email: "",
        phoneNo: "",
        service: "",
        date: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again!");
    }
  };

  return (
    <div className="w-full bg-white">
      {/* HEADER */}
      <div className="bg-[#00194B] py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-sm">Home / Contact Us</p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* LEFT INFO */}
        <div>
          <h2 className="text-3xl font-bold text-[#00194B] mb-4">
            Get in Touch with Nice Cool Care
          </h2>

          <p className="text-gray-600 mb-6">
            If you are facing any AC-related issues or want to book a service,
            feel free to contact us.
          </p>

          <div className="space-y-4">
            <p>
              <b>📍 Address:</b> A-8, Lohia Nagar, Near Railway Station,
              Ghaziabad
            </p>
            <p>
              <b>📞 Phone:</b> +91 8979882073, +91 7300703941
            </p>
            <p>
              <b>✉️ Email:</b> nicecoolcare2025@gmail.com
            </p>
            <p>
              <b>🕒 Hours:</b> 9:00 AM – 9:00 PM
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white p-6 sm:p-8 lg:p-10 shadow-xl rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Feel Free to Contact Us</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name *"
                className="border p-3 w-full"
                required
              />

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className="border p-3 w-full"
                required
              />

              <input
                name="phoneNo"
                type="tel"
                value={formData.phoneNo}
                onChange={handleChange}
                placeholder="Enter Phone Number *"
                className="border p-3 w-full"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="border p-3 w-full"
                required
              >
                <option value="">Select Service *</option>
                <option value="AC Installation">AC Installation</option>
                <option value="AC Repair">AC Repair</option>
                <option value="AC Gas Refilling">AC Gas Refilling</option>
                <option value="AC Maintenance">AC Maintenance</option>
                <option value="Emergency AC Service">
                  Emergency AC Service
                </option>
              </select>

              <input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="border p-3 w-full"
                required
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Message *"
              className="border p-3 w-full"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 w-full font-semibold hover:bg-orange-600"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
