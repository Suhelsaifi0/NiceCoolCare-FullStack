import React from "react";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="w-full bg-white">

      {/* ===== PAGE HEADER ===== */}
      <div className="bg-[#00194B] py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-2">About Us</h1>
        <p className="text-sm">Home / About</p>
      </div>

      {/* ===== ABOUT CONTENT ===== */}
      <div className="max-w-[1200px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold text-[#00194B] mb-4">
            Welcome to Nice Cool Care
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>Nice Cool Care</strong> is a trusted AC repair and service
            center located at <strong>A-8, Lohia Nagar, Near Railway Station,
            Ghaziabad</strong>. We provide reliable and affordable air
            conditioning solutions for both residential and commercial
            customers.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Our team of experienced and skilled technicians specializes in
            Split AC and Window AC installation, repair, gas refilling, and
            regular maintenance. We are committed to delivering quality
            service and ensuring complete customer satisfaction.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Split & Window AC Repair</li>
            <li>✔ AC Installation & Gas Refilling</li>
            <li>✔ Cooling, Gas Leakage & PCB Issue Solutions</li>
            <li>✔ Home and Office AC Services</li>
          </ul>
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-[#00194B] mb-4">
            Why Choose Nice Cool Care?
          </h3>

          <div className="space-y-4 text-gray-700">
            <p>👨‍🔧 Experienced and professional technicians</p>
            <p>⚡ Fast, reliable, and on-time service</p>
            <p>💰 Affordable and transparent pricing</p>
            <p>🏠 Doorstep AC service available</p>
            <p>⭐ Customer satisfaction is our top priority</p>
          </div>

          <div className="mt-6">
            <p className="font-semibold text-[#00194B]">📍 Address:</p>
            <p className="text-gray-600">
              A-8, Lohia Nagar, Near Railway Station, Ghaziabad
            </p>
          </div>
        </div>

      </div>
    <Footer/>
    </div>

  );
}

export default About;
