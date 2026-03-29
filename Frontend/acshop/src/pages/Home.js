import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faLocationDot,
  faEnvelope,
  faPhone,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoNCC.jpg";
import AcImage from "../assets/AcImage.jpg";
import AcImage1 from "../assets/AcImage1.jpg";
import ImageMs from "../assets/ImageMS.png"
import ImageSA from "../assets/ImageSA.png"

function Home() {
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
    <div className="w-full">
      <div
        className="
    bg-[#00194B]
    min-h-[80px]
    flex flex-col sm:flex-row
    items-center
    justify-between
    gap-3 sm:gap-0
    px-4 sm:px-8 lg:px-[120px]
    py-3 sm:py-0
    text-white
    text-sm
  "
      >
        
        <div className="flex items-center gap-2 text-base sm:text-xl">
          <FontAwesomeIcon icon={faClock} />
          <span>09:00 am - 09:00 pm</span>
        </div>

        {/* Social */}
        <div className="flex items-center gap-4 text-base sm:text-xl">
          <span className="hidden sm:inline">Follow Us:</span>
          <FontAwesomeIcon
            className="cursor-pointer hover:text-orange-400"
            icon={faFacebookF}
          />
          <FontAwesomeIcon
            className="cursor-pointer hover:text-orange-400"
            icon={faInstagram}
          />
          <FontAwesomeIcon
            className="cursor-pointer hover:text-orange-400"
            icon={faXTwitter}
          />
        </div>
      </div>

      <div
        className="
    bg-white
    border
    flex flex-col lg:flex-row
    items-start lg:items-center
    justify-between
    gap-6 lg:gap-0
    px-4 sm:px-6 lg:px-[120px]
    py-6 lg:py-0
  "
      >
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="w-[45px] h-[45px] rounded-full flex-shrink-0">
            <img
              src={logo}
              alt="Nice Cool Care Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#00194B]">Nice Cool Care</h1>
            <p className="text-gray-500 text-sm">AC Expert</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4 lg:border-l lg:pl-6">
          <a
            href="https://www.google.com/maps?q=28.6716398,77.4384185"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 lg:border-l lg:pl-6 cursor-pointer"
          >
            <FontAwesomeIcon
              className="text-orange-500 text-xl flex-shrink-0"
              icon={faLocationDot}
            />
            <div>
              <p className="text-sm text-gray-500">Shop Location</p>
              <h2 className="font-semibold text-sm sm:text-base">
                A-8, Lohia Nagar, Near Railway Station, Ghaziabad
              </h2>
            </div>
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 lg:border-l lg:pl-6">
          <a
            href="mailto:nicecoolcare2025@gmail.com"
            className="flex items-center gap-4 lg:border-l lg:pl-6 cursor-pointer"
          >
            <FontAwesomeIcon
              className="text-orange-500 text-xl flex-shrink-0"
              icon={faEnvelope}
            />
            <div>
              <p className="text-sm text-gray-500">Send Email</p>
              <h2 className="font-semibold text-sm sm:text-base break-all">
                nicecoolcare2025@gmail.com
              </h2>
            </div>
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4 lg:border-l lg:pl-6">
          <FontAwesomeIcon
            className="text-orange-500 text-xl flex-shrink-0"
            icon={faPhone}
          />
          <div>
            <p className="text-sm text-gray-500">Call Emergency</p>

            <a
              href="tel:+918979882073"
              className="block font-semibold text-sm sm:text-base "
            >
              +91 89798 82073
            </a>

            <a
              href="tel:+917300703941"
              className="block font-semibold text-sm sm:text-base "
            >
              +91 7300703941
            </a>
          </div>
        </div>
      </div>

      {/* ===== HERO SECTION ===== */}
      <div className="relative w-full min-h-[500px] lg:min-h-[650px] overflow-hidden">
        {/* Background  Image */}
        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Heating Service"
          className="w-full h-full object-cover absolute inset-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70"></div>

        {/* Content Wrapper */}
        <div
          className="
      relative z-10
      flex flex-col lg:flex-row
      items-center
      justify-center lg:justify-between
      px-4 sm:px-6 lg:px-[120px]
      py-16 lg:py-0
      min-h-[500px] lg:min-h-[650px]
    "
        >
          {/* Left Content */}
          <div className="max-w-[520px] relative text-center lg:text-left">
            {/* Orange Border (Desktop only) */}
            <div className="hidden lg:block absolute -left-5 top-0 h-full border-l-4 border-orange-500"></div>

            <p className="text-orange-500 font-semibold mb-3">
              Complete Air Conditioning Solutions
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00194B] leading-tight mb-6">
              Trusted AC Repair <br className="hidden sm:block" />& Installation
              Experts
            </h1>

            <div className="flex justify-center lg:justify-start">
              <NavLink
                to="/contact"
                className="bg-orange-500 text-white px-6 py-3 font-medium hover:bg-orange-600 transition"
              >
                Explore More →
              </NavLink>
            </div>
          </div>

          {/* Right Images (Hidden on Mobile) */}
          <div className="hidden lg:flex items-end gap-6 absolute right-[120px] bottom-[40px]">
            <img
              src="https://pngimg.com/uploads/heater/heater_PNG31.png"
              alt="Heater"
              className="h-[220px]"
            />
            {/* <img
              src="https://pngimg.com/uploads/stove/stove_PNG59.png"
              alt="Oven"
              className="h-[340px]"
            /> */}
          </div>
        </div>
      </div>

      {/* ===== ABOUT COMPANY SECTION ===== */}
      <div className="w-full bg-white py-16 lg:py-[120px] px-4 sm:px-6 lg:px-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT IMAGE AREA */}
          <div className="relative">
            {/* Orange Side Bar (desktop only) */}
            <div className="hidden lg:block absolute -left-4 top-10 w-[6px] h-[70%] bg-orange-500 rounded"></div>

            {/* Main Image */}
            <img
              src={AcImage}
              alt="Worker"
              className="rounded-2xl w-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT AREA */}
          <div>
            {/* Section Title */}
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 sm:w-10 h-[2px] bg-orange-500"></span>
              <p className="text-orange-500 font-semibold text-sm sm:text-base">
                About Our Shop
              </p>
              <span className="w-8 sm:w-10 h-[2px] bg-orange-500"></span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00194B] leading-tight mb-6">
              We Provide Experienced <br className="hidden sm:block" /> &
              Quality Services
            </h1>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
              We are a trusted air conditioning service provider offering
              complete solutions for residential and commercial cooling systems.
              Our skilled technicians ensure fast, safe, and cost-effective
              services with a strong focus on customer satisfaction and
              long-term performance.
            </p>

            {/* Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm shrink-0">
                  ✓
                </span>
                <p className="text-[#00194B] font-medium text-sm sm:text-base">
                  Quick response time with reliable after-service support
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm shrink-0">
                  ✓
                </span>
                <p className="text-[#00194B] font-medium text-sm sm:text-base">
                  Customer-focused service with transparent pricing
                </p>
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="CEO"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full"
              />
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Onwer</p>
                <h3 className="font-bold text-[#00194B] text-sm sm:text-base">
                  Mukarram and Shahjad
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== OUR SERVICES SECTION ===== */}
      <div className="relative w-full bg-[#071c3f] py-16 sm:py-20 lg:py-[120px]">
        {/* ===== Section Header ===== */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-orange-400 font-semibold mb-3">
              — Our Services —
            </p>
            <h2 className="text-white text-3xl sm:text-4xl font-bold leading-snug">
              Reliable Air Conditioning <br className="hidden sm:block" />&
              Maintenance
            </h2>
          </div>

          {/* Right */}
          <div className="text-center md:text-left">
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Our team delivers fast, reliable, and affordable air conditioning
              services. We focus on quality workmanship, timely support, and
              long-lasting performance for all AC systems.
            </p>
          </div>
        </div>

        {/* ===== Services Cards ===== */}
        <div
          className="
      max-w-[1400px] mx-auto
      px-4 sm:px-6
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-6
      gap-6
    "
        >
          {/* Card 1 */}
          <div className="bg-white p-6 relative group">
            <span className="absolute top-4 right-4 text-gray-300 text-3xl font-bold">
              01
            </span>
            <h3 className="font-bold text-[#071c3f] mb-3">
              Air Installation Services
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Professional split & window AC installation with proper wiring,
              gas pressure check, and perfect airflow alignment for long-lasting
              performance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 relative group">
            <span className="absolute top-4 right-4 text-gray-300 text-3xl font-bold">
              02
            </span>
            <h3 className="font-bold text-[#071c3f] mb-3">
              Heating Installation
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Safe and efficient heating system installation ensuring consistent
              warmth, energy efficiency, and reliable performance for homes and
              offices.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 relative group">
            <span className="absolute top-4 right-4 text-gray-300 text-3xl font-bold">
              03
            </span>
            <h3 className="font-bold text-[#071c3f] mb-3">Heating and Water</h3>
            <p className="text-gray-500 text-sm mb-4">
              Complete heating and hot water solutions including maintenance,
              repair, and system optimization for uninterrupted comfort.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 relative group">
            <span className="absolute top-4 right-4 text-gray-300 text-3xl font-bold">
              04
            </span>
            <h3 className="font-bold text-[#071c3f] mb-3">Technical Support</h3>
            <p className="text-gray-500 text-sm mb-4">
              Quick technical support for AC issues like cooling problems,
              noise, leakage, electrical faults, and system diagnostics.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 relative group">
            <span className="absolute top-4 right-4 text-gray-300 text-3xl font-bold">
              05
            </span>
            <h3 className="font-bold text-[#071c3f] mb-3">
              Air Conditioner Installation
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Expert installation of split and window air conditioners with
              proper mounting, piping, wiring, and performance testing for
              maximum cooling efficiency.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 relative group">
            <span className="absolute top-4 right-4 text-gray-300 text-3xl font-bold">
              06
            </span>
            <h3 className="font-bold text-[#071c3f] mb-3">
              Diagnostic and Repair
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Advanced fault detection and reliable repair services for cooling
              issues, gas leakage, electrical faults, noise problems, and
              overall system performance.
            </p>
          </div>
        </div>
      </div>

      {/* ===== TEAM SECTION ===== */}
      <div className="relative w-full bg-white py-16 sm:py-20 lg:py-[120px] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:18px_18px] opacity-60"></div>

        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6">
          {/* ===== Header ===== */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <span className="w-8 h-[2px] bg-orange-500"></span>
                <p className="text-orange-500 font-semibold">Our Team Member</p>
                <span className="w-8 h-[2px] bg-orange-500"></span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#00194B]">
                Meet Our Expert Worker
              </h2>
            </div>
          </div>

          {/* ===== Team Cards ===== */}
          <div
            className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
      "
          >
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-xl text-center p-6 relative">
              <div className="bg-gray-100 rounded-lg p-6 mb-6">
                <img
                  src={ImageMs}
                  alt="Leslie Alexander"
                  className="mx-auto h-[200px] sm:h-[220px] object-cover"
                />
              </div>

              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mx-auto -mt-11 mb-4 text-white">
                +
              </div>

              <h3 className="font-bold text-[#00194B]">Mukarram</h3>
              <p className="text-gray-500 text-sm">
                LG (Life Good) Certified AC Technicians
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-xl text-center p-6 relative">
              <div className="bg-gray-100 rounded-lg p-6 mb-6">
                <img
                  src={ImageSA}
                  alt="Esther Howard"
                  className="mx-auto h-[200px] sm:h-[220px] object-cover"
                />
              </div>

              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mx-auto -mt-11 mb-4 text-white">
                +
              </div>

              <h3 className="font-bold text-[#00194B]">Shahjad</h3>
              <p className="text-gray-500 text-sm">
                Trusted AC Repair Specialists
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== STATS + CONTACT SECTION ===== */}
      <div className="relative w-full bg-[#071c3f] py-24 sm:py-32 lg:py-[140px] overflow-hidden">
        {/* ===== TOP ORANGE STATS BAR ===== */}
        <div
          className="
      absolute top-[-40px] left-1/2 -translate-x-1/2
      bg-orange-500
      w-[92%] sm:w-[85%] lg:w-[70%]
      py-6 sm:py-8
      grid grid-cols-2 sm:grid-cols-4
      gap-6
      text-white
      z-10
      rounded-xl
      text-center
    "
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mt-[20px]">50+</h3>
            <p className="text-sm">AC Installations</p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mt-[20px]">10+</h3>
            <p className="text-sm">Trained Technicians</p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mt-[20px]">100+</h3>
            <p className="text-sm">AC Repairs Completed</p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mt-[20px]">100+</h3>
            <p className="text-sm">Happy Clients</p>
          </div>
        </div>

        <div
          className="
      relative
      max-w-[1200px]
      mx-auto
      px-4 sm:px-6
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-12 lg:gap-16
      items-start
      mt-20
    "
        >
          {/* LEFT CONTENT */}
          <div className="text-white">
            <p className="text-orange-400 font-semibold mb-[10px] mt-[15px]">
              — Customer Benefits —
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
              Complete AC Repair <br /> & Cooling Solutions
            </h2>

            <p className="text-gray-300 mb-8 leading-relaxed">
              We provide reliable and affordable air conditioning solutions
              designed to keep your home and office comfortable all year round.
              Our expert technicians ensure quality service with long-lasting
              results.
            </p>

            {/* Feature 1 */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <h4 className="font-semibold">Reliable AC Repair Services</h4>
                <p className="text-gray-400 text-sm">
                  Fast diagnosis and effective repair to restore cooling
                  performance quickly.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <h4 className="font-semibold">Advanced AC Repair Solutions</h4>
                <p className="text-gray-400 text-sm">
                  Accurate troubleshooting with long-term performance assurance.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTACT FORM */}
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

      {/* ===== TESTIMONIALS SECTION ===== */}
      <div className="w-full bg-[#f7f8fa] py-16 sm:py-20 lg:py-[120px]">
        <div
          className="
      max-w-[1200px]
      mx-auto
      px-4 sm:px-6
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-12 lg:gap-20
      items-center
    "
        >
          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src={AcImage1}
              alt="AC Repair"
              className="rounded-lg object-cover w-full h-[260px] sm:h-[350px] lg:h-auto"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* Section Label */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              <p className="text-orange-500 font-semibold">Testimonials</p>
              <span className="w-8 h-[2px] bg-orange-500"></span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00194B] mb-8 text-center lg:text-left">
              What Our Client Say?
            </h2>

            {/* Testimonials Grid */}
            <div
              className="
          grid
          grid-cols-1
          sm:grid-cols-1
          lg:grid-cols-2
          gap-8
        "
            >
              {/* Testimonial 1 */}
              <div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Nice Cool Care provided excellent AC repair service at my
                  home. The technician arrived on time, identified the issue
                  quickly, and fixed it efficiently. The cooling performance
                  improved immediately. Highly recommended!
                </p>

                <div className="border-t border-orange-500 pt-4">
                  <h4 className="font-bold text-[#00194B]">Rohit Pandey</h4>
                  <p className="text-sm text-gray-500 mb-2">Ghaziabad</p>

                  <div className="flex gap-1 text-orange-500 text-sm">
                    ★ ★ ★ ★ ★
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Nice Cool Care delivers reliable and affordable AC services.
                  Their team is knowledgeable, polite, and professional. I am
                  very satisfied with their installation and maintenance work.
                </p>

                <div className="border-t border-orange-500 pt-4">
                  <h4 className="font-bold text-[#00194B]">Amit Kumar</h4>
                  <p className="text-sm text-gray-500 mb-2">Ghaziabad</p>

                  <div className="flex gap-1 text-orange-500 text-sm">
                    ★ ★ ★ ★ ★
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
